# Work Card 03: Core Behaviour

## Goal

Make the game work in memory: add players, remove players, play a player's next message, answer Scam or Legit, show feedback, and calculate all figures from data.

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
2. Store players in React state, starting with the three sample players when the page loads.
3. Add a player by nickname from the input.
4. Remove a player with the row's Remove button.
5. Press Play on a non-finished player to show that player's next unanswered message.
6. Let the user answer only `Scam` or `Legit`.
7. After an answer, save it in memory for that player and show `Right` or `Wrong`, the correct answer, and the reasons from sample data.
8. Add a `Next message` button that moves the same player forward if more messages remain, or returns to the player list/finished state when complete.
9. Calculate all row figures and hero figures from the player answers and answer key in code.
10. Ensure finished players show `Finished`, a full grey bar, and no Play button.
11. Update `build-status.md` after verification.

## What not to do

- Do not add localStorage yet; refresh may lose changes until Work Card 04.
- Do not let a player answer the same message twice.
- Do not shuffle messages.
- Do not show percentages, grades, or score labels.
- Do not add real-message checking.
- Do not add backend, database, or login.

## Done when

- Add player works in memory.
- Remove player works in memory.
- Play opens the player's next message.
- Scam and Legit answers record once and show feedback.
- Next message works.
- All hero and row figures update from state.
- `build-status.md` points to Work Card 04 next.

## Verification steps

- Confirm the starting figures are calculated from data: hero `12`, `3 players, 19 of 30 answered`.
- Add a new player and confirm they show `0 right`, `0 of 10`, and `10 left`.
- Press Play for the new player, answer message 1 as `Scam`, and confirm it says `Right` with the scam reasons.
- Confirm the new player changes to `1 right`, `1 of 10`, and `9 left`.
- Remove the new player and confirm the hero returns to the original sample totals.
- Design check: item list, input, update/delete controls, feedback state, and mobile stacking follow `design.md`.

## Localhost test before continuing

After this card, the learner should test:

- Add a player named with a made-up nickname.
- Answer that player's first message as `Scam` and see `Right` plus reasons.
- Remove that player and see the totals update.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after core in-memory behaviour is verified. Do not start Work Card 04 until the learner replies `continue`.

## Status

Not started
