# Build Blueprint

## Source Files

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-status.md`

## Project Identity

- Name: Family Scam Challenge
- Course: AI Builder Foundations
- User: my father, with no real personal details stored
- One-sentence concept: a browser-local family game where players practise judging sample messages as Scam or Legit and compare progress.

## Build Shape

Browser-local tool.

## Version-One Promise

The app lets a family add players by nickname, answer the same ten illustrative messages in order, see Right or Wrong with the correct answer and reasons, compare progress, and keep players and answers after browser refresh.

## Scope Lock

### Now

- One browser-local React page.
- Ten fixed sample messages in order.
- Three starting sample players from the problem.
- Add player by nickname.
- Remove player.
- Play next unanswered message for a selected player.
- Answer Scam or Legit once per message.
- Show result, correct answer, reasons, and Next message.
- Derive all right counts, answered counts, left counts, finished state, and hero totals in code.
- Save players and answers with `localStorage`.
- Bottom line: `Lost money to a scam? Call the National Scam Response Centre at 997.`

### Later

- More sample messages.
- Language options.
- Print-friendly family sheet.
- Extra onboarding text after the core app works.

### Never

- No accounts.
- No payments.
- No database.
- No backend.
- No live API.
- No real-message scam checker.
- No real bank, courier, shop, school, clinic, or company names.
- No real links.
- No real phone numbers except the public NSRC 997 safety line.
- No real people's names, IC numbers, account numbers, or real balances.
- No timer.
- No shuffled messages.
- No percentage, grade, or score label.
- No deployment tonight.

## Architecture Summary

- Stack: Vite, React, plain CSS.
- Storage: browser `localStorage` key `family-scam-challenge.players`.
- Main data type: player.
- Player fields: `id`, `nickname`, `answers`, `createdAt`.
- Fixed data: ten invented sample messages with sender, text, correct answer, and reasons.
- Derived figures: right answers, answered count, left count, finished state, hero right total, hero answered total, and hero possible total.

## Data / State / Storage Rules

- On first load, use the three starting sample players if no saved player list exists.
- After any add, remove, or answer action, save the full player list.
- Do not save derived totals; recalculate them from answers and the answer key.
- Every player answers messages 1 to 10 in order.
- A player cannot answer a message twice.
- A finished player has no Play button.
- Removing a player updates all hero totals and bars.
- Refresh persistence is required in Work Card 04.

## Design Direction Summary

The design borrows from a calm productivity app: clear hierarchy, patient spacing, readable rows, steady progress bars, and a deep teal accent. It must not copy any real brand, logo, company identity, claim, testimonial, or visual scam-alert style. The page background is lightly tinted, the hero and game area are the main surfaces, rows use dividers instead of cards, and the main figure is the total right answers.

## Implementation Rules

- Keep implementation small and beginner-readable.
- Use plain React state and effects.
- Use plain CSS, no design library.
- Use inline SVG only if an icon is needed; no emoji.
- Keep sample message data invented and local.
- Keep the `Scam` and `Legit` buttons visually balanced.
- Calculate figures in code, never type worked totals directly into JSX as fixed display values.
- Preserve planning files and folders.

## File and Folder Expectations

The app will be scaffolded into this project folder during Work Card 01 without deleting planning files.

Expected implementation files after scaffolding:

- `package.json`
- `index.html`
- `src/App.jsx`
- `src/App.css`
- `src/main.jsx`
- standard Vite support files

Planning files remain:

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `build-status.md`
- `work-cards/*.md`
- `prompts/`
- `templates/`

## Work Card Plan

1. 01 Project skeleton: create the Vite + React app safely in this folder, set the project name, and show the app shell/header.
2. 02 First visible version: build the calm teal layout, hero, player list, challenge panel, and sample data on screen with minimal or placeholder interaction.
3. 03 Core behaviour: add players, remove players, play messages, answer Scam or Legit, show feedback, and calculate all figures in memory.
4. 04 Save or polish: add localStorage persistence, refresh proof, empty state, mobile polish, bar animation, and final design/accessibility checks.

## Review Mirror

Optional tonight via `prompts/07-review-mirror.md`, not a work card.

## Proof Ladder

The proof ladder for tonight is the app running on localhost, improved your way. No GitHub, Vercel, or deploy tonight.

Proof steps:

1. Localhost app shell loads.
2. Sample data and calm design are visible.
3. Sample figures are calculated correctly.
4. A new player can be added, can answer at least one message, and can be removed.
5. Refresh keeps saved players and answers.
6. Phone-width layout remains readable and usable.

## 60-Second Explanation Template

This is Family Scam Challenge, a browser-local game for practising scam awareness at home. Each player answers the same ten invented messages in order as Scam or Legit. The app shows whether the answer was right or wrong and explains the clues. The rows show each player's progress, and the hero shows total right answers for the family. It uses sample data only and saves progress in the browser with localStorage, with no account, database, backend, or real scam checking.

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, `design.md`, and the current work card before editing.
- Implement only the current work card.
- Do not jump ahead.
- Stop after verification.
- Update `build-status.md` after each work card.
- Do not add backend, auth, database, payment, live API, or online sync.
- Do not add secrets or keys to code.
- Do not invent claims, testimonials, logos, or real numbers.
- Apply the browser-local tool guardrails: one data type, add/update/delete behaviour, localStorage, refresh proof, empty state, and mobile check.
- No action the brief does not have.
- For the money/scam brief: show figures and reasons only; never advise, rate, recommend, or check real pasted messages.
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping.
