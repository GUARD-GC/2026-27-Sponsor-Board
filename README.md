# GUARD Robotics — Sponsor Site

Static site for GitHub Pages. A landing page, one sponsor board per season,
a "past sponsors" hub, and a static legacy page for everything before 2026.

## Site map

```
index.html
 ├─ 2026-27.html          current season board (Diamond → Supporter + Partners)
 ├─ past-sponsors.html    hub page — links to every past/other season
 │   ├─ legacy-sponsors.html   static archive, pre-2026 sponsors + partners
 │   ├─ 2026-27.html
 │   └─ 2027-28.html
 └─ 2027-28.html          "prospectus coming soon" notice for next season
```

Every page links back to `index.html` via the nav bar, and every board/notice
page has a "Visit Our Linktree" button in the footer.

## File structure

```
index.html                       Landing page — logo, summary, 3 CTA buttons
2026-27.html                     Current season board (data-driven)
2027-28.html                     Next season placeholder (static text, no data file yet)
past-sponsors.html               Hub linking to legacy-sponsors.html, 2026-27.html, 2027-28.html
legacy-sponsors.html             Static archive of pre-2026 sponsors/partners — hand-written, not data-driven
assets/css/style.css             All styling (palette, layout, card styles)
assets/js/render-board.js        Shared rendering logic — same file for every season, do not duplicate it
assets/js/sponsors-2026-27.js    2026-27 sponsor + partner DATA — this is what you edit day to day
assets/logos/                    All sponsor/partner logo files
assets/img/guard-logo.svg        Team logo, used in the nav and hero on every page
```

`legacy-sponsors.html` is the one page that's genuinely fixed — it was built
by hand for a one-time archive and doesn't read from a data file, so editing
it means editing its HTML directly (each sponsor is its own `<a class="sponsor-card">`
block).

## Visual identity

- Background is solid black across every page.
- Tier accent colours (dots, headings) in `assets/css/style.css` `:root`:
  Diamond = blue, Gold = gold, Silver = grey, Supporter = gunmetal.
- The one shared accent colour (buttons, links, hover states) is red (`--accent`).
- Every sponsor/partner card currently uses a white tile behind the logo
  (`cardBg: "white"` in the data file) — see "Logo backgrounds" below for why
  that field still matters even though everyone's on the same setting today.
- Fonts: Oswald for headings, Inter for body text — both loaded from Google
  Fonts in each page's `<head>`.

## Adding a single sponsor this season

