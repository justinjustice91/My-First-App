import { useEffect, useState } from 'react'
import './App.css'

const messages = [
  {
    id: 1,
    sender: 'Kurier Contoh',
    text: 'Your parcel is held at customs. Pay RM3.50 within 24 hours or it is sent back. Pay here: (short link).',
    answer: 'Scam',
    reasons: 'A fee to release a parcel, a deadline, and a short link instead of the courier\'s own app.',
  },
  {
    id: 2,
    sender: 'Bank Contoh',
    text: 'RM250.00 was spent on your card ending 4321 at Kedai Contoh. If this was not you, call the number on the back of your card.',
    answer: 'Legit',
    reasons: 'No link, and it tells you to use a number you already have.',
  },
  {
    id: 3,
    sender: 'Kedai Contoh',
    text: 'Tahniah! You won a RM500 voucher. Claim before midnight: (short link).',
    answer: 'Scam',
    reasons: 'A prize you never entered, a deadline, and a short link.',
  },
  {
    id: 4,
    sender: 'SK Taman Contoh',
    text: 'Reminder: school is closed on Friday for the term break. Classes start again on Monday.',
    answer: 'Legit',
    reasons: 'Information only, no link, no money.',
  },
  {
    id: 5,
    sender: 'Syarikat Elektrik Contoh',
    text: 'Your bill is overdue. Your power will be cut in 2 hours. Call this number now to pay.',
    answer: 'Scam',
    reasons: 'A threat, a two-hour deadline, and a number given in the message.',
  },
  {
    id: 6,
    sender: 'Unknown number',
    text: 'Join our investment group. Guaranteed 20% return every month. Many members already earned RM10,000.',
    answer: 'Scam',
    reasons: 'A guaranteed high return, with other people\'s winnings as bait.',
  },
  {
    id: 7,
    sender: 'Unknown number',
    text: 'Hi Mak, my phone fell in the water, this is my new number. Can you transfer RM800 to my friend\'s account now? I explain later.',
    answer: 'Scam',
    reasons: 'A new number, money to someone else\'s account, a hurry, and no call.',
  },
  {
    id: 8,
    sender: 'Klinik Contoh',
    text: 'Your appointment is on Tuesday at 10.00am. Reply 1 to confirm, or call the clinic to change it.',
    answer: 'Legit',
    reasons: 'Expected, no link, no money.',
  },
  {
    id: 9,
    sender: 'Unknown number',
    text: 'Part-time job: like 10 videos a day, earn RM300 daily. Pay RM50 to register first.',
    answer: 'Scam',
    reasons: 'Easy money, and a fee before you earn anything.',
  },
  {
    id: 10,
    sender: 'Kedai Contoh',
    text: 'Your order 48213 has been shipped and will arrive in 2 to 3 days.',
    answer: 'Legit',
    reasons: 'An order you made, no link, nothing to pay.',
  },
]

const rowColors = ['#08756f', '#b46614', '#4b6fb5', '#8760a8', '#5b7f38']
const storageKey = 'family-scam-challenge.players'

const initialPlayers = [
  {
    id: 'mak-cik-ros',
    name: 'Mak Cik Ros',
    answers: ['Scam', 'Legit', 'Legit', 'Legit', 'Legit', 'Scam', 'Legit', 'Legit', 'Legit', 'Legit'],
    color: '#08756f',
  },
  {
    id: 'adik',
    name: 'Adik',
    answers: ['Scam', 'Scam', 'Scam', 'Scam', 'Scam', 'Scam'],
    color: '#b46614',
  },
  {
    id: 'pak-long',
    name: 'Pak Long',
    answers: ['Legit', 'Legit', 'Scam'],
    color: '#4b6fb5',
  },
]

function getRightCount(player) {
  return player.answers.filter((answer, index) => answer === messages[index].answer).length
}

