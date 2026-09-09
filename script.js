/* ============================================================
   Renders the nav's active-tab highlight, plus any data-driven
   sections (games, folders, art) using the arrays in data.js.
   You shouldn't need to edit this file — add or remove content
   in data.js instead.
   ============================================================ */

const TRIANGLE = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="8,4 20,12 8,20"></polygon></svg>`;

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
  row.innerHTML = SITE_DATA.games.map(game => {
    const inner = `
      <div class="thumb">
        ${game.image ? `<img src="${game.image}" alt="${game.title}"${game.crop ? ` style="object-position: ${game.crop}"` : ""}>` : placeholderThumb(game.title || "Game image")}
      </div>
      <div class="caption">
        <h3>${game.title}</h3>
        <p class="dev">${game.developer}</p>
        ${game.caption ? `<p>${game.caption}</p>` : ""}
      </div>
    `;
    return game.link
      ? `<a class="game-card" href="${game.link}" target="_blank" rel="noopener">${inner}</a>`
      : `<div class="game-card">${inner}</div>`;
  }).join("");
}

function skillBoxes(skills) {
  if (!skills) return "";
  const boxes = Object.entries(skills).map(([group, items]) => `
    <div class="skill-box">
      <h4>${group}</h4>
      <div class="skill-chips">${items.map(item => `<span class="tag">${item}</span>`).join("")}</div>
    </div>
  `).join("");
  return `<div class="skill-boxes">${boxes}</div>`;
}

function folderShots(images, label, small, layout) {
  const frames = images.map(shot => `
    <figure class="folder-shot${shot.wide ? " is-wide" : ""}">
      <img src="${shot.src}" alt="${shot.caption || label}">
      ${shot.caption ? `<figcaption>${shot.caption}</figcaption>` : ""}
    </figure>
  `).join("");
  const classes = ["folder-shots", small ? "is-small" : "", layout === "grid" ? "is-grid" : ""];
  return `<div class="${classes.filter(Boolean).join(" ")}">${frames}</div>`;
}

function paragraphs(description) {
  const parts = Array.isArray(description) ? description : [description];
  return parts.map(part => `<p>${part}</p>`).join("");
}

/* orgLed pages (experience, volunteering) lead with the organisation and put the
   role underneath; projects lead with the project name instead */
function renderFolder(rootId, dataKey, orgLed = false) {
  const root = document.getElementById(rootId);
  const items = SITE_DATA[dataKey];
  if (!root || !items || !items.length) return;

  const heading = item => (orgLed ? item.org : item.role);
  const subhead = item => (orgLed ? item.role : item.org);

  const tabs = items.map((item, i) => `
    <button class="folder-tab" type="button" role="tab" data-index="${i}"
            aria-selected="${i === 0}" aria-controls="${dataKey}-panel-${i}">${heading(item)}</button>
  `).join("");

  const panels = items.map((item, i) => `
    <article class="folder-panel${i === 0 ? " is-active" : ""}" id="${dataKey}-panel-${i}" role="tabpanel">
      <header class="folder-head">
        <h2>${heading(item)}</h2>
        <div class="folder-org">${subhead(item)}</div>
        <div class="folder-when">${item.when}</div>
      </header>
      <div class="folder-grid${item.images && item.images.length ? "" : " is-textonly"}">
        <div class="folder-text">
          ${paragraphs(item.description)}
          ${skillBoxes(item.skills)}
        </div>
        ${item.images && item.images.length ? folderShots(item.images, heading(item), item.smallShots, item.shotsLayout) : ""}
      </div>
    </article>
  `).join("");

  const arrows = items.length > 1
    ? `<button class="folder-arrow prev" type="button" aria-label="Previous">${TRIANGLE}</button>
       <button class="folder-arrow next" type="button" aria-label="Next">${TRIANGLE}</button>`
    : "";

  root.innerHTML = `
    <div class="folder-shell">
      ${arrows}
      <div class="folder">
        <div class="folder-tabs" role="tablist">${tabs}</div>
        <div class="folder-body">${panels}</div>
      </div>
    </div>
  `;

  const tabEls = Array.from(root.querySelectorAll(".folder-tab"));
  const panelEls = Array.from(root.querySelectorAll(".folder-panel"));
  let current = 0;

  function show(index) {
    current = (index + items.length) % items.length;
    tabEls.forEach((tab, i) => tab.setAttribute("aria-selected", String(i === current)));
    panelEls.forEach((panel, i) => panel.classList.toggle("is-active", i === current));
    tabEls[current].scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  tabEls.forEach(tab => tab.addEventListener("click", () => show(Number(tab.dataset.index))));
  const prev = root.querySelector(".folder-arrow.prev");
  const next = root.querySelector(".folder-arrow.next");
  if (prev) prev.addEventListener("click", () => show(current - 1));
  if (next) next.addEventListener("click", () => show(current + 1));
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

function initScrollCue() {
  const cue = document.querySelector(".scroll-cue");
  if (!cue) return;

  function update() {
    const room = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
    cue.classList.toggle("is-hidden", room < 80);
  }

  cue.addEventListener("click", () => {
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
  });
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  highlightActiveNav();
  renderGames();
  renderFolder("experience-folder", "experience", true);
  renderFolder("projects-folder", "projects");
  renderFolder("volunteering-folder", "volunteering", true);
  renderArt();
  initScrollCue();
});
