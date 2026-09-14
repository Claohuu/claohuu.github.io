/* ============================================================
   SITE DATA — edit this file to add/remove content.
   No HTML editing needed for these sections: just add or
   delete an object from the array, save, commit, and push.
   ============================================================ */

const SITE_DATA = {

  // Shown in the games row on the home page.
  // image: path to a photo in /assets (e.g. "assets/games/hollow-knight.jpg")
  /* caption is an optional personal line — fill it in or leave it empty.
     crop shifts which part of the art survives the square crop; lower
     percentages keep more of the top, where cover logos usually sit. */
  games: [
    {
      title: "Valorant",
      developer: "Riot Games",
      caption: "",
      image: "assets/valorant.jpg",
      crop: "center 75%",
      link: "https://playvalorant.com/en-us/"
    },
    {
      title: "Death Stranding",
      developer: "Kojima Productions",
      caption: "",
      image: "assets/deathStranding.jpg",
      crop: "center 40%",
      link: "https://www.kojimaproductions.jp/index.php/en/death-stranding-dc"
    },
    {
      title: "Peak",
      developer: "Aggro Crab and Landfall Games",
      caption: "",
      image: "assets/peak.jpg",
      crop: "center center",
      link: "https://peakpeakpeak.com/"
    },
    {
      title: "Firewatch",
      developer: "Campo Santo",
      caption: "",
      image: "assets/firewatch.jpg",
      crop: "center top",
      link: "https://www.firewatchgame.com/"
    },
    {
      title: "The Forest",
      developer: "Endnight Games",
      caption: "",
      image: "assets/theforest.avif",
      link: "https://endnightgames.com/"
    }
  ],

  /* ------------------------------------------------------------
     experience / projects / volunteering all use the same shape.
     Each entry becomes one manila tab in the folder on its page:

       role        the tab label, and the title inside the folder
       org         line under the title
       when        dates
       description one or more paragraphs (an array makes paragraphs)
       skills      each key becomes a labeled box of chips
       images      photos down the right side of the folder;
                   add files to /assets and list them here
     ------------------------------------------------------------ */

  experience: [
    {
      role: "Gameplay Programming Intern",
      org: "Aggro Crab",
      when: "Jun 2026 – Oct 2026",
      description: [
        "Sole programming intern on an unannounced title. Designed a centralized entity manager that distributes visibility checks across staggered coroutine cycles, amortizing per-entity work over successive frames for a 25% increase in framerate.",
        "Built a custom Unity editor tool that procedurally places prefabs along a spline, sampling positions at configurable density with surface-snapping raycasts and gizmo previews, replacing manual hand-placement.",
        "Animated environmental assets with Blender shape keys, Shader Graph vertex-offset shaders, and rigged Unity Animator clips, then wired up the C# interaction logic and custom particle effects.",
        "Playtested and reviewed builds for one of the largest PEAK updates — a Unity title with 10M+ copies sold — after which concurrent players reached the top 15 on Steam."
      ],
      skills: {
        Languages: ["C#"],
        Tools: ["Unity", "Blender", "Shader Graph", "Git"]
      },
      // grid: fills across each row, so the pairs stay side by side
      shotsLayout: "grid",
      images: [
        { src: "assets/crabGroup.jpg" },
        { src: "assets/crabShack.jpg" },
        { src: "assets/crabChair.jpg" },
        { src: "assets/bingBong.jpg" }
      ]
    },
    {
      role: "Undergraduate Research Assistant",
      org: "The Machine Agency, University of Washington",
      when: "Aug 2025 – Dec 2025",
      description: [
        "Applied p5.fab across 3D print workflows for direct G-code machine control, stress-testing serial communication and specifying fixes for toolpath streaming failures. Compatible with 4+ industry standard printer models.",
        "Scripted custom toolpaths that bypass traditional CAD/CAM software in 3D printers, tuning low-level machine parameters such as extrusion rate and bed temperature to reach geometries standard slicers could not produce.",
        "Produced tactile graphics for visually impaired learners through programmatic texture generation and non-planar 3D prints."
      ],
      skills: {
        Languages: ["JavaScript", "G-code"],
        Tools: ["p5.fab", "p5.js", "3D Printing", "Git"]
      },
      smallShots: true,
      images: [
        { src: "assets/machineAgency (2).jpg" },
        { src: "assets/machineAgency.png" },
        { src: "assets/machineAgency4.png" }
      ]
    },
    {
      role: "Firmware Developer",
      org: "Washington Superbike",
      when: "Oct 2024 – Jun 2025",
      description: [
        "Designed a Hardware-in-the-Loop (HIL) system using Arduino, Raspberry Pi Pico, and Teensy with C++ to validate motor controller performance in electric motorcycles.",
        "Implemented CAN bus communication to simulate fault scenarios including battery overheating and precharge circuit failures, reducing undetected fault conditions by ~70% prior to physical motor controller testing.",
        "Outside of firmware, I designed team merchandise and posters and helped organize fundraisers to bring in more money for materials."
      ],
      skills: {
        Languages: ["C++"],
        Hardware: ["Arduino", "Raspberry Pi Pico", "Teensy", "CAN Bus"],
        Design: ["Merch", "Posters", "Fundraising"]
      },
      images: [
        { src: "assets/superbike.png" },
        { src: "assets/superbikeFundraiser.jpg" },
        { src: "assets/washingtonSuperbike.png" },
        { src: "assets/superbikeDesign.PNG" }
      ]
    },
    {
      role: "Software Engineering Intern",
      org: "Fair Worlds",
      when: "Aug 2023 – Jul 2024",
      description: [
        "Engineered geospatial web AR experiences using 8th Wall.js, Unity, JavaScript, and HTML for a VR/AR company specializing in immersive projects for major clients such as Amazon, AMD, and Dell.",
        "Co-developed the Seattle Art Tour in Niantic 8th Wall by 3D scanning 50+ public installations, animating assets in Adobe Aero, and implementing image recognition for AR navigation.",
        "One of the team projects I contributed to can be seen at <a href=\"https://www.spacetimeadventuretours.com/\" target=\"_blank\" rel=\"noopener\">spacetimeadventuretours.com</a>."
      ],
      skills: {
        Languages: ["JavaScript", "HTML"],
        Tools: ["8th Wall.js", "Adobe Aero"]
      },
      images: []
    }
  ],

  projects: [
    {
      role: "Singularituna",
      org: "Built in 3 days for the Nocturne Mini Jam",
      when: "2026",
      links: [
        { href: "https://ilazer.itch.io/fishvent-horizon", label: "▶ Play it on itch.io" },
        { href: "https://github.com/cuttincows/Nocturne", label: "View the code on GitHub" }
      ],
      description: "Adrift in deep space, your ship is sliding toward a black hole. You are low on fuel and starving, until you notice the eerie fish swarming the hull are both fuel and food. Burn them to buy distance, cook them to stay alive. The closer the black hole drags you, the stranger the catch gets: fish that turn invisible, teleport out of your aim, or fight back. Spear what you can, feed what's left to the reactor, and see how long you last.",
      bullets: [
        "Built the spearfishing loop as a four-state machine — held, throwing, thrown, retracting — driving a physics-based spear through Unity's Input System, with event hooks on hit, miss and retraction so audio, VFX and catch resolution stay decoupled from throw logic.",
        "Composed 15+ modular behavior components (invisibility, teleportation, stun response, flee-on-approach, proximity sensing, random targeting, bounds re-entry) layered onto five species, so alien abilities mix compositionally rather than forcing a subclass per fish.",
        "Built the scene flow moving the player between the main menu, the ship interior and the fishing station.",
        "Designed the interaction layer as a self-registering component pattern: every interactable aboard the ship adds itself to a shared registry on spawn and removes itself on destroy, letting one player-side dispatcher drive whatever is in range without hard references.",
        "Wired hunger and fuel as competing resource drains, with a shared item pipeline routing a single catch either to the stove for food or the reactor for fuel.",
        "Hooked up branching dialogue with interpreter jumps between nodes and a typewriter reveal synced to blip audio.",
        "Scoped, built and shipped in 72 hours."
      ],
      skills: {
        Languages: ["C#"],
        Engine: ["Unity", "Input System", "Shader Graph"],
        Systems: ["State machines", "ScriptableObjects", "Dialogue trees"]
      },
      youtube: "P2lRF7jyM3I",
      shotsLayout: "grid",
      images: [
        { src: "assets/singularitunaFullShot.png" },
        { src: "assets/singularitunaFishing.png" },
        { src: "assets/singularitunaFish.png", wide: true }
      ]
    },
    {
      role: "Mirror Monster",
      org: "December 2025 – March 2026",
      when: "",
      links: [
        { href: "https://ilazer.itch.io/mirror-monster", label: "▶ Play it on itch.io" },
        { href: "https://github.com/iLazer/Mirror-Monster", label: "View the code on GitHub" }
      ],
      description: "You're working the late shift at a bakery with a list of tasks to finish before morning. Something else is in here with you, a monster you can't see directly, only catch in reflections. Use the mirrors scattered around the bakery to track it while you knead, bake and haul out the trash, and try not to walk straight into it.",
      bullets: [
        "Co-developed a first-person horror-mystery in Unity built around an enemy that exists only in reflections. Geometry had to stay consistent with the player's real-time viewpoint rather than falling back on baked or static reflection probes.",
        "Engineered a custom ray tracing system in C# to compute mirror reflections, correcting the perspective distortion introduced by off-axis viewing angles and non-coplanar mirror surfaces.",
        "Randomized the monster's spawn placement across a pool of candidate points, gated by a minimum-distance check against the player so it can never materialize on top of you, with failing candidates rejected and re-rolled.",
        "Built the bakery task loop behind a shared interactable interface, with the dough station, oven, table, trashcan and dumpster each implementing their own completion logic.",
        "Produced all 2D art, the player model, and its animations."
      ],
      skills: {
        Languages: ["C#"],
        Engine: ["Unity"],
        Tools: ["Adobe Suite"]
      },
      youtube: "-g7lSmiqep4",
      shotsLayout: "grid",
      images: [
        { src: "assets/MirrorMonster1.png" },
        { src: "assets/mirrormonsterDumpster.png" },
        { src: "assets/mirrormonsterBakery.png", wide: true }
      ]
    }
  ],

  volunteering: [
    {
      role: "Role title",
      org: "Organization name",
      when: "Month Year – Month Year",
      description: "A sentence or two about what you did and why it mattered to you.",
      skills: {
        Skills: ["Add a skill", "Add another"]
      },
      images: []
    }
  ],

  // Shown on art.html as a grid.
  // image: path to a photo in /assets (e.g. "assets/art/piece-1.jpg")
  art: [
    { title: "Piece title", caption: "medium, year", image: "" },
    { title: "Piece title", caption: "medium, year", image: "" },
    { title: "Piece title", caption: "medium, year", image: "" }
  ]
};
