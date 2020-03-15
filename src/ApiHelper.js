export const API_PATH = "http://localhost:1234/api/ToDoEntities";


export const getAllTasks = async () => {
    let reponse = await fetch(`${API_PATH}`,{
        method:"GET"
    })
        return await reponse.json();


}


export const AddTask = async (task) => {
    let reponse = await fetch(`${API_PATH}`,{
        method:"POST",
        body:JSON.stringify(task),
        headers:new Headers({'content-type': 'application/json'})
    })
        return await reponse.json();


}