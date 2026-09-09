/* =====================================================================
   SPONSOR DATA — 2026-27 season
   =====================================================================
   Edit this array to add/remove/update sponsors. No other file needs
   to change for a normal update.

   Fields per sponsor:
     name     (required) — sponsor/company name
     tier     (required) — "diamond" | "gold" | "silver" | "supporter"
     link     (optional) — the ONE primary URL the whole card opens.
                            Website for almost everyone; Instagram for
                            sponsors who only have a social page.
     logo     (optional) — path to logo file in assets/logos/.
                            Leave blank/omit to show a placeholder box
                            with initials until a logo is supplied.
     cardBg   (optional) — "white" | "black" — forces the tile behind
                            the logo to that colour, for logos that
                            need a specific background to read clearly.
                            Leave unset for the default (transparent,
                            sits directly on the dark page background).

   TO DUPLICATE FOR A NEW SEASON (e.g. 2027-28):
     1. Copy this file to assets/js/sponsors-2027-28.js
     2. Copy 2026-27.html to 2027-28.html
     3. In the new HTML file, update the <script src> to point at the
        new data file, and update the season text in the header.
     4. Edit the sponsor list below in the new data file.
   ===================================================================== */

const SEASON_SPONSORS = [
  // --- Diamond ---
  {
    name: "NLP Electrics",
    tier: "diamond",
    link: "https://nlpelectrics.com.au",
    logo: "assets/logos/nlp-electrics.jpg",
    cardBg: "white",
  },

  // --- Gold ---
  {
    name: "Bendigo Bank Paradise Point",
    tier: "gold",
    link: "https://www.bendigobank.com.au/branch/qld/community-bank-paradise-point/",
    logo: "assets/logos/bendigo-bank-paradise-point.png",
    cardBg: "white",
  },
  {
    name: "Igla Auto Tech QLD",
    tier: "gold",
    link: "https://iglaautotechqld.com.au",
    logo: "assets/logos/igla-auto-tech.png",
    cardBg: "white",
  },
  {
    name: "Engenuity Solutions",
    tier: "gold",
    link: "https://engenuitysolutions.com",
    logo: "assets/logos/engenuity-solutions.png",
    cardBg: "white",
  },

  // --- Silver ---
  {
    name: "Tri Tech Refrigeration",
    tier: "silver",
    link: "https://www.tritech.com.au",
    logo: "assets/logos/tri-tech.png",
    cardBg: "white",
  },
  {
    name: "Domino's Crestwood Plaza",
    tier: "silver",
    link: "https://www.dominos.com.au/store/qld-crestwood-plaza-98436",
    // No logo file supplied — the standard Domino's chain logo would
    // work fine here too, once added.
  },

  // --- Supporter ---
  {
    name: "Club Musgrave",
    tier: "supporter",
    link: "https://clubmusgrave.com",
    logo: "assets/logos/club-musgrave.jpg",
  },
  {
    name: "Perentie Brewing Co.",
    tier: "supporter",
    link: "https://perentiebrewing.co",
    logo: "assets/logos/perentie-brewing.png",
    cardBg: "black",
  },
  {
    name: "Super Butcher Southport",
    tier: "supporter",
    link: "https://superbutcher.com.au/pages/southport",
    logo: "assets/logos/super-butcher-southport.jpg",
  },
  {
    name: "Cold Rock Southport",
    tier: "supporter",
    link: "https://coldrock.com.au/location/southport/",
    logo: "assets/logos/cold-rock-southport.jpg",
  },
  {
    name: "Zarraffa's Southport",
    tier: "supporter",
    link: "https://zarraffas.com/ferry-road-drive-thru",
    logo: "assets/logos/zarraffas-southport.png",
  },
  {
    name: "Red Bull Australia",
    tier: "supporter",
    link: "https://www.redbull.com/au-en",
    // No logo file supplied — Red Bull's brand guidelines have official
    // assets if you want to add their bull-and-sun mark here.
  },
  {
    name: "Site Position Survey Map",
    tier: "supporter",
    link: "https://sitepsm.com.au",
    logo: "assets/logos/site-psm.png",
    cardBg: "white",
  },
  {
    name: "Charming Jewels Polina",
    tier: "supporter",
    link: "https://www.instagram.com/charmingjewelspolina/",
    logo: "assets/logos/charming-jewels-polina.jpg",
  },
];

/* =====================================================================
   PARTNERS — not a sponsorship tier, shown as its own strip on the
   board page. Same "link" and "logo" fields as sponsors above.
   ===================================================================== */

const SEASON_PARTNERS = [
  {
    name: "Griffith University Student Guild",
    link: "https://gugcstudentguild.com.au",
    logo: "assets/logos/griffith-student-guild.png",
    cardBg: "black",
  },
  {
    name: "Queensland Robotics & Coding Academy",
    link: "https://qrca.com.au",
    logo: "assets/logos/qrca.png",
  },
  {
    name: "in2robotics",
    link: "https://in2robotics.com.au",
    logo: "assets/logos/in2robotics.png",
  },
  {
    name: "World Science Festival QLD",
    link: "https://worldsciencefestival.com.au",
    logo: "assets/logos/world-science-festival-qld.png",
    cardBg: "white",
  },
];

// Explicit window assignment — top-level `const`/`let` do NOT become
// window properties in a classic <script>, only `var` does. render-board.js
// reads window.SEASON_SPONSORS / window.SEASON_PARTNERS, so without this
// the board silently renders nothing.
window.SEASON_SPONSORS = SEASON_SPONSORS;
window.SEASON_PARTNERS = SEASON_PARTNERS;
