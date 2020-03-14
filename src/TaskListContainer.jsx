import React, { useEffect, useState } from 'react'
import TaskList from './TaskList'
import { getAllTasks } from './ApiHelper'
const TaskListContainer = () => {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        const fetch = async () => {
            let response = await getAllTasks();
            console.log(response)
            setTasks(response); 
        }
        fetch();

    }, [tasks]);



    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    {tasks && tasks.length > 0 && tasks.map(e => {
                        return <h1>{e.text}</h1>
                    })}
                </div>
                <div className="col-md-6">
                    <TaskList title="Completed Tasks" />
                </div>
            </div>
        </>
    )

}


export default TaskListContainer;