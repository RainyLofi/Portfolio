// All editable site content lives here. Paths are relative to the site root.
window.SITE = {
  // Fallback numbers; data/stats.json (refreshed hourly on the server) overrides these.
  stats: {
    visits: 88648440,
    favorites: 540387,
    playing: 213,
    upvotes: 204119,
    rating: 69,
    groupMembers: 1703668,
  },

  features: [
    {
      title: "Ships & Flying Vehicles",
      lead: true,
      year: 2026,
      kicker: "vehicles",
      video: "assets/video/ships",
      body:
        "Spawn a ship from your garage, take off from the landing pad and fly it around the Coruscant skyline. Engine, ascend and descend controls, with speed and vehicle health shown on the HUD.",
      tags: ["Flight controller", "Vehicle garage", "Physics", "HUD"],
    },
    {
      title: "Skystrike Ability",
      year: 2026,
      kicker: "ability",
      video: "assets/video/skystrike",
      body:
        "A call-in air strike. You get a top-down targeting camera (WASD to move, Q/E to rotate, scroll for height) and a limited time to confirm, then the strike comes in on that spot.",
      tags: ["Custom camera", "Targeting UI", "VFX"],
    },
    {
      title: "Interactive Onboarding",
      year: 2026,
      kicker: "new player experience",
      video: "assets/video/onboarding",
      body:
        "New players arrive as immigrants with a passport of randomly generated details. They queue at the border, get called into a booth and have to answer the guard's questions so they match the passport, then get guided to the Plaza to join the GAR. Clip sped up 1.6x.",
      tags: ["Onboarding", "Quest tracker", "NPC interaction"],
    },
    {
      title: "Christmas Event: Missing Gifts",
      lead: true,
      year: 2025,
      kicker: "seasonal event",
      video: "assets/video/christmas",
      body:
        "Santa dropped his gifts around Coruscant. Pick one up, follow the arrows and minimap marker to the owner, and get gift points for Santa's shop plus a credit tip. The map got a full winter makeover for it.",
      tags: ["Live event", "NPC dialogue", "Event currency"],
    },
    {
      title: "Daily Rewards Calendar",
      year: 2026,
      kicker: "retention",
      video: "assets/video/daily-calendar",
      body:
        "A 30-day calendar that runs per season. Rewards mix credits with timed item and class trials you can use straight from the prompt. Day boundaries come from a shared server clock, so every server and client agrees on when a new day starts.",
      tags: ["Seasons", "Trials", "Time sync"],
    },
    {
      title: "Halloween Spin & Win",
      year: 2025,
      kicker: "seasonal event",
      video: "assets/video/halloween-spin",
      body:
        "An event prize board. Spin once or ten times, and a counter tracks progress towards a guaranteed top prize. Odds are shown up front, and a timer counts down to the end of the event.",
      tags: ["Reward board", "Pity system", "Odds display"],
    },
    {
      title: "Daily Spin",
      year: 2026,
      kicker: "reward loop",
      video: "assets/video/daily-spin",
      body:
        "A daily crate that gives a timed weapon loan, covering the locked, ready, opening and unlocked states. Cooldowns are enforced on the server, with a live countdown and an optional purchase to skip the wait.",
      tags: ["State machine", "Server cooldowns", "UI/UX"],
    },
    {
      title: "Jedi Pizza: Work a Shift",
      year: 2026,
      kicker: "job system",
      video: "assets/video/pizza-job",
      body:
        "A job you start by talking to the chef. Take the pizza off the conveyor that matches an open order and deliver it to the right table to earn credits, with a step-by-step tracker, world arrows and minimap pins.",
      tags: ["NPC dialogue", "Conveyors", "Economy"],
    },
  ],

  showcase: [
    {
      title: "Bounty Board",
      img: "assets/img/ui/bounty-board.webp",
      body: "Bounties that work across servers. Browse open ones, place your own and track the ones you've placed: kills remaining, status, who claimed it, and refunds if you cancel.",
      tags: ["Cross-server", "Economy", "UI"],
    },
    {
      title: "Stylist (Character Customization)",
      video: "assets/video/stylist",
      body: "Talk to the stylist NPC to change your hair, face and hair colour and see it on your character straight away, with featured, category and owned tabs.",
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
      badge: "primary project · ~6 years",
      featured: true,
      body: "A Coruscant city roleplay game for the GAR community, with jobs, quests, teams, vehicles, seasonal events and a player economy. Since 2022 I've been rebuilding it as one codebase that runs seven connected places.",
      facts: [
        ["2,150+", "commits since the 2022 rework"],
        ["7", "places, one codebase"],
      ],
    },
    {
      title: "Clone Wars Tycoon",
      img: "assets/img/brand/tycoon-thumb.webp",
      badge: "in prototyping",
      body: "A faster-paced tycoon spin-off built on the same framework as the main game.",
    },
  ],

  places: ["Coruscant", "Kamino", "Hub", "Battlegrounds", "Boss Fight", "Rally Point", "AFK Zone"],

  practices: [
    {
      title: "One codebase, seven places",
      body: "Rojo syncs a shared source tree into every place, with separate staging and live universes and per-environment settings, so changes get tested before players see them.",
    },
    {
      title: "Never trust the client",
      body: "Anything touching money or numbers is validated on the server. The client asks, the server decides.",
    },
    {
      title: "One clock for everything",
      body: "A shared time module drives daily resets, countdowns, event expiry and bounty timers, so every server and client agrees on what day it is.",
    },
    {
      title: "Change it live, safely",
      body: "Feature flags and scheduled updates can be flipped from Discord without publishing, and server restarts go through Roblox Open Cloud.",
    },
    {
      title: "Built for low-end devices",
      body: "Coruscant streams in as you move. Performance work means profiling draw calls and frame time where players actually are, not where the camera happens to point.",
    },
    {
      title: "Documented and reviewed",
      body: "Architecture, conventions and subsystems are written down in the repo, code is linted with Selene, and anything AI-assisted gets cleaned up and reviewed before it merges.",
    },
  ],

  tools: [
    {
      name: "gar-bot",
      lang: "discord.js · Node.js · MongoDB · Open Cloud",
      note: "co-developed",
      body: "The GAR community's Discord bot, with 45+ slash commands: OAuth account verification with role and nickname syncing; OPoints, power and raider XP with batch tools and generated leaderboard images; factions, medals, virtual gamepasses and sales; blacklists and background checks; and commands relayed into live game servers, with replies that update as results come back.",
    },
    {
      name: "gar-api",
      lang: "Node.js · Express · MongoDB",
      note: "co-developed",
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
      body: "A Discord bot that bulk-creates developer products and game passes from a Name|Price|Description list.",
    },
    {
      name: "roblox-oauth-verify",
      lang: "discord.js · Roblox OAuth 2.0",
      body: "A Discord bot that checks a user owns a Roblox account using Roblox's official OAuth, so there are no bio codes or cookies involved.",
    },
  ],

  stack: {
    game: ["Luau", "Roblox Studio", "Rojo", "Wally", "Selene", "TestEZ", "ProfileStore", "MessagingService", "GameAnalytics"],
    backend: ["Node.js", "Express", "MongoDB", "Mongoose", "discord.js", "noblox.js", "Open Cloud", "Linux / Apache"],
    workflow: ["Git", "VS Code", "Cursor", "Claude Code", "ChatGPT / Codex", "Monday", "Photoshop"],
  },

  // Newest last; rendered like `git log --oneline --reverse`.
  log: [
    ["~2020", "Started developing Star Wars: Roleplay for GAR"],
    ["Jul 2022", "Graduated: BSc Software Engineering"],
    ["Sep 2022", "Began the Coruscant rework: one codebase for every place"],
    ["2023", "Built gar-api and gar-bot with another developer"],
    ["2025", "Seasonal live events: Halloween Spin & Win, Christmas Missing Gifts"],
    ["2026", "Flight, Skystrike, onboarding and daily rewards; started Clone Wars Tycoon"],
    ["now", "Partner at Blueprint", "HEAD -> main"],
  ],
};
