import { colors } from '@jojo-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return (
    <div className="flex flex-col">
      {Object.entries(colors).map(([name, value]) => (
        <button
          key={name}
          style={{
            backgroundColor: value,
            padding: '2rem',
            borderRadius: 8,
            marginTop: 3,
          }}
          className="hover:opacity-80 hover:scale-[99%] transition-opacity duration-300 ease-in-out cursor-copy"
          onClick={() => navigator.clipboard.writeText(`bg-${name}`)}
        >
          <div
            data-color={getContrast(value, '#FFF') < 3.5}
            className="flex gap-10 justify-between w-full text-white data-[color=true]:text-black"
          >
            <strong>bg-{name}</strong>
            <span className="text-sm"> {value}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
