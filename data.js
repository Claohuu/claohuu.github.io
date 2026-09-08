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
      crop: "center 35%"
    },
    {
      title: "Death Stranding",
      developer: "Kojima Productions",
      caption: "",
      image: "assets/deathStranding.jpg",
      crop: "center 40%"
    },
    {
      title: "Peak",
      developer: "Aggro Crab and Landfall Games",
      caption: "",
      image: "assets/peak.jpg",
      crop: "center center"
    },
    {
      title: "Firewatch",
      developer: "Campo Santo",
      caption: "",
      image: "assets/firewatch.jpg",
      crop: "center top"
    },
    {
      title: "Sons of the Forest",
      developer: "Endnight Games",
      caption: "",
      image: "assets/Sons_of_the_Forest.jpg",
      crop: "center top"
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
      role: "Undergraduate Research Assistant",
      org: "The Machine Agency, University of Washington",
      when: "Aug 2025 – Dec 2025",
      description: "Supported development of p5.fab, a library for G-code serial communication with p5.js.",
      skills: {
        Languages: ["JavaScript", "G-code"],
        Tools: ["p5.js", "Node.js", "Git"]
      },
      images: [
        // { src: "assets/experience/machine-agency-1.jpg", caption: "short caption" }
      ]
    },
    {
      role: "Firmware Developer",
      org: "Washington Superbike",
      when: "Oct 2024 – Jun 2025",
      description: "Built a hardware-in-the-loop testing system using Arduino, Raspberry Pi Pico, and Teensy over CAN bus.",
      skills: {
        Languages: ["C++", "C"],
        Hardware: ["Arduino", "Raspberry Pi Pico", "Teensy", "CAN bus"]
      },
      images: []
    },
    {
      role: "Software Engineering Intern",
      org: "Fair Worlds",
      when: "Aug 2023 – Jul 2024",
      description: "Built geospatial web AR experiences with 8th Wall.js and Unity.",
      skills: {
        Languages: ["JavaScript", "C#"],
        Tools: ["8th Wall", "Unity", "WebAR"]
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
