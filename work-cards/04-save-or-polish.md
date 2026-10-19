# Work Card 04: Save or Polish

## Goal

Add browser saving with localStorage, refresh proof, empty state, phone-width polish, bar animation, accessibility checks, and final content checks.

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
2. Save the player list to `localStorage` under `family-scam-challenge.players` after add, remove, or answer changes.
3. On page load, read saved players from `localStorage`; if none exist, use the three sample players.
4. Add a visible refresh-proof note such as saved progress staying in this browser, written calmly and briefly.
5. Add an empty state for when all players are removed, with the add-player form still available.
6. Polish mobile layout so nothing is cut off at phone width.
7. Add gentle progress bar growth on page load with CSS transition.
8. Check focus states, button labels, heading order, contrast, and no-colour-only meaning.
9. Check final content against the brief: sample data only, fixed order, no real links, no real companies, no real phone numbers except NSRC 997.
10. Update `build-status.md` after verification.

## What not to do

- Do not add accounts, backend, database, live API, or sync.
- Do not add packages.
- Do not deploy.
- Do not add real-message checking.
- Do not add timer, shuffle, percentages, grades, or labels.
- Do not replace the calm design with flashy warning visuals.

## Done when

- Player list saves to localStorage.
- Refresh keeps added players and answers.
- Empty state works when all players are removed.
- Phone-width layout is usable.
- Progress bars animate gently.
- Final design and content checks pass.
- `build-status.md` records the four cards as complete.

## Verification steps

- Add a new player, answer one message, refresh the browser, and confirm the player and answer still appear.
- Remove all players and confirm the empty state appears with the add-player form still usable.
- Add a player again from the empty state and confirm the row appears.
- Check phone width and confirm message text, buttons, rows, hero, and bottom line are not cut off.
- Confirm no real company names, real links, or real phone numbers are present except `997` in the NSRC line.
- Design check: final layout, item list, input, update/delete controls, empty state, mobile stacking, accessibility basics, and bar animation follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- Add a made-up player, answer one message, refresh, and confirm progress stays.
- Remove all players, then add one player back from the empty state.
- Resize to phone width and confirm nothing important is cut off.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## After this card: tick chapter 03

End your first checkpoint message for this card (the one that gives its localhost tests) with these two lines, exactly, as plain chat text, never inside a code block (or the link cannot be clicked):

**Your cards are built. Next: tick chapter 03 on your class page.**
[Open chapter 03, Build and test](https://learn.theaibuilder.school/courses/ai-builder-foundations/modules/3) and press **I built my cards**. Then come back to this chat.

When the learner replies `continue`, start your reply with the same two lines.

## Stop condition

Stop after save, polish, and verification are complete. Do not enter Improve or Ship unless the learner asks after the build cards.

## Status

Not started
