# Design Direction

## Design Inspiration URL

Fallback 4: Calm productivity app.

## What We Borrow

- A calm, organised layout that helps families focus on one decision at a time.
- Clear progress bars, steady spacing, and readable rows instead of dramatic warning visuals.
- A deep teal accent chosen by the learner to make the page feel trustworthy and personal.
- Simple buttons with large tap areas so older or less confident phone users can play without stress.

## What We Do Not Copy

- No real brand, bank, courier, shop, school, clinic, or government identity.
- No copied logo, badge, mascot, screenshots, photos, testimonials, or claims.
- No fake urgency visuals that make the game feel like a real scam alert.
- No emoji or decorative icons that could distract from the message text.

## Visual Mood

The app should feel calm, patient, family-safe, and practical. The visual tone is more like a simple home learning tool than a competitive quiz. It should reduce panic while still making the scam clues easy to notice.

## Layout Rules

- Use one page only.
- Header sits at the top with the app name, one-line purpose, and `Sample data` label.
- Hero summary appears immediately after the header and makes the total right answers the biggest figure on the page.
- Player tools and rows sit in one main list area.
- Challenge panel appears beside the player list on wide screens, or below it on smaller screens.
- Bottom safety line stays clearly readable after the game content.
- Avoid boxes inside boxes. Use at most two raised surfaces: the hero and the main game area.

## Color / Contrast Rules

- Page background: pale teal tint, such as `#eef8f6`.
- Main accent: deep teal, such as `#08756f`.
- Text: near-black blue-green, such as `#102625`.
- Muted text: slate teal, such as `#5d7471`.
- Surface: warm white, such as `#fffdf8`.
- Error/wrong feedback: calm red, not neon.
- Right feedback: deep green, distinct from the accent.
- All text and controls must meet AA contrast on their backgrounds.

## Typography Feel

- Use the system font stack for familiarity and speed.
- Use generous line-height for message text.
- Make numbers use tabular figures with `font-variant-numeric: tabular-nums`.
- Use weight and size for emphasis, not extra boxes or labels.

## Component Style

- Buttons are rounded rectangles with clear borders or filled accent states.
- `Scam` and `Legit` buttons should be equal weight and size so the app does not hint at an answer.
- Remove buttons should be quieter than Play buttons but still visible.
- Player rows are one list with thin dividers, not separate cards for every player.
- Progress bars are low, calm, and labelled with exact text such as `6 of 10`.
- Finished rows are muted, show `Finished`, have a full grey bar, and no Play button.
- Feedback after an answer should clearly say `Right` or `Wrong`, then show the correct answer and reasons.

## Mobile Rules

- Use one column on phone width.
- Keep sender and message text large enough to read without zooming.
- Put `Scam` and `Legit` buttons side by side only if they remain wide enough; otherwise stack them.
- Player rows may wrap, but nickname, right count, progress text, and status must not be cut off.
- Tap targets should be at least 44px tall.
- The hero figure must stay visible without horizontal scrolling.

## Accessibility Basics

- Use semantic headings in order.
- Buttons must have clear text labels.
- Do not rely on colour alone for Right, Wrong, Finished, or progress.
- Keep focus outlines visible.
- Message text should be selectable and readable.
- Avoid fast motion; only progress bars may animate gently on load.

## Anti-Slop Rules

- No fake logos.
- No fake testimonials.
- No fake stats unless clearly marked sample.
- No “lorem ipsum” in final proof.
- No emoji anywhere on the page.
- No box around every section.
- No pill around plain text.
- No invented action outside the brief.
- No real personal data.
- No real company names, real links, or real phone numbers except the required NSRC 997 safety line.
- The main figure is total right answers, not a percentage, grade, or label.
- Readable on phone width.

## Design Verification Checklist

- Header includes app name, purpose, and `Sample data`.
- Hero shows total right answers as the largest figure.
- Hero line reads like `3 players, 19 of 30 answered`.
- Hero stacked bar shows each player's share of right answers.
- Rows use one list with dividers.
- Each player row shows nickname, right count, progress bar, answered count, and left or Finished text.
- Finished rows are muted, have a full grey bar, and no Play button.
- Challenge panel has balanced Scam and Legit buttons.
- Bottom NSRC 997 line is visible and readable.
- Mobile layout has no horizontal scrolling or cut-off controls.

## Visual recipe

The build follows this section card by card. The style above sets the colours, typeface and mood; this section fixes what the page shows and how its surfaces, rows and icons are built, and wins wherever the two differ. For a page that shows rows and a main figure:

- Header: the app name, the one-line purpose under it, and the words `Sample data` in small muted text. A small inline SVG icon or no icon, never an emoji.
- Hero: a short label, the main figure at 48px or larger in the accent colour, one line under it with the count behind it (for example `4 plans in progress`), and a stacked bar showing each counted row's share of the main figure, one colour per row, and under the bar, each counted row's name and amount beside a small mark in its colour.
- Rows: one list, not a box per row. Each row: a small mark in that row's colour, the name in bold, the main amount on the right, and under them a bar for done of total with the text `6 of 12` and the words `6 left` beside it. Rows are split by a thin line. A finished row is muted, says `Finished` in place of `6 left`, and has a full grey bar.
- Colour: one accent colour from the style, plus a five-colour row palette, every colour with AA contrast on its background.
- Surfaces: the page background is tinted lightly with the accent, never plain white or plain grey. At most two areas stand out from it (for example the hero and the list, with any add form at the top of the list). Never a box inside a box, never a border and a shadow on the same thing, no shadow on rows.
- Width: on a screen wider than 900px, use the width (the hero beside the list, or the hero as a full-width band above it). On a phone, one column.
- Type: the style's typeface for words and numbers, with tabular numbers (CSS `font-variant-numeric: tabular-nums`) so figures line up. Emphasis comes from size and weight, not from boxes or pills. The only boxes in a row are its controls (buttons, tick boxes, inputs).
- Motion: bars grow from 0 when the page loads (a CSS transition). Nothing else moves.
- No new library: plain CSS and inline SVG. No emoji anywhere on the page: they look different on every device.

For an app where the learner adds or changes items, use the same row recipe for the items and the hero for the count that matters most.
