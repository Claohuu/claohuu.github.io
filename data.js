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
      // portrait/landscape interleaved so the two columns balance evenly
      images: [
        { src: "assets/crabChair.jpg" },
        { src: "assets/crabGroup.jpg" },
        { src: "assets/bingBong.jpg" },
        { src: "assets/crabShack.jpg" }
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
      role: "Ray Tracer",
      org: "Personal project",
      when: "2026",
      description: "What you built, what problem it solves, and the part you're most proud of.",
      skills: {
        Languages: ["C++"],
        Topics: ["Path tracing", "BVH", "Linear algebra"]
      },
      images: []
    },
    {
      role: "Shader Playground",
      org: "Personal project",
      when: "2025",
      description: "What you built, what problem it solves, and the part you're most proud of.",
      skills: {
        Languages: ["GLSL", "JavaScript"],
        Tools: ["WebGL", "Three.js"]
      },
      images: []
    },
    {
      role: "Mesh Generator",
      org: "Course project",
      when: "2025",
      description: "What you built, what problem it solves, and the part you're most proud of.",
      skills: {
        Languages: ["Python"],
        Topics: ["Procedural geometry", "Marching cubes"]
      },
      images: []
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
