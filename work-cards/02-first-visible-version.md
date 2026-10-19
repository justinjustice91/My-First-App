# Work Card 02: First Visible Version

## Goal

Put the full calm teal interface and sample game content on screen without completing the interactive behaviour yet.

## Inputs

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `build-status.md`

## Files likely touched

- `src/App.jsx`
- `src/App.css`
- `build-status.md`

## Instructions for the coding agent

1. Read `build-status.md`, `build-blueprint.md`, `design.md`, and this work card before editing.
2. Add the ten invented sample messages from the problem as local sample data.
3. Add the three starting sample players from the problem as local sample data.
4. Build the visible page structure from `design.md`: header, hero, player list, challenge panel, and bottom NSRC 997 line.
5. Show the worked sample figures from the sample data in the first visible version: hero 12, `3 players, 19 of 30 answered`, Mak Cik Ros 6 right and Finished, Adik 4 right and 4 left, Pak Long 2 right and 7 left.
6. Add the add-player form visually, but it may be non-working until Work Card 03.
7. Add Play and Remove buttons visually, but they may be non-working until Work Card 03.
8. Add the challenge panel visually with sender, message, Scam and Legit buttons, result area, reasons area, and Next message button placeholder.
9. Style the page using the calm productivity direction, deep teal accent, pale teal background, one list with dividers, and no emoji.
10. Update `build-status.md` after verification.

## What not to do

- Do not complete add/remove/play behaviour yet.
- Do not add localStorage yet.
- Do not shuffle messages.
- Do not add percentages, grades, labels, timers, real links, or real company names.
- Do not add any package or design library.

## Done when

- The full page layout is visible.
- The header, hero, player list, challenge panel, and bottom NSRC 997 line are present.
- The sample figures match the problem statement.
- The page visually follows `design.md`.
- `build-status.md` points to Work Card 03 next.

## Verification steps

- Confirm hero shows `12` and `3 players, 19 of 30 answered`.
- Confirm player rows show `6 right`, `4 right`, and `2 right` for the three sample players.
- Confirm Mak Cik Ros shows `Finished`, Adik shows `4 left`, and Pak Long shows `7 left`.
- Confirm the bottom line says `Lost money to a scam? Call the National Scam Response Centre at 997.`
- Design check: hero, rows, progress bars, surfaces, type, and mobile stacking follow `design.md` and the `Visual recipe`.

## Localhost test before continuing

After this card, the learner should test:

- The page shows the hero total `12`.
- The three sample players and their progress are visible.
- The page looks calm and readable on phone width.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the visible version is verified. Do not start Work Card 03 until the learner replies `continue`.

## Status

Not started
