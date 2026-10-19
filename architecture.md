# Architecture

## Build Shape

Browser-local tool.

## Stack Decision

- Vite
- React
- Plain CSS
- Browser `localStorage`
- No backend, auth, database, payment, or live API

## Structure Overview

The app is one browser page for a family scam challenge game. It shows a header, a hero summary, player controls, a player list, the current challenge area, and the safety line at the bottom.

## Component Map

- `App`: owns sample data, player state, selected player, answer flow, persistence, and layout.
- Header area: app name, one-line purpose, and `Sample data` label.
- Hero summary: total right answers across all players, total answered line, and stacked player-share bar.
- Add-player form: nickname input and Add player button.
- Player list: rows for each player with progress, score, status, Play button, and Remove button.
- Challenge panel: sender, message, Scam and Legit buttons, result feedback, correct answer, reasons, and Next message button.
- Footer safety line: `Lost money to a scam? Call the National Scam Response Centre at 997.`

## Data / State Model

One main data type: player.

Player fields:

- `id`: stable browser-local id.
- `nickname`: display name typed by the learner or provided by sample data.
- `answers`: ordered list of answers already given, one per message answered.
- `createdAt`: timestamp or simple number for ordering newly added players.

Derived values in code:

- answered count: `answers.length`.
- messages left: `10 - answers.length`.
- right answers: count of answers matching the answer key.
- finished: answered count equals 10.
- hero right answers: sum of all player right answers.
- hero answered count: sum of all player answered counts.
- hero possible count: player count multiplied by 10.

Built-in sample messages:

- Ten invented messages in fixed order from 1 to 10.
- Each message has sender, text, correct answer, and reasons.
- No real links, real phone numbers, or real company names.

Starting sample players:

- Mak Cik Ros answered all ten: Scam on messages 1 and 6, Legit on the other eight.
- Adik answered messages 1 to 6: Scam on all six.
- Pak Long answered messages 1 to 3: Legit, Legit, Scam.

Worked sample figures:

- Mak Cik Ros: 6 right, 10 of 10, Finished.
- Adik: 4 right, 6 of 10, 4 left.
- Pak Long: 2 right, 3 of 10, 7 left.
- Hero: 12 right answers, `3 players, 19 of 30 answered`, stacked bar split into 6, 4, and 2.

## Storage Logic

- Store the player list at `family-scam-challenge.players`.
- On first load, if no saved player list exists, load the three starting sample players.
- After adding, removing, or answering as a player, save the full player list to `localStorage`.
- On refresh, read saved players from `localStorage` and rebuild all scores from the saved answers plus the fixed answer key.

## User Flow

1. The user opens the page and sees the sample game state.
2. The user can add a player by nickname.
3. The user can remove a player.
4. The user presses Play on a player who is not finished.
5. The app shows that player's next unanswered message.
6. The user presses Scam or Legit.
7. The app shows Right or Wrong, the correct answer, and the reasons.
8. The user presses Next message to return to the next playable state.
9. A finished player shows Finished, a full grey bar, and no Play button.
10. Refreshing the browser keeps players and their answers.

## File Expectations

During implementation, the app should be created in this project folder beside `START_HERE.md`. Planning files, `prompts/`, `templates/`, and `work-cards/` must stay in place.

Expected app files after Work Card 01:

- `package.json`
- `index.html`
- `src/App.jsx`
- `src/App.css` or equivalent plain CSS file
- other standard Vite files created by the scaffolder

## Constraints

- Planning phase creates or updates markdown planning files only.
- Every player gets the same ten messages in order.
- Messages are never shuffled.
- Each player answers each message once.
- No percentage, grade, or label score.
- Sample data must stay clearly illustrative.
- Only the NSRC 997 public safety line may contain a phone-like number.

## Technical Non-Goals

- No login.
- No accounts.
- No payments.
- No database.
- No backend.
- No live API.
- No real-message scam checker.
- No real bank, courier, shop, clinic, or school names.
- No real links.
- No timer.
- No deployment tonight.

## Verification Notes

- Confirm the sample figures match exactly before adding new players.
- Add a new player and confirm the row appears with 0 right, 0 of 10, and 10 left.
- Answer that player's first message, confirm feedback appears, and confirm progress updates.
- Remove a player and confirm hero totals update.
- Refresh the browser and confirm saved players and answers remain.
