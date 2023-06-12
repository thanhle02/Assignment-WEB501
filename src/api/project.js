import instance from "./instance"

const getAll = () => {
    return instance.get('/projectList')
}
const getOne = (id) => {
    return instance.get(`/projectList/${id}`)
}
const remove = (id) => {
    return instance.delete(`/projectList/${id}`)
}
const add = (project) => {
    return instance.post(`/projectList`, project)
}
const update = (project) => { //{id: 1, title: 'abc'}
    return instance.put(`/projectList/${project.id}`, project)
}
// const dangki =(user)=>{
//     return instance.pus
// }
export { getAll, remove, add, update }