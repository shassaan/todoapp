import React, { useEffect, useState, useContext } from 'react'
import TaskList from './TaskList'
import { getAllTasks } from './ApiHelper'
import { TaskContext } from './Context/TaskContext';
const TaskListContainer = () => {
    const [tasks, setTasks] = useState([]);
    const taskHook = useContext(TaskContext)[0];
    useEffect(() => {
        const fetch = async () => {
            let response = await getAllTasks();
            
            setTasks(response); 
        }
        fetch();

    }, [taskHook]);



    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <TaskList title="Pending Tasks" data={tasks.filter(x=> !x.isFinished)}/>
                </div>
                <div className="col-md-6">
                    <TaskList title="Completed Tasks" data={tasks.filter(x=> x.isFinished)}/>
                </div>
            </div>
        </>
    )

}


export default TaskListContainer;