import React from 'react';
import TaskForm from './Components/TaskForm'
import TaskList, { task } from './Components/TaskList'

export default function App() {
  const defaultValue: task = {
    title: '',
    description: '',
    done: false
  }

  const [tasksList, handleTaskListChange] = React.useState<task[]>([])
  const [editedValue, handleChange] = React.useState<task>(defaultValue)

  const createTask = () => {
    handleTaskListChange([...tasksList, editedValue])
    handleChange(defaultValue)
  }

  const deleteTask = (index: number) => {
    const taskListClone = [...tasksList]
    taskListClone.splice(index, 1)
    handleTaskListChange(taskListClone)
  }

  const changeTaskStatus = (index: number) => {
    const taskListClone = [...tasksList]
    const finishedTask = { ...taskListClone[index], 'done': !taskListClone[index].done }
    taskListClone.splice(index, 1, finishedTask)
    handleTaskListChange(taskListClone)
  }

  return (
    <div className="App">
      <TaskForm
        task={editedValue}
        onChange={(task) => handleChange(task)}
        onCreate={createTask} />
      <TaskList tasks={tasksList} onDelete={deleteTask} onChangeTaskStatus={changeTaskStatus} />
    </div>
  );
}
