import React from 'react'
const TaskList = (prop) => {
    const {data = [],title="No Title"} = prop || [];
    
    return (
        <div className="p-1" style={{border:'1px solid black'}}>
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
                        data.map((value,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{value.text}</td>
                            <td>{value.taskDate}</td>
                            <td><a href="#">complete</a> <a href="#">Delete</a></td>
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