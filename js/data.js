// All editable site content lives here. Paths are relative to the site root.
window.SITE = {
  features: [
    {
      title: "Ships & Flying Vehicles",
      year: 2026,
      kicker: "vehicles",
      video: "assets/video/ships",
      body:
        "Spawn a ship from your garage, take off from the landing pad and fly it around the Coruscant skyline. Engine, ascend and descend controls, with speed and vehicle health shown on the HUD.",
      tags: ["Flight controller", "Vehicle garage", "Physics", "HUD"],
    },
    {
      title: "Daily Rewards Calendar",
      year: 2026,
      kicker: "retention",
      video: "assets/video/daily-calendar",
      body:
        "A 30-day calendar that runs per season, with a countdown to the next one. Rewards are a mix of credits and timed item or class trials, and a trial can be used straight away from the prompt. There's also an optional unlock-all purchase.",
      tags: ["Seasons", "Streaks", "Trials", "Monetisation"],
    },
    {
      title: "Skystrike Ability",
      year: 2026,
      kicker: "ability",
      video: "assets/video/skystrike",
      body:
        "A call-in air strike. You get a top-down targeting camera (WASD to move, Q/E to rotate, scroll for height) and a limited time to confirm, then the strike comes in on that spot.",
      tags: ["Custom camera", "Targeting UI", "VFX", "Networking"],
    },
    {
      title: "Interactive Onboarding Tutorial",
      year: 2026,
      kicker: "new player experience",
      video: "assets/video/onboarding",
      body:
        "New players start as immigrants. They queue at the border, hand over a passport and answer the guard's questions (truthfully or not), then get sent to the Plaza to join the GAR. A tracker, world arrows and a skip button guide them through it. The clip is sped up 1.6x.",
      tags: ["Onboarding", "Quest tracker", "NPC interaction", "UX"],
    },
    {
      title: "Christmas Event: Missing Gifts",
      year: 2025,
      kicker: "seasonal event",
      video: "assets/video/christmas",
      body:
        "Santa dropped his gifts around Coruscant. Pick one up, follow the arrows and minimap marker to the owner, and get gift points to spend in Santa's shop plus a credit tip. The map got a full winter makeover for it.",
      tags: ["Live event", "NPC dialogue", "Event currency", "Wayfinding"],
    },
    {
      title: "Daily Spin",
      year: 2026,
      kicker: "reward loop",
      video: "assets/video/daily-spin",
      body:
        "A daily crate that gives a timed weapon loan. It covers the locked, ready, opening and unlocked states, with server-side cooldowns, a live countdown and an optional purchase to skip the wait.",
      tags: ["State machine", "Cooldowns", "UI/UX", "Monetisation"],
    },
    {
      title: "Jedi Pizza: Work a Shift",
      year: 2026,
      kicker: "job system",
      video: "assets/video/pizza-job",
      body:
        "A job you start by talking to the chef. Take the pizza off the conveyor that matches an open order and deliver it to the right table to earn credits. A step-by-step tracker, world arrows and minimap pins show new players what to do.",
      tags: ["NPC dialogue", "Quest tutorial", "Conveyors", "Economy"],
    },
    {
      title: "Halloween Spin & Win",
      year: 2025,
      kicker: "seasonal event",
      video: "assets/video/halloween-spin",
      body:
        "An event prize board. Spin once or ten times, and a counter tracks progress towards a guaranteed top prize. Odds are shown up front, and a timer counts down to the end of the event.",
      tags: ["Reward board", "Pity system", "Odds display", "Event currency"],
    },
  ],

  showcase: [
    {
      title: "Bounty Board",
      img: "assets/img/ui/bounty-board.webp",
      body: "Bounties that work across servers. Browse open ones, place your own and keep track of the ones you've placed: kills remaining, status, who claimed it, and refunds if you cancel.",
      tags: ["Cross-server", "Economy", "UI"],
    },
    {
      title: "Stylist (Character Customization)",
      video: "assets/video/stylist",
      body: "Talk to the stylist NPC to change your hair, face and hair colour and see it on your character straight away. It has featured, category and owned tabs, and links to buy matching items on Roblox.",
      tags: ["Avatar", "NPC interaction", "Shop UI"],
    },
    {
      title: "Coruscant Map",
      img: "assets/img/ui/coruscant-map.webp",
      body: "A full-screen map with district labels, markers for jobs, shops and events, and the in-game time.",
      tags: ["Map", "Markers", "Wayfinding"],
    },
  ],

  projects: [
    {
      title: "Star Wars: Roleplay",
      img: "assets/img/brand/swrp-thumb.webp",
      url: "https://www.roblox.com/games/4238077359/Star-Wars-Roleplay",
      badge: "primary project · ~6 years of near-continuous work",
      body: "My main project. A Coruscant city roleplay game with jobs, quests, teams, vehicles, seasonal events and a player economy.",
    },
    {
      title: "Clone Wars Tycoon",
      img: "assets/img/brand/tycoon-thumb.webp",
      badge: "in prototyping",
      body: "A faster-paced tycoon spin-off that shares a framework with the main game.",
    },
  ],

  tools: [
    {
      name: "gar-bot",
      lang: "discord.js · Node.js · MongoDB · Open Cloud",
      body: "The GAR community's Discord bot, with 45+ slash commands across Discord, Roblox, MongoDB and Trello. It handles OAuth account verification with role, nickname and autorole syncing; OPoints, power and raider XP, with batch tools and generated leaderboard images; factions, medals, virtual gamepasses, sales and star codes; blacklists and background checks. It can also relay commands into live game servers and update its reply as results come back.",
    },
    {
      name: "gar-api",
      lang: "Node.js · Express · MongoDB",
      body: "The backend the game servers call for promotions and rank syncing, bans and warnings, activity tracking, medals, virtual gamepasses, data transfers and batched Discord logging.",
    },
    {
      name: "CmdRelay",
      lang: "Node.js · Roblox Open Cloud",
      icon: "assets/img/brand/cmdrelay.webp",
      body: "A relay and dashboard for sending commands to live game servers and checking server state (players, memory, uptime) without joining.",
    },
    {
      name: "devproduct-gamepass-creator",
      lang: "discord.js · Open Cloud",
      body: "A Discord bot with slash commands that bulk-creates developer products and game passes from a Name|Price|Description list.",
    },
    {
      name: "roblox-oauth-verify",
      lang: "discord.js · Roblox OAuth 2.0",
      body: "A Discord bot that checks a user owns a Roblox account using Roblox's official OAuth, so there are no bio codes or cookies involved.",
    },
  ],

  stack: [
    "Luau", "Roblox Studio", "Rojo", "Aftman", "Selene", "Wally", "ProfileStore",
    "MessagingService", "Open Cloud", "JavaScript", "Node.js", "Express", "MongoDB",
    "Mongoose", "MySQL", "discord.js", "noblox.js", "Git", "Linux / Apache", "Photoshop",
  ],
};
