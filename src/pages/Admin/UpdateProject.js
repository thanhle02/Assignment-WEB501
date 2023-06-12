import { update } from "../../api/project"
import { router, useEffect, useState } from "../../lib"

const UpdateProjectPage = ({ id }) => {
    // console.log(id);
    const [project, setProject] = useState({}) //khai báo biến project để lưu trữ data

    // call api để lấy dữ liệu và gán vào biến project
    useEffect(() => {
        fetch(`http://localhost:3000/projectList/${id}`)
            .then(response => response.json())
            .then(data => setProject(data))
    }, [])

    // thêm mới data
    useEffect(() => {
        const updateForm = document.querySelector("#update-form")
        // tìm tới form update và lắng nghe sự kiện submit
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault() //chặn sự kiện reload trang
            // lấy dữ liệu từ form
            const newData = {
                "id": id,
                "title": document.querySelector("#title").value,
                "img": document.querySelector("#img").value,
                "price": document.querySelector("#price").value,
                
                "description": document.querySelector("#description").value,
                
            }
            // gọi api để update data
           

            update(newData).then(() => { router.navigate("/admin/project") })
        })
    })
    return `
        <form action="" id="update-form" class=" grid grid-cols-1 mt-2.5 max-w-xl container ">
 <label for=""> Title </label>

         <input class="border border-dark my-2" type="text" placeholder="Project title" id="title" value="${project.title}"/>
 <label for="">Ảnh  </label>
            
         <input class="border border-dark my-2" type="text" placeholder="Project img" id="img" value="${project.img}"/>
 <label for=""> Gía </label>
           
         <input class="border border-dark my-2" type="text" placeholder="Project price" id="price" value="${project.price}"/>
 <label for=""> Mô Tả </label>
          
         <input class="border border-dark my-2" type="text" placeholder="Project content" id="description" value="${project.description}"/>

            <button class="btn btn-success">Update Project</button>
        </form>
    `
}

export default UpdateProjectPage;