
import { add } from "../../api/project";
import { router } from "../../lib";
import { useEffect } from "../../lib";

const AddProjectPage = () => {
    useEffect(() => {
        const addForm = document.querySelector("#add-form")
        addForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const newProject = {
                "title": document.querySelector("#title").value,
                "img": document.querySelector("#img").value,
                "price": document.querySelector("#price").value,
                "description": document.querySelector("#description").value,
            }
           

            add(newProject).then(() => { router.navigate('/admin/project') })
        })


    })
    return /*html*/`
        <form action="" id="add-form" class=" grid grid-cols-1 mt-2.5 max-w-xl container ">
        <label for=""> Title</label>
            <input class="border border-dark my-2" type="text" placeholder=" title" id="title"/>
        <label for=""> Hình Ảnh </label>

            <input class="border border-dark my-2" type="link" placeholder=" img" id="img"/>
        <label for=""> Giá </label>

            <input class="border border-dark my-2" type="text" placeholder=" price" id="price"/>
        <label for=""> Mô Tả </label>

            <input class="border border-dark my-2" type="text" placeholder=" mô tả" id="description"/>
            
            
            <button class="btn btn-danger ">Add New Project</button>
        </form>
    `
}

export default AddProjectPage;