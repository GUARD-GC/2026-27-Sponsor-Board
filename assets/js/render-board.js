/* =====================================================================
   RENDER BOARD — shared logic, same file for every season page.
   Reads SEASON_SPONSORS + SEASON_PARTNERS (defined in that season's
   data file, loaded before this script) and builds the board.
   Each card is a single clickable tile: logo (or a placeholder with
   initials) + name, wrapped in one link to the sponsor's primary URL.
   ===================================================================== */

(function () {
  const TIERS = [
    { key: "diamond", label: "Diamond" },
    { key: "gold", label: "Gold" },
    { key: "silver", label: "Silver" },
    { key: "supporter", label: "Supporter" },
  ];

  function initials(name) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join("");
  }

  function buildCard(entry) {
    const hasLink = Boolean(entry.link);
    const card = document.createElement(hasLink ? "a" : "div");
    card.className = "sponsor-card";
    if (entry.cardBg === "white") card.classList.add("bg-white");
    if (entry.cardBg === "black") card.classList.add("bg-black");
    if (hasLink) {
      card.href = entry.link;
      card.target = "_blank";
      card.rel = "noopener";
      card.setAttribute("aria-label", entry.name);
    }

    const logoSlot = document.createElement("div");
    logoSlot.className = "logo-slot";

    if (entry.logo) {
      const img = document.createElement("img");
      img.src = entry.logo;
      img.alt = entry.name + " logo";
      logoSlot.appendChild(img);
    } else {
      const ph = document.createElement("div");
      ph.className = "logo-placeholder";
      ph.textContent = initials(entry.name) + " · logo pending";
      logoSlot.appendChild(ph);
    }
    card.appendChild(logoSlot);

    const name = document.createElement("div");
    name.className = "sponsor-name";
    name.textContent = entry.name;
    card.appendChild(name);

    return card;
  }

  function render() {
    const root = document.getElementById("sponsor-board");
    if (root) {
      const sponsors = window.SEASON_SPONSORS || [];
      TIERS.forEach((tier) => {
        const tierSponsors = sponsors.filter((s) => s.tier === tier.key);
        if (tierSponsors.length === 0) return;

        const section = document.createElement("section");
        section.className = "tier-section tier-" + tier.key;

        const heading = document.createElement("div");
        heading.className = "tier-heading";
        heading.innerHTML =
          '<span class="tier-dot"></span><h2>' +
          tier.label +
          '</h2><span class="tier-count">' +
          tierSponsors.length +
          (tierSponsors.length === 1 ? " sponsor" : " sponsors") +
          "</span>";
        section.appendChild(heading);

        const grid = document.createElement("div");
        grid.className = "sponsor-grid";
        tierSponsors.forEach((s) => grid.appendChild(buildCard(s)));
        section.appendChild(grid);

        root.appendChild(section);
      });

      if (sponsors.length === 0) {
        root.innerHTML =
          '<p style="text-align:center;padding:40px 0;">No sponsors listed yet — add entries to the season\'s data file.</p>';
      }
    }

    const partnersRoot = document.getElementById("partners-strip");
    if (partnersRoot) {
      const partners = window.SEASON_PARTNERS || [];
      const grid = document.createElement("div");
      grid.className = "sponsor-grid";
      partners.forEach((p) => grid.appendChild(buildCard(p)));
      partnersRoot.appendChild(grid);
    }
  }

  document.addEventListener("DOMContentLoaded", render);
})();
