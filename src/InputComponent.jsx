import React, { useState, useContext } from 'react'
import { AddTask } from './ApiHelper'
import { TaskContext } from './Context/TaskContext'
const InputComponent = () => {
    const [task, setTask] = useState({
        text: '',
        isFinished: false
    })


    const [taskHook, setTaskHook] = useContext(TaskContext);

    const PostTask = async () => {
        await AddTask(task)
        setTaskHook(taskHook + 1);
    }
    return (
        <div className="row">
            <div className="form-group col-9">
                <input type="text" placeholder="Add Tast" className="form-control"
                    onChange={(e) => { setTask({ text: e.target.value }) }} />
            </div>
            <div className="form-group col-3">
                <button className="btn btn-info" onClick={PostTask}> + Add Task</button>
            </div>
        </div>
    )
}

export default InputComponent;