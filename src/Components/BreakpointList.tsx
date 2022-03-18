export interface breakpoint {
  percentage: number,
  color: string,
}

interface propTypes {
  breakpoints: breakpoint[],
  onChange: (index: number, breakpoint: breakpoint) => void,
  onDelete: (index: number) => void,
}

export default function renderBreakpointList(props: propTypes) {
  return <ul>
    {props.breakpoints.map((breakpoint, index) =>
      <li key={index}>
        {/* Techniquement la key devrait encore etre un id unique car l'index ne sert a rien */}
        <span>Breakpoint {index + 1}</span>
        <input type="number" placeholder="Breakpoint percentage" onInput={(e) => props.onChange(index, { ...breakpoint, 'percentage': parseFloat(e.currentTarget.value) })} />
        <input type="color" placeholder="Breakpoint color" onInput={(e) => props.onChange(index, { ...breakpoint, 'color': e.currentTarget.value })} />
        <button onClick={() => props.onDelete(index)}> Delete</button>
      </li>)}
  </ul>
}