# Project Brief

## Project Identity

- Project name: Family Scam Challenge
- Course context: AI Builder Foundations

## One-Sentence Concept

A browser-local family game where players practise judging sample messages as Scam or Legit and compare their progress.

## Target User

My father, with no real name or phone number stored in the app or planning files.

## User Goal

The user should be able to add a player by nickname, press Play on that player's row, answer each message as Scam or Legit, see whether the answer was right or wrong, read the correct answer and reasons, then move to the next message.

## Build Shape

Browser-local tool.

## Shape Confirmation

Confirmed by learner. This is a browser-local tool because players are added, removed, answered as, and saved after refresh in the same browser.

## Version-One Success

Version one is done enough when:

- the ten illustrative sample messages are available in order from 1 to 10;
- every player answers each message once;
- the three starting players match the problem statement;
- the worked figures match the sample: Mak Cik Ros 6 right and Finished, Adik 4 right with 4 left, Pak Long 2 right with 7 left, and hero total 12 with `3 players, 19 of 30 answered`;
- players can be added and removed by nickname;
- player answers and progress stay after browser refresh.

## Now / Later / Never

### Now

- One browser page for the game.
- Add a player by nickname.
- Remove a player.
- Press Play on a player row to answer that player's next message.
- Show sender, message, Scam and Legit buttons.
- After an answer, show Right or Wrong, the right answer, reasons from sample data, and a Next message button.
- Show each player row with nickname, right-answer count, progress bar, answered count, left count or Finished, and Play only when not finished.
- Show a hero total of all players' right answers, the answered count line, and a stacked bar split by player share.
- Show the National Scam Response Centre 997 line at the bottom.
- Use only illustrative sample data.
- Save players and answers in browser localStorage.

### Later

- More sample messages.
- More language options.
- A print-friendly family score sheet.
- Better onboarding text after the core version works.

### Never

- No user accounts.
- No payments.
- No database.
- No backend.
- No live data.
- No real-message scam checking.
- No real bank, courier, shop or clinic names.
- No real links.
- No real phone numbers except the required public NSRC 997 safety line.
- No real people's names, IC numbers, account numbers or real balances.
- No timer.
- No shuffled messages.
- No score percentage, grade or label.

## Assumptions

- The app runs locally in the browser during class.
- The sample messages are illustrative and invented.
- Each player answers the same ten messages in the same order.
- The app only stores browser-local sample game data.

## Proof Target

On localhost, a learner can add a player, answer messages, refresh the browser, and still see that player's saved progress and answers.

## Trainer / Learner Notes

- Do not store real personal details in the project.
- Keep the sample player names from the problem because they are invented sample data.
- Planning only until the learner later says `Start Work Card 01`.