function getPlayerStats(player) {
  const answered = player.answers.length
  const right = getRightCount(player)
  const left = messages.length - answered
  return {
    answered,
    right,
    left,
    finished: left === 0,
  }
}

function loadPlayers() {
  if (typeof window === 'undefined') {
    return initialPlayers
  }

  const savedPlayers = window.localStorage.getItem(storageKey)

  if (!savedPlayers) {
    return initialPlayers
  }

  try {
    const parsedPlayers = JSON.parse(savedPlayers)

    if (!Array.isArray(parsedPlayers)) {
      return initialPlayers
    }

    return parsedPlayers
  } catch {
    return initialPlayers
  }
}

function App() {
  const [players, setPlayers] = useState(loadPlayers)
  const [nickname, setNickname] = useState('')
  const [activePlayerId, setActivePlayerId] = useState(null)
  const [result, setResult] = useState(null)

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(players))
  }, [players])

  const playerStats = players.map((player) => ({
    ...player,
    stats: getPlayerStats(player),
  }))
  const heroRight = playerStats.reduce((total, player) => total + player.stats.right, 0)
  const heroAnswered = playerStats.reduce((total, player) => total + player.stats.answered, 0)
  const heroPossible = playerStats.length * messages.length
  const activePlayer = playerStats.find((player) => player.id === activePlayerId)
  const currentMessage = activePlayer && !activePlayer.stats.finished
    ? messages[activePlayer.stats.answered]
    : null
  const displayedMessage = result ? result.message : currentMessage

  function handleAddPlayer(event) {
    event.preventDefault()
    const trimmedNickname = nickname.trim()

    if (!trimmedNickname) {
      return
    }

    setPlayers((currentPlayers) => [
      ...currentPlayers,
      {
        id: `player-${Date.now()}`,
        name: trimmedNickname,
        answers: [],
        color: rowColors[currentPlayers.length % rowColors.length],
        createdAt: Date.now(),
      },
    ])
    setNickname('')
  }

  function handleRemovePlayer(playerId) {
    setPlayers((currentPlayers) => currentPlayers.filter((player) => player.id !== playerId))

    if (activePlayerId === playerId) {
      setActivePlayerId(null)
      setResult(null)
    }
  }

  function handlePlay(playerId) {
    setActivePlayerId(playerId)
    setResult(null)
  }

  function handleAnswer(answer) {
    if (!activePlayer || !currentMessage || result) {
      return
    }

    setPlayers((currentPlayers) => currentPlayers.map((player) => {
      if (player.id !== activePlayer.id) {
        return player
      }

      return {
        ...player,
        answers: [...player.answers, answer],
      }
    }))

    setResult({
      answer,
      correct: answer === currentMessage.answer,
      message: currentMessage,
    })
  }

  function handleNextMessage() {
    if (!activePlayer) {
      setResult(null)
      return
    }

    if (activePlayer.stats.finished) {
      setActivePlayerId(null)
    }

    setResult(null)
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Sample data</p>
        <h1>Family Scam Challenge</h1>
        <p className="purpose">
          A browser-local game for practising scam message clues at home.
        </p>
      </header>

      <section className="hero-card" aria-labelledby="hero-title">
        <div>
          <p className="eyebrow">Total right answers</p>
          <h2 id="hero-title">{heroRight}</h2>
          <p className="hero-line">
            {playerStats.length} players, {heroAnswered} of {heroPossible} answered
          </p>
          <p className="save-note">Progress is saved in this browser after every answer.</p>
        </div>
        <div className="stacked-bar" aria-label="Each player's share of right answers">
          {heroRight === 0 && <span className="empty-stack" />}
          {heroRight > 0 && playerStats.map((player) => (
            <span
              key={player.id}
              style={{
                backgroundColor: player.color,
                width: `${(player.stats.right / heroRight) * 100}%`,
              }}
            />
          ))}
        </div>
        <div className="legend" aria-label="Right answers by player">
          {playerStats.map((player) => (
            <span key={player.id}>
              <span className="legend-mark" style={{ backgroundColor: player.color }} />
              {player.name}: {player.stats.right}
            </span>
          ))}
        </div>
      </section>

      <section className="game-grid" aria-label="Sample game preview">
        <div className="panel player-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Players</p>
              <h2>Family scoreboard</h2>
            </div>
            <form className="add-player" aria-label="Add player" onSubmit={handleAddPlayer}>
              <label htmlFor="nickname">Nickname</label>
              <div>
                <input
                  id="nickname"
                  type="text"
                  placeholder="New player"
                  value={nickname}
                  onChange={(event) => setNickname(event.target.value)}
                />
                <button type="submit">Add player</button>
              </div>
            </form>
          </div>

          <div className="player-list">
            {playerStats.length === 0 && (
              <div className="empty-note">
                <strong>No players yet.</strong>
                <p>Add a nickname to start the challenge again in this browser.</p>
              </div>
            )}
            {playerStats.map((player) => {
              const progress = (player.stats.answered / messages.length) * 100
              return (
                <article
                  className={`player-row ${player.stats.finished ? 'is-finished' : ''}`}
                  key={player.id}
                >
                  <div className="row-top">
                    <div className="player-name">
                      <span className="row-mark" style={{ backgroundColor: player.color }} />
                      <strong>{player.name}</strong>
                    </div>
                    <strong>{player.stats.right} right</strong>
                  </div>
                  <div className="row-bottom">
                    <div className="progress-wrap">
                      <div className="progress-track">
                        <span style={{ width: player.stats.finished ? '100%' : `${progress}%` }} />
                      </div>
                      <span>{player.stats.answered} of {messages.length}</span>
                    </div>
                    <span className="status-text">
                      {player.stats.finished ? 'Finished' : `${player.stats.left} left`}
                    </span>
                  </div>
                  <div className="row-actions" aria-label={`${player.name} actions`}>
                    {!player.stats.finished && (
                      <button type="button" onClick={() => handlePlay(player.id)}>Play</button>
                    )}
                    <button
                      type="button"
                      className="quiet-button"
                      onClick={() => handleRemovePlayer(player.id)}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <aside className="panel challenge-panel" aria-labelledby="challenge-title">
          <p className="eyebrow">
            {activePlayer && displayedMessage
              ? `Message ${displayedMessage.id} of ${messages.length}`
              : 'Ready to play'}
          </p>
          <h2 id="challenge-title">
            {activePlayer ? `Answer as ${activePlayer.name}` : 'Choose a player'}
          </h2>
          {displayedMessage ? (
            <>
              <div className="message-card">
                <p className="sender">{displayedMessage.sender}</p>
                <p className="message-text">{displayedMessage.text}</p>
              </div>
              <div className="answer-buttons">
                <button type="button" onClick={() => handleAnswer('Scam')} disabled={Boolean(result)}>Scam</button>
                <button type="button" onClick={() => handleAnswer('Legit')} disabled={Boolean(result)}>Legit</button>
              </div>
            </>
          ) : (
            <div className="message-card">
              <p className="sender">Press Play on a player row.</p>
              <p className="message-text">Each player answers the same ten messages in order, once each.</p>
            </div>
          )}

          {result && (
            <div className={`result-card ${result.correct ? 'is-right' : 'is-wrong'}`}>
              <strong>{result.correct ? 'Right' : 'Wrong'}</strong>
              <p>Correct answer: {result.message.answer}</p>
              <p>{result.message.reasons}</p>
            </div>
          )}

          {result && (
            <button type="button" className="next-button" onClick={handleNextMessage}>
              Next message
            </button>
          )}
        </aside>
      </section>

      <footer className="safety-line">
        Lost money to a scam? Call the National Scam Response Centre at 997.
      </footer>
    </main>
  )
}

export default App
