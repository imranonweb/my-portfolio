import { skills } from '../data.js'
import Wheel from './Wheel.jsx'

const names = skills.flatMap((g) => g.items.map((i) => i.name))

function Track({ hidden = false }) {
  return (
    <ul className="band-track" aria-hidden={hidden || undefined}>
      {names.map((n) => (
        <li key={n}>
          {n}
          <Wheel size={26} />
        </li>
      ))}
    </ul>
  )
}

/** Painted banner, like the lettering strip on a truck: skills scroll past forever. */
export default function Band() {
  return (
    <div className="band" role="presentation">
      <div className="band-run">
        <Track />
        <Track hidden />
      </div>
    </div>
  )
}

