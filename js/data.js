// All editable site content lives here. Paths are relative to the site root.
window.SITE = {
  // Fallback numbers; data/stats.json (refreshed hourly on the server) overrides these.
  stats: {
    visits: 88648440,
    favorites: 540387,
    upvotes: 204119,
    groupMembers: 1703668,
  },

  // Skills: dates come from commit history and dated project files.
  skills: [
    {
      "name": "Combat & weapons",
      "since": 2021,
      "blurb": "Weapons, hit detection and perks that need to feel fair with a full server.",
      "items": [
        [
          "2021",
          2021.4,
          "Tool system with ammo, heat and reloads"
        ],
        [
          "Jan 2023",
          2023.05,
          "SWRP gun system, built from scratch"
        ],
        [
          "Jul 2023",
          2023.55,
          "Perk system and loadouts"
        ],
        [
          "Aug 2023",
          2023.62,
          "Raycast and bullet system rework"
        ],
        [
          "Nov 2023",
          2023.87,
          "Ping estimation system"
        ],
        [
          "Jun 2024",
          2024.45,
          "Flamethrower with a teamkill policy"
        ]
      ],
      "learnt": "Combat is mostly a latency problem. The client makes it feel instant; the server decides what actually hit.",
      "svg": "<path d=\"m13 19 6-6\" /> <path d=\"M14.5 17.5 3.586 6.586A2 2 0 013 5.172V3h2.172a2 2 0 011.414.586L17.5 14.5\" /> <path d=\"m14.828 6.172 2.586-2.586A2 2 0 0118.828 3H21v2.172a2 2 0 01-.586 1.414l-2.586 2.586\" /> <path d=\"m16 16 4 4\" /> <path d=\"m19 21 2-2\" /> <path d=\"m5 14 4 4\" /> <path d=\"m5 21-2-2\" /> <path d=\"M7.5 16.5 4 20\" />"
    },
    {
      "name": "Roleplay systems",
      "since": 2023,
      "blurb": "The rules of the city: law and crime, jobs, ranks and progression.",
      "items": [
        [
          "Mar 2023",
          2023.2,
          "Jail and cuffs, then cuff evasion"
        ],
        [
          "Apr 2023",
          2023.28,
          "Bounties, outlaws and immigration booths"
        ],
        [
          "Apr 2023",
          2023.3,
          "Promotion and power points systems"
        ],
        [
          "Jul 2023",
          2023.53,
          "Medals and robbery KOS rules"
        ],
        [
          "Jan 2025",
          2025.05,
          "Credit and robbery overhaul"
        ],
        [
          "Jun 2025",
          2025.45,
          "Janitor job and random events"
        ]
      ],
      "learnt": "Roleplay systems are social rules turned into code. The edge cases come from players, so I ship, watch how it's played and adjust.",
      "svg": "<path d=\"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381\" /> <path d=\"m16 16 6-6\" /> <path d=\"m21.5 10.5-8-8\" /> <path d=\"m8 8 6-6\" /> <path d=\"m8.5 7.5 8 8\" />"
    },
    {
      "name": "Anti-cheat & security",
      "since": 2020,
      "blurb": "Keeping exploiters out without punishing real players.",
      "items": [
        [
          "Oct 2020",
          2020.77,
          "TIC anti-cheat: encrypted client checks, Discord logs"
        ],
        [
          "May 2021",
          2021.37,
          "Anticheat V2"
        ],
        [
          "Jul 2021",
          2021.55,
          "District Alpha bypass patch"
        ],
        [
          "Jun 2023",
          2023.45,
          "Server locks and anti-RK system"
        ],
        [
          "May 2024",
          2024.37,
          "Server-side transaction system"
        ],
        [
          "Oct 2024",
          2024.78,
          "Anti-cheat checks behind fast flags"
        ]
      ],
      "learnt": "A false ban costs more than a cheater. My first anti-cheat only ever kicked, never banned, and that stuck with me: detect, log, then decide.",
      "svg": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"m9 12 2 2 4-4\" />"
    },
    {
      "name": "UI, UX & onboarding",
      "since": 2021,
      "blurb": "Interfaces and first-time flows that players understand without reading.",
      "items": [
        [
          "Jul 2021",
          2021.55,
          "Minimap renderer experiment"
        ],
        [
          "Feb 2023",
          2023.12,
          "UI page, notification and controls systems"
        ],
        [
          "May 2023",
          2023.37,
          "Dialog system"
        ],
        [
          "Sep 2023",
          2023.7,
          "First tutorial system"
        ],
        [
          "Apr 2025",
          2025.28,
          "New promotion UI"
        ],
        [
          "Dec 2025",
          2025.95,
          "New GAR tutorial and recruitment flow"
        ]
      ],
      "learnt": "New players don't read. Arrows, trackers and one clear next step beat any wall of text.",
      "svg": "<rect width=\"7\" height=\"9\" x=\"3\" y=\"3\" rx=\"1\" /> <rect width=\"7\" height=\"5\" x=\"14\" y=\"3\" rx=\"1\" /> <rect width=\"7\" height=\"9\" x=\"14\" y=\"12\" rx=\"1\" /> <rect width=\"7\" height=\"5\" x=\"3\" y=\"16\" rx=\"1\" />"
    },
    {
      "name": "NPCs & AI behaviour",
      "since": 2018,
      "blurb": "Characters that patrol, fight, talk and react.",
      "items": [
        [
          "2018",
          2018.1,
          "Summoner zombies in my first game"
        ],
        [
          "Apr 2021",
          2021.3,
          "Pathfinding guard bots that move in formation"
        ],
        [
          "Nov 2023",
          2023.85,
          "NPC chatter on TextChatService"
        ],
        [
          "Jun 2024",
          2024.45,
          "Reusable NPC system"
        ],
        [
          "Oct 2024",
          2024.78,
          "Droid factory AI, barriers and turrets"
        ]
      ],
      "learnt": "Believable NPCs are mostly good data: formations, lines and states in tables, with a small, predictable brain on top.",
      "svg": "<path d=\"M12 8V4H8\" /> <rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\" /> <path d=\"M2 14h2\" /> <path d=\"M20 14h2\" /> <path d=\"M15 13v2\" /> <path d=\"M9 13v2\" />"
    },
    {
      "name": "Live ops & economy",
      "since": 2023,
      "blurb": "Events, rewards and monetisation that keep a game healthy for years.",
      "items": [
        [
          "Jun 2023",
          2023.45,
          "Codes system"
        ],
        [
          "Jan 2024",
          2024.05,
          "Donation system"
        ],
        [
          "May 2024",
          2024.37,
          "Sale data system"
        ],
        [
          "Oct 2024",
          2024.78,
          "Halloween candy event"
        ],
        [
          "Apr 2025",
          2025.28,
          "Bundles and gamepass trials"
        ],
        [
          "Jul 2025",
          2025.53,
          "Random events and in-game update logs"
        ]
      ],
      "learnt": "Revenue that lasts comes from content players look forward to, shipped on a steady rhythm.",
      "svg": "<path d=\"M13.744 17.736a6 6 0 1 1-7.48-7.48\" /> <path d=\"M15 6h1v4\" /> <path d=\"m6.134 14.768.866-.5 2 3.464\" /> <circle cx=\"16\" cy=\"8\" r=\"6\" />"
    },
    {
      "name": "Architecture & tooling",
      "since": 2021,
      "blurb": "Codebases that stay workable after years of features.",
      "items": [
        [
          "May 2021",
          2021.38,
          "First experiments with Rojo"
        ],
        [
          "Sep 2022",
          2022.67,
          "SWRP rework on Rojo, Wally and Selene"
        ],
        [
          "Dec 2023",
          2023.93,
          "Type annotations in core modules"
        ],
        [
          "May 2024",
          2024.36,
          "Shared module base, TimeSync and fast flags"
        ],
        [
          "May 2024",
          2024.38,
          "Multiple Kamino game types from one codebase"
        ]
      ],
      "learnt": "The codebase outlives every feature in it. Shared modules and one clock mean a bug gets fixed once, not seven times.",
      "svg": "<path d=\"M15 6a9 9 0 0 0-9 9V3\" /> <circle cx=\"18\" cy=\"6\" r=\"3\" /> <circle cx=\"6\" cy=\"18\" r=\"3\" />"
    },
    {
      "name": "Performance & rendering",
      "since": 2021,
      "blurb": "Smooth frames on the phones and laptops most players actually use.",
      "items": [
        [
          "Jun 2021",
          2021.45,
          "District Alpha optimisation pass"
        ],
        [
          "Aug 2021",
          2021.63,
          "A 2D game engine inside Roblox"
        ],
        [
          "Oct 2023",
          2023.78,
          "Gun system and threading optimisations"
        ],
        [
          "Oct 2024",
          2024.77,
          "Weather with thunder, lightning and bloom"
        ],
        [
          "Nov 2024",
          2024.85,
          "Zone culling"
        ],
        [
          "Apr 2025",
          2025.27,
          "Faster load-in"
        ]
      ],
      "learnt": "Measure on the devices players use. Most of the audience isn't on a gaming PC.",
      "svg": "<path d=\"m12 14 4-4\" /> <path d=\"M3.34 19a10 10 0 1 1 17.32 0\" />"
    },
    {
      "name": "Backend & integrations",
      "since": 2021,
      "blurb": "Services that connect the game, the database and Discord.",
      "items": [
        [
          "Jul 2021",
          2021.57,
          "HTTP layer with Trello and group integrations"
        ],
        [
          "Jan 2023",
          2023.03,
          "gar-api endpoints and virtual gamepasses"
        ],
        [
          "2023",
          2023.15,
          "gar-bot, with another developer"
        ],
        [
          "Nov 2023",
          2023.86,
          "Bot write requests into live servers"
        ],
        [
          "Aug 2025",
          2025.6,
          "Scheduled update announcements from Discord"
        ]
      ],
      "learnt": "Keep systems decoupled. The game and the bot never talk directly, so either can go down without taking the other with it.",
      "svg": "<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\" /> <rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\" /> <line x1=\"6\" x2=\"6.01\" y1=\"6\" y2=\"6\" /> <line x1=\"6\" x2=\"6.01\" y1=\"18\" y2=\"18\" />"
    }
  ],

  ai: {
    "since": 2026.0,
    "intro": "AI agents joined my workflow in 2026. I treat them like a fast junior developer: they get written rules, a test environment and a code review before anything ships.",
    "steps": [
      [
        "Rules first",
        "agents.md plus 13 task-specific docs (networking, player data, time sync, forces, gamepasses and more) so agents follow the codebase's conventions instead of inventing their own."
      ],
      [
        "Playtest in Studio",
        "Agents deploy and playtest through the Roblox Studio MCP, with a quick-deploy flag and a profiling guide that documents the traps, like measuring where the camera is instead of the player."
      ],
      [
        "Ship behind a switch",
        "New features go out behind fast flags with kill switches, so an experiment can be turned off live without a publish."
      ],
      [
        "Review like any PR",
        "Agent code gets the same review as mine: check the logic, strip the tell-tale formatting, conventional commits, and a public update log each release."
      ]
    ],
    "features": [
      [
        "Sep",
        "Ambient citizens with jobs and street reactions"
      ],
      [
        "Sep",
        "Border queues with banter, cutters, fights and bribes"
      ],
      [
        "Sep",
        "Flying vehicles and the Skyhopper"
      ],
      [
        "Sep",
        "Daily Spin and the Skyfire artillery perk"
      ],
      [
        "Sep",
        "Daily quests: border, pizzas, street lights"
      ],
      [
        "Aug",
        "Jedi Pizza job with NPC customers and B1 raids"
      ],
      [
        "Aug",
        "X-34 Landspeeder with boost and passenger toss"
      ],
      [
        "Aug",
        "Mandalorian progression and Hunter bounties"
      ],
      [
        "Jul",
        "Vehicle time trials"
      ],
      [
        "Jul",
        "Adaptive quality tiers for the rain system"
      ],
      [
        "Jul",
        "Memory monitor and off-tree instance tracking"
      ],
      [
        "Jun",
        "Ranked Saber Duels with ELO matchmaking"
      ],
      [
        "May",
        "Bounty contracts, smuggling and frisking"
      ],
      [
        "May",
        "Claimable areas and the Crystal Forge"
      ]
    ],
    "stat": "398 commits so far in 2026 · update logs shipped most weeks since July"
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
