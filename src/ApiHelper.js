export const API_PATH = "https://doetnetodoapi.herokuapp.com/api/ToDoEntities";


export const getAllTasks = async () => {
    let reponse = await fetch(`${API_PATH}`,{
        method:"GET"
    })
        return await reponse.json();


}

export const deleteTask = async (taskId) => {
    let reponse = await fetch(`${API_PATH}/${taskId}`,{
        method:"DELETE"
    })
        return await reponse.json();


}

export const updateTask = async (taskId,task) => {
    let taskObj = {
        id : taskId,
        text : task.text,
        taskDate : task.taskDate,
        isFinished : true
    };
    let reponse = await fetch(`${API_PATH}/${taskId}`,{
        method:"PUT",
        body:JSON.stringify(taskObj),
        headers:new Headers({'content-type': 'application/json'})
    })
        return await reponse;


}


export const AddTask = async (task) => {
    let reponse = await fetch(`${API_PATH}`,{
        method:"POST",
        body:JSON.stringify(task),
        headers:new Headers({'content-type': 'application/json'})
    })
        return await reponse.json();


}