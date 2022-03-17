export interface task {
  title: string,
  description: string,
  done: boolean,
}

export default function renderTasksList(props: {
  tasks: task[],
  onDelete: (index: number) => void,
  onChangeTaskStatus: (index: number) => void
}
) {
  return <ul>
    {props.tasks.map((task, index) =>
      <li key={index}>
        {/* Techniquement la key devrait etre un id unique car l'index ne sert a rien */}
        <h3 style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.title}</h3>
        <div style={{ textDecoration: task.done ? 'line-through' : '' }}>{task.description}</div>
        <button onClick={() => props.onDelete(index)}> Delete</button>
        <button onClick={() => props.onChangeTaskStatus(index)} > {task.done ? 'Uncheck' : 'Check'}</button>
      </li>)}
  </ul>
}