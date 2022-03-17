import { task } from './TaskList'

interface propTypes {
    task: task
    onChange: (value: task) => void
    onCreate: () => void
}

export default function renderForm(props: propTypes) {
    return <>
        <label>Créé tes tâches de fou 🔥</label>
        <input
            type="text"
            value={props.task.title}
            placeholder='Title'
            onInput={(e) => props.onChange({ ...props.task, 'title': e.currentTarget.value })}
        />

        <input
            type="text"
            value={props.task.description}
            placeholder='Description'
            onInput={(e) => props.onChange({ ...props.task, 'description': e.currentTarget.value })}
        />

        <button onClick={props.onCreate}>Create</button>
    </>
}