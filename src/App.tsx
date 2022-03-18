import React from 'react';
// import TaskForm from './Components/TaskForm'
import BreakpointList, { breakpoint } from './Components/BreakpointList'

export default function App() {
  const defaultValue: breakpoint = {
    percentage: 0,
    color: '#000000',
  }

  const [rotation, setRotation] = React.useState(0)
  const [BreakpointsList, handleBreakpointListChange] = React.useState<breakpoint[]>([])
  const [editedValue, handleChange] = React.useState<breakpoint>(defaultValue)

  const createBreakpoint = () => {
    handleBreakpointListChange([...BreakpointsList, editedValue])
    handleChange(defaultValue)
  }

  const handleBreakpointChange = (index: number, breakpoint: breakpoint) => {
    const BreakpointsListClone = [...BreakpointsList]
    BreakpointsListClone.splice(index, 1, breakpoint)
    handleBreakpointListChange(BreakpointsListClone)
  }

  const deleteBreakpoint = (index: number) => {
    const BreakpointsListClone = [...BreakpointsList]
    BreakpointsListClone.splice(index, 1)
    handleBreakpointListChange(BreakpointsListClone)
  }

  const computeCssPropertie = () => {
    const propertie = BreakpointsList.reduce((propertie: string, breakpoint: breakpoint) => propertie + `, ${breakpoint.color} ${breakpoint.percentage}%`, '')
    return `linear-gradient(${rotation}deg${propertie})`
  }

  return (
    <div className="App">
      <BreakpointList
        breakpoints={BreakpointsList}
        onChange={handleBreakpointChange}
        onDelete={deleteBreakpoint}
      />
      <button onClick={createBreakpoint}>Create</button>
      <label htmlFor="range">Rotation</label>
      <input type="range"
        name='range'
        onChange={(e) => setRotation(parseInt(e.currentTarget.value))}
        step={1}
        value={rotation}
        min={0}
        max={360}
      />
      <div style={{ width: 100 + '%', height: 100 + 'px', background: computeCssPropertie() }}></div>
      <span>background: {computeCssPropertie()}</span>
    </div>
  );
}
