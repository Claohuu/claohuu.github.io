/* ============================================================
   Renders the nav's active-tab highlight, plus any data-driven
   sections (games, experience, volunteering, art) using the
   arrays in data.js. You shouldn't need to edit this file —
   add or remove content in data.js instead.
   ============================================================ */

function highlightActiveNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === current) link.classList.add("active");
  });
}

function placeholderThumb(label) {
  return `<div class="placeholder-note">${label}<br>Add an image path in data.js</div>`;
}

function renderGames() {
  const row = document.getElementById("games-row");
  if (!row || !SITE_DATA.games) return;
  row.innerHTML = SITE_DATA.games.map(game => `
    <div class="game-card">
      <div class="thumb">
        ${game.image ? `<img src="${game.image}" alt="${game.title}">` : placeholderThumb(game.title || "Game image")}
      </div>
      <div class="caption">
        <h3>${game.title}</h3>
        <p>${game.caption}</p>
      </div>
    </div>
  `).join("");
}

function renderEntries(containerId, dataKey) {
  const list = document.getElementById(containerId);
  if (!list || !SITE_DATA[dataKey]) return;
  list.innerHTML = SITE_DATA[dataKey].map(item => `
    <div class="entry">
      <div class="when">${item.when}</div>
      <div>
        <h3>${item.role}</h3>
        <div class="role-line">${item.org}</div>
        <p>${item.description}</p>
      </div>
    </div>
  `).join("");
}

function renderArt() {
  const grid = document.getElementById("art-grid");
  if (!grid || !SITE_DATA.art) return;
  grid.innerHTML = SITE_DATA.art.map(piece => `
    <figure>
      <div class="thumb">
        ${piece.image ? `<img src="${piece.image}" alt="${piece.title}">` : placeholderThumb(piece.title || "Art image")}
      </div>
      <figcaption>${piece.title} — ${piece.caption}</figcaption>
    </figure>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
  renderGames();
  renderEntries("experience-list", "experience");
  renderEntries("volunteering-list", "volunteering");
  renderArt();
});
