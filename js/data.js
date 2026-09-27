// All editable site content lives here. Paths are relative to the site root.
window.SITE = {
  features: [
    {
      title: "Daily Spin",
      kicker: "reward loop",
      video: "assets/video/daily-spin",
      body:
        "A once-a-day crate that rolls a timed weapon loan. Handles the locked → ready → opening → unlocked state machine, server-side cooldowns, a live countdown and an optional skip-the-wait purchase.",
      tags: ["Luau", "State machine", "UI/UX", "Monetisation"],
    },
    {
      title: "Jedi Pizza — Work a Shift",
      kicker: "job system",
      video: "assets/video/pizza-job",
      body:
        "An NPC-driven job: talk to the chef, clock in, grab the highlighted pizza off a conveyor that matches an open order and deliver it to the right table for credits. Guided by a step-by-step quest tracker, world arrows and minimap pins.",
      tags: ["NPC dialogue", "Quest tutorial", "Conveyors", "Economy"],
    },
    {
      title: "Vehicles & Street Lights",
      kicker: "daily quest",
      video: "assets/video/street-lights",
      body:
        "A personal garage of hover vehicles with health, speed and boost pads, tied into a quest to ram and destroy street lights around the city. Includes the team-specific Daily Quests board that resets every day.",
      tags: ["Vehicles", "Physics", "Daily quests", "Garage UI"],
    },
    {
      title: "Guard the Border",
      kicker: "daily quest",
      video: "assets/video/border-patrol",
      body:
        "A Republic-side duty quest: head to the border, hold a highlighted post and maintain order until the timer runs out — with double-time rewards for staying on post and a proper death/respawn flow when raiders get through.",
      tags: ["Team roles", "Timers", "Combat", "Rewards"],
    },
    {
      title: "Clone Wars Tycoon",
      kicker: "prototype",
      video: "assets/video/tycoon",
      body:
        "A standalone tycoon: pick a legion, then build out extractors, droppers and glowing conveyor lines that feed your income. Custom level / XP and cash-multiplier HUD on top.",
      tags: ["Tycoon framework", "Teams", "Progression", "HUD"],
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
