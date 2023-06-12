// import HomePage from './pages/HomePage'
import { router, render } from './lib'
import ProjectManagementPage from './pages/Admin/ProjectManagement'
// import ProjectManagementPage from "./pages/Admin/ProjectManagement"
import AddProjectPage from "./pages/Admin/AddProject"
import UpdateProjectPage from "./pages/Admin/UpdateProject"

const app = document.querySelector("#app") //tìm phần tử html có id là app

// router.on('/',()=>{
//     return render(HomePage,app)
// })
// Admin
router.on('/admin/project', () => {
    return render(ProjectManagementPage, app)
})
router.on('/admin/project/add', () => {
    return render(AddProjectPage, app)
})
router.on('/admin/project/update/:id', ({ data }) => {
    return render(() => {
        return UpdateProjectPage(data)
    }, app)
})


router.resolve() //sử dụng phương thức resolve để thực thi 