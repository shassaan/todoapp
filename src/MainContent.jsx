import React from 'react'
import InputComponent from './InputComponent'
import TaskListContainer from './TaskListContainer'
const MainContent = () => {
    return (
        <div className="container">
            <InputComponent />
            <TaskListContainer />
        </div>
    )
}


export default MainContent;