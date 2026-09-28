#!/usr/bin/env python3
"""Refresh data/stats.json with public Roblox stats for Star Wars: Roleplay and the GAR group.

Run hourly from cron on the VPS. The site reads data/stats.json and falls back to the
numbers baked into js/data.js if the file is missing or stale.
"""
import json
import os
import sys
import time
import urllib.request

UNIVERSE_ID = 1383204830
GROUP_ID = 5214183
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "data", "stats.json")


def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "rainylofi.xyz stats", "Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.loads(r.read())


def main():
    game = get(f"https://games.roblox.com/v1/games?universeIds={UNIVERSE_ID}")["data"][0]
    votes = get(f"https://games.roblox.com/v1/games/votes?universeIds={UNIVERSE_ID}")["data"][0]
    group = get(f"https://groups.roblox.com/v1/groups/{GROUP_ID}")
    up, down = votes["upVotes"], votes["downVotes"]
    stats = {
        "visits": game["visits"],
        "favorites": game["favoritedCount"],
        "playing": game["playing"],
        "upvotes": up,
        "rating": round(100 * up / max(1, up + down)),
        "groupMembers": group["memberCount"],
        "updated": int(time.time()),
    }
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    tmp = OUT + ".tmp"
    with open(tmp, "w") as f:
        json.dump(stats, f)
    os.replace(tmp, OUT)  # atomic, so the site never reads a half-written file
    print(json.dumps(stats))


if __name__ == "__main__":
    try:
        main()
    except Exception as e:  # keep the last good file on any failure
        print(f"stats update failed: {e}", file=sys.stderr)
        sys.exit(1)
