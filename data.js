/* ============================================================
   SITE DATA — edit this file to add/remove content.
   No HTML editing needed for these sections: just add or
   delete an object from the array, save, commit, and push.
   ============================================================ */

const SITE_DATA = {

  // Shown in the "Favorite games" row on the home page.
  // image: path to a photo in /assets (e.g. "assets/games/hollow-knight.jpg")
  games: [
    {
      title: "Game Title",
      caption: "why you love it, in a few words",
      image: ""
    },
    {
      title: "Game Title",
      caption: "why you love it, in a few words",
      image: ""
    },
    {
      title: "Game Title",
      caption: "why you love it, in a few words",
      image: ""
    }
  ],

  // Shown on experience.html, most recent first.
  experience: [
    {
      role: "Undergraduate Research Assistant",
      org: "The Machine Agency, University of Washington",
      when: "Aug 2025 – Dec 2025",
      description: "Supported development of p5.fab, a library for G-code serial communication with p5.js."
    },
    {
      role: "Firmware Developer",
      org: "Washington Superbike",
      when: "Oct 2024 – Jun 2025",
      description: "Built a hardware-in-the-loop testing system using Arduino, Raspberry Pi Pico, and Teensy over CAN bus."
    },
    {
      role: "Software Engineering Intern",
      org: "Fair Worlds",
      when: "Aug 2023 – Jul 2024",
      description: "Built geospatial web AR experiences with 8th Wall.js and Unity."
    }
  ],

  // Shown on volunteering.html, most recent first.
  volunteering: [
    {
      role: "Role title",
      org: "Organization name",
      when: "Month Year – Month Year",
      description: "A sentence or two about what you did and why it mattered to you."
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
