export const API_PATH = "http://172.16.5.137:1234/api/ToDoEntities";


export const getAllTasks = async () => {
    let reponse = await fetch(`${API_PATH}`,{
        method:"GET"
    })
        return await reponse.json();


}