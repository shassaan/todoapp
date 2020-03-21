import React, { useContext } from 'react'
import { deleteTask, updateTask } from './ApiHelper';
import { TaskContext } from './Context/TaskContext'

const TaskList = (prop) => {
    const { data = [], title = "No Title" } = prop || [];
    const [taskHook, setTaskHook] = useContext(TaskContext);

    const delTask = async (e) => {
        let response = await deleteTask(e.target.id)
        if (response) {
            setTaskHook(taskHook + 1);
        }
    }


    const finishTask = async (task) => {
        let response = await updateTask(task.id, task)
        if (response) {
            setTaskHook(taskHook + 1);
        }
    }

    return (
        <div className="p-1" style={{ border: '1px solid black' }}>
            <h2 className="text-center">{title}</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Task</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{value.text}</td>
                                    <td>{value.taskDate}</td>
                                    <td>{value.isFinished ? <p style={{ display: 'inline' }}>Completed</p> : <a href="#" onClick={() => { finishTask(value) }}>complete</a>} <a href="#" onClick={delTask} id={value.id}>Delete</a></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}


export default TaskList;