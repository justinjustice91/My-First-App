# Work Card 01: Project Skeleton

## Goal

Create the Vite + React app safely inside this folder without deleting the planning files, then show the Family Scam Challenge app shell.

## Inputs

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-blueprint.md`
- `build-status.md`

## Files likely touched

- `package.json`
- `index.html`
- `src/App.jsx`
- `src/App.css`
- `src/main.jsx`
- standard Vite scaffold files
- `build-status.md`

## Instructions for the coding agent

1. Read `build-status.md`, `build-blueprint.md`, `design.md`, and this work card before editing.
2. Create the Vite + React app in a temporary subfolder: `npx -y create-vite@9.2.1 app-temp --template react --no-interactive`.
3. Ignore the scaffolder's `cd app-temp` hint.
4. Move everything inside `app-temp`, hidden files included, up into this project folder, next to `START_HERE.md`.
5. Delete the empty `app-temp` folder.
6. Set the `<title>` in `index.html` to `Family Scam Challenge`.
7. Set the `"name"` in `package.json` to `family-scam-challenge`.
8. Replace the default app with a simple shell: app name, one-line purpose, and `Sample data` text.
9. Run `npm install`, then `npm run dev`.
10. Update `build-status.md` after verification.

## What not to do

- Do not run a scaffolder with `--overwrite`.
- Do not choose any option that removes existing files.
- Do not delete `START_HERE.md`, `prompts/`, `templates/`, planning files, or `work-cards/`.
- Do not build the full game yet.
- Do not add localStorage yet.
- Do not deploy or initialize Git.

## Done when

- The Vite + React app exists in this folder.
- The browser tab title is `Family Scam Challenge`.
- The app shell shows the name, purpose, and `Sample data`.
- `npm run dev` starts successfully.
- `build-status.md` points to Work Card 02 next.

## Verification steps

- Run `npm run dev` and confirm the dev server starts.
- Open the localhost URL and confirm the app shell/header loads.
- Confirm planning files and folders are still present.
- Design check: header follows `design.md` mood, calm spacing, deep teal direction, and no emoji rule.

## Localhost test before continuing

After this card, the learner should test:

- The page opens on localhost.
- The heading says `Family Scam Challenge`.
- The page includes a short purpose line and `Sample data`.

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

Stop after the shell is visible and verified. Do not start Work Card 02 until the learner replies `continue`.

## Status

Not started