1. Save the logo file into `assets/logos/` (PNG or JPG; a transparent PNG
   isn't required since tiles are white anyway — see below).
2. Open `assets/js/sponsors-2026-27.js` and add an entry to the
   `SEASON_SPONSORS` array (or `SEASON_PARTNERS`, if it's a partner rather
   than a sponsor):

   ```js
   {
     name: "New Sponsor Pty Ltd",
     tier: "gold",                              // diamond | gold | silver | supporter
     link: "https://newsponsor.com.au",
     logo: "assets/logos/new-sponsor.png",
     cardBg: "white",
   },
   ```
3. Save. No HTML editing needed — `2026-27.html` reads this file automatically
   via `render-board.js`.

If you don't have a logo yet, leave out the `logo` field entirely — the card
will show a placeholder box with the sponsor's initials and "logo pending"
until you add one.

## Editing or removing a sponsor

- **Change tier, name, or link:** edit that sponsor's object in place.
- **Swap a logo:** replace the file in `assets/logos/` (same filename is
  easiest). Browsers cache images aggressively, so do a hard refresh
  (Ctrl/Cmd+Shift+R) if the old one still shows.
- **Remove a sponsor:** delete their whole `{ ... }` entry from the array.
  Don't leave an empty or commented-out entry behind — it's just noise.

## Logo backgrounds (`cardBg`)

Every card right now is set to `cardBg: "white"`, which is why the board
looks uniform. The option to force `cardBg: "black"` is still built into
`render-board.js` and the CSS (`.sponsor-card.bg-black`) — you'll want it
again if a future logo is white or very light-coloured and would disappear
on a white tile. Leaving `cardBg` out entirely lets the tile sit flush on
the black page background instead of getting a white or black card at all.

## Setting up next season (e.g. once 2027-28 sponsors start coming in)

`2027-28.html` currently just shows a "prospectus coming soon" notice — you'll
replace that with a real board:

1. Copy `assets/js/sponsors-2026-27.js` → `assets/js/sponsors-2027-28.js`,
   clear out the sponsor list, and start adding 2027-28 sponsors.
2. **Important:** keep the last two lines of that file —
   ```js
   window.SEASON_SPONSORS = SEASON_SPONSORS;
   window.SEASON_PARTNERS = SEASON_PARTNERS;
   ```
   `render-board.js` reads `window.SEASON_SPONSORS`, and a plain `const` at
   the top of a script does **not** automatically become a `window`
   property — without these two lines the board will silently show nothing,
   which is exactly what happened the first time this site was built.
3. Delete the placeholder content inside `2027-28.html`'s `<div class="wrap">`
   and replace it with the same structure as `2026-27.html`: the
   `<div id="sponsor-board"></div>`, the Partners `<section>`, and the two
   `<script>` tags at the bottom — then change that second script tag to
   point at `sponsors-2027-28.js` instead of `sponsors-2026-27.js`, and
   update the `<title>` and the `<div class="eyebrow">` text to "2027 – 28
   Season".
4. On `index.html`, change the "Join us for the 2027-28 Season!" button's
   destination if needed (it already points at `2027-28.html`, so once that
   page has real content this is done automatically) — you may want to
   reword that button now that it's a live board rather than a teaser.
5. `2026-27.html` doesn't need to change at all. It automatically becomes
   "last season" the moment `index.html`'s main CTA and messaging shift focus
   to 2027-28 — nothing to delete.

## Retiring a season into the archive

`past-sponsors.html` is the hub for everything that isn't the current season.
It already links to `2026-27.html` and `2027-28.html` by name, so once
2027-28 becomes current:

- Its existing links keep working as-is (2026-27 becomes "last season",
  2027-28 becomes current) — no changes are strictly required.
- If you want the hub's button labels to stay accurate over time (e.g.
  "View 2026–27 Sponsor Board" reading oddly two years from now), just edit
  the button text in `past-sponsors.html` — it's static HTML, same pattern
  as `legacy-sponsors.html`.
- When a third season exists, add one more `<a class="btn btn-primary">`
  block to `past-sponsors.html` following the same pattern as the existing
  two. There's no limit built into the page — it's just hand-added buttons.

`legacy-sponsors.html` (pre-2026) never needs to change — it's a permanent,
one-time archive.

## Things that live in more than one file (no shared config)

This site has no central settings file, so a few details are duplicated
across pages and need updating everywhere if they change:

- **Linktree URL** (`https://linktr.ee/guard.gc`) — hardcoded in the footer
  button on `2026-27.html`, `2027-28.html`, `legacy-sponsors.html`,
  `past-sponsors.html`, and as a text link on `index.html`.
- **Team logo** (`assets/img/guard-logo.svg`) — referenced by filename in
  the nav/hero of every page. Replacing the file in place updates it
  everywhere; renaming it means updating every `<img src="...">` reference.
- **Contact email** (`guard.gc@gmail.com`) — currently only on `2027-28.html`.
- **Club summary paragraph** — only on `index.html`.

## Publishing / updating on GitHub Pages

1. Push this folder to your GitHub repo (or the `docs/` folder / branch
   you've set Pages to use).
2. Repo → Settings → Pages → confirm the source branch/folder.
3. Your Linktree should already point at the resulting
   `https://<username>.github.io/<repo>/` URL — future pushes to that
   branch update the live site automatically, no redeploy step needed.
