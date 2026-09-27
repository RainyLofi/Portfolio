// All editable site content lives here. Paths are relative to the site root.
window.SITE = {
  features: [
    {
      title: "Ships & Flying Vehicles",
      year: 2026,
      kicker: "vehicles",
      video: "assets/video/ships",
      body:
        "Spawn a ship from your personal garage and take off from the landing pad into a full 3D flight model over the Coruscant skyline — engine, ascend and descend controls with a live speed and vehicle-health HUD.",
      tags: ["Flight controller", "Vehicle garage", "Physics", "HUD"],
    },
    {
      title: "Daily Rewards Calendar",
      year: 2026,
      kicker: "retention",
      video: "assets/video/daily-calendar",
      body:
        "A 30-day seasonal calendar with a live season countdown. Rewards mix credits with timed item and class trials (with a prompt to try them straight away), plus an optional unlock-all purchase.",
      tags: ["Seasons", "Streaks", "Trials", "Monetisation"],
    },
    {
      title: "Skystrike Ability",
      year: 2026,
      kicker: "ability",
      video: "assets/video/skystrike",
      body:
        "A call-in air strike. Players enter a top-down targeting camera (WASD to move, Q/E to rotate, scroll for height) with a timed window, confirm the strike, and a gunship flies in to level the area.",
      tags: ["Custom camera", "Targeting UI", "VFX", "Networking"],
    },
    {
      title: "Interactive Onboarding Tutorial",
      year: 2026,
      kicker: "new player experience",
      video: "assets/video/onboarding",
      body:
        "New players arrive as immigrants: queue at the border, hand over a passport and answer the guard's questions (tell the truth or lie), then get guided to the Plaza to join the GAR. Step-by-step tracker, world arrows and a skip option. Clip at 1.6× speed.",
      tags: ["Onboarding", "Quest tracker", "NPC interaction", "UX"],
    },
    {
      title: "Christmas Event — Missing Gifts",
      year: 2025,
      kicker: "seasonal event",
      video: "assets/video/christmas",
      body:
        "Santa dropped his gifts all over Coruscant. Pick one up, follow the arrows and minimap marker to its owner, and earn gift points for Santa's shop plus a credit tip — with a fully decorated winter map.",
      tags: ["Live event", "NPC dialogue", "Event currency", "Wayfinding"],
    },
    {
      title: "Daily Spin",
      year: 2026,
      kicker: "reward loop",
      video: "assets/video/daily-spin",
      body:
        "A once-a-day crate that rolls a timed weapon loan. Handles the locked → ready → opening → unlocked state machine, server-side cooldowns, a live countdown and an optional skip-the-wait purchase.",
      tags: ["State machine", "Cooldowns", "UI/UX", "Monetisation"],
    },
    {
      title: "Jedi Pizza — Work a Shift",
      year: 2026,
      kicker: "job system",
      video: "assets/video/pizza-job",
      body:
        "An NPC-driven job: talk to the chef, clock in, grab the pizza off the conveyor that matches an open order and deliver it to the right table for credits. Guided by a step-by-step quest tracker, world arrows and minimap pins.",
      tags: ["NPC dialogue", "Quest tutorial", "Conveyors", "Economy"],
    },
    {
      title: "Halloween Spin & Win",
      year: 2025,
      kicker: "seasonal event",
      video: "assets/video/halloween-spin",
      body:
        "An event-limited prize board: spin once or ten at a time, watch the reel land, and track progress towards a guaranteed grand prize via a pity counter. Visible odds and an event countdown.",
      tags: ["Reward board", "Pity system", "Odds display", "Event currency"],
    },
  ],

  showcase: [
    {
      title: "Bounty Board",
      img: "assets/img/ui/bounty-board.webp",
      body: "Cross-server contracts: browse live bounties, place your own and buy bounty protection. Data syncs across every running server.",
      tags: ["MessagingService", "Cross-server", "UI"],
    },
    {
      title: "Item Roll",
      img: "assets/img/ui/item-roll.webp",
      body: "Spend in-game credits to discover a new item — no Robux needed. Built as a self-contained UI module with preview panel and animation cues.",
      tags: ["Gacha UI", "Economy"],
    },
    {
      title: "Top-down Minimap",
      img: "assets/img/ui/minimap-topdown.webp",
      body: "Live minimap with prices, objective chevrons and custom markers for jobs, shops and events.",
      tags: ["Minimap", "Markers"],
    },
  ],

  projects: [
    {
      title: "Star Wars: Roleplay",
      img: "assets/img/brand/swrp-thumb.webp",
      url: "https://www.roblox.com/games/4238077359/Star-Wars-Roleplay",
      badge: "primary project · ~6 years of near-continuous work",
      body: "My main project — a sprawling Coruscant city with jobs, quests, teams, vehicles, events and a player economy.",
    },
    {
      title: "Clone Wars Tycoon",
      img: "assets/img/brand/tycoon-thumb.webp",
      badge: "in prototyping",
      body: "A faster-paced tycoon spin-off built on a shared framework.",
    },
  ],

  tools: [
    {
      name: "gar-api",
      lang: "Node.js · Express · MongoDB",
      body: "The backend that game servers talk to — promotions and rank syncing, bans and warnings, activity/time tracking, medals, virtual gamepasses, data transfers and batched Discord logging.",
    },
    {
      name: "CmdRelay",
      lang: "Node.js · Roblox Open Cloud",
      icon: "assets/img/brand/cmdrelay.webp",
      body: "A relay + dashboard for pushing commands into live game servers and watching server state (players, memory, uptime) without joining.",
    },
    {
      name: "devproduct-gamepass-creator",
      lang: "discord.js · Open Cloud",
      body: "Slash-command Discord bot that bulk-creates developer products and game passes from a simple Name|Price|Description list.",
    },
    {
      name: "roblox-oauth-verify",
      lang: "discord.js · Roblox OAuth 2.0",
      body: "Discord bot that proves a user owns a Roblox account via official OAuth — no bio codes, no cookies.",
    },
    {
      name: "rojo-template",
      lang: "Luau · Rojo · Aftman · Selene",
      body: "My starting point for every place: loader/controller architecture, ProfileStore data, bans, scene manager, signals and UI loader — all synced from VS Code.",
    },
  ],

  stack: [
    "Luau", "Roblox Studio", "Rojo", "Aftman", "Selene", "Wally", "ProfileStore",
    "MessagingService", "Open Cloud", "JavaScript", "Node.js", "Express", "MongoDB",
    "Mongoose", "MySQL", "discord.js", "noblox.js", "Git", "Linux / Apache", "Photoshop",
  ],
};
