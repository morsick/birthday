import { invite } from './content'
import gachiArt from './gachi.jpg'

export default function App() {
  return (
    <div className="page-shell">
      <div className="glow glow-left" />
      <div className="glow glow-right" />

      <main className="layout">
        <section className="invite panel">
          <img
            className="gachi"
            src={gachiArt}
          />
          <p className="kicker">{invite.kicker}</p>
          <h1>{invite.title}</h1>
          <p className="host">{invite.host}</p>

          <p className="message">{invite.message}</p>

          <dl className="details">
            {invite.details.map((item) => (
              <div className="detail" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          {invite.note ? <p className="note">{invite.note}</p> : null}
          <p className="signature">{invite.signature}</p>
        </section>
      </main>
    </div>
  )
}
