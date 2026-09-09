# GUARD Robotics — Sponsor Site

Static site for hosting on GitHub Pages. Two pages: a landing page and one
sponsor board page per season.

## Structure

```
index.html              Landing page (logo, summary, CTA button)
2026-27.html             2026-27 sponsor board
assets/css/style.css     All styling
assets/js/render-board.js        Shared rendering logic (same for every season)
assets/js/sponsors-2026-27.js    2026-27 sponsor DATA — edit this to update sponsors
assets/logos/            Put sponsor logo image files here
assets/img/              Team logo / site images
```

## Adding your real GUARD logo

Replace `assets/img/guard-logo-placeholder.svg` with your real logo file.
Either keep the same filename, or add the new file and update the `src`
in `index.html` and `2026-27.html` (search for `guard-logo`).

## Adding sponsor logos

1. Drop each logo file into `assets/logos/` — PNG or SVG with a
   transparent background works best.
2. Open `assets/js/sponsors-2026-27.js` and, for each sponsor, set
   `logo: "assets/logos/yourfile.png"`.
3. Any sponsor without a `logo` field shows a placeholder box with
   their initials until you add one.

**Two sponsors still need a real logo file:** Tri Tech Refrigeration
(the copy in your Word doc was a broken pasted object, not an image —
re-save/export it as a PNG or JPG and drop it in) and Domino's
Crestwood Plaza (no logo was supplied; their standard chain logo would
work). Both already have their website linked and will pick up a logo
the moment you add one.

## Editing the sponsor list

Each card is one clickable tile: a logo (or placeholder) and a name,
linking straight to that sponsor's primary site — Instagram for
Charming Jewels Polina, since that's their only public presence.
Everything about a sponsor — name, tier, link, logo, and whether the
tile needs a forced white/black background (`cardBg`) — lives in
`assets/js/sponsors-2026-27.js`. Full field documentation is in the
comment at the top of that file. No HTML editing needed for a normal
sponsor update.

Partners (Griffith Student Guild, QRCA, in2robotics, World Science
Festival QLD) render the same way, in their own strip below the
sponsor tiers — edit the `SEASON_PARTNERS` array in the same data
file.

### Forcing a logo's background colour

Some logos are transparent and need a specific tile colour to read
clearly — set `cardBg: "white"` or `cardBg: "black"` on that sponsor.
Currently forced: NLP Electrics, Igla Auto Tech, Engenuity Solutions
(white); Perentie Brewing Co. and Griffith University Student Guild
(black). Leave `cardBg` unset for everyone else — their tile just
matches the page background.

## Duplicating for next season (e.g. 2027-28)

1. Copy `assets/js/sponsors-2026-27.js` → `assets/js/sponsors-2027-28.js`
   and update the sponsor list inside it.
2. Copy `2026-27.html` → `2027-28.html`.
3. In the new HTML file:
   - Update the `<title>` and the `<div class="eyebrow">` season text.
   - Update the `<script src="assets/js/sponsors-2026-27.js">` line to
     point at `sponsors-2027-28.js`.
4. Update the button on `index.html` to link to `2027-28.html`, and
   optionally add a link back to `2026-27.html` somewhere (e.g. in the
   board footer) so last season stays browsable as an archive.

## Publishing on GitHub Pages

1. Push this folder to a GitHub repo (or a `docs/` folder / dedicated
   branch, whichever you use for Pages).
2. In the repo, go to Settings → Pages, set the source to the branch
   and folder containing these files.
3. GitHub gives you a URL like `https://<username>.github.io/<repo>/`
   — that's what you link from Linktree.
