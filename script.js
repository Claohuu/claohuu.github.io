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

function folderLinks(links) {
  if (!links || !links.length) return "";
  const anchors = links
    .map(link => `<a href="${link.href}" target="_blank" rel="noopener">${link.label}</a>`)
    .join("");
  return `<p class="folder-play">${anchors}</p>`;
}

function folderBullets(bullets) {
  if (!bullets || !bullets.length) return "";
  return `<ul class="folder-bullets">${bullets.map(point => `<li>${point}</li>`).join("")}</ul>`;
}

function folderVideo(src) {
  if (!src) return "";
  return `<video class="folder-video" controls preload="metadata" playsinline><source src="${src}" type="video/mp4"></video>`;
}

/* YouTube rather than a local file: the source demos run well past GitHub's
   100MB limit, and Pages cannot serve Git LFS objects */
function folderEmbed(id, label) {
  if (!id) return "";
  return `<div class="folder-embed">
      <iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&vq=hd1080"
              title="${label} gameplay demo" loading="lazy" allowfullscreen
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>`;
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

  const panels = items.map((item, i) => {
    const shots = item.images && item.images.length
      ? folderShots(item.images, heading(item), item.smallShots, item.shotsLayout)
      : "";
    const media = folderEmbed(item.youtube, heading(item)) + folderVideo(item.video) + shots;
    return `
    <article class="folder-panel${i === 0 ? " is-active" : ""}" id="${dataKey}-panel-${i}" role="tabpanel">
      <header class="folder-head">
        <h2>${heading(item)}</h2>
        ${subhead(item) ? `<div class="folder-org">${subhead(item)}</div>` : ""}
        ${item.when ? `<div class="folder-when">${item.when}</div>` : ""}
      </header>
      <div class="folder-grid${media ? "" : " is-textonly"}">
        <div class="folder-text">
          ${folderLinks(item.links)}
          ${paragraphs(item.description)}
          ${folderBullets(item.bullets)}
          ${skillBoxes(item.skills)}
        </div>
        ${media ? `<div class="folder-media">${media}</div>` : ""}
      </div>
    </article>
  `;
  }).join("");

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
  const gallery = document.getElementById("art-grid");
  if (!gallery || !SITE_DATA.art) return;
  gallery.innerHTML = SITE_DATA.art.map(entry => {
    const cap = entry.maxHeight ? ` style="max-height: ${entry.maxHeight}px"` : "";
    return `
    <figure class="art-piece${entry.captionBeside ? " is-beside" : ""}">
      <div class="art-shots">
        ${entry.images.map(src => `<img src="${src}" alt="${entry.caption}"${cap} loading="lazy">`).join("")}
      </div>
      <figcaption>${entry.caption}</figcaption>
    </figure>
  `;
  }).join("");
}

/* click any piece to see it full size */
function initLightbox() {
  if (!document.getElementById("art-grid")) return;

  const box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.innerHTML = `<img alt="">`;
  document.body.appendChild(box);
  const full = box.querySelector("img");

  function close() {
    box.hidden = true;
    document.body.classList.remove("no-scroll");
  }

  document.addEventListener("click", event => {
    const shot = event.target.closest(".art-shots img");
    if (shot) {
      full.src = shot.src;
      full.alt = shot.alt;
      box.hidden = false;
      document.body.classList.add("no-scroll");
      return;
    }
    if (!box.hidden) close();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !box.hidden) close();
  });
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
  renderFolder("experience-folder", "experience", true);
  renderFolder("projects-folder", "projects");
  renderFolder("volunteering-folder", "volunteering", true);
  renderArt();
  initLightbox();
  initScrollCue();
});
