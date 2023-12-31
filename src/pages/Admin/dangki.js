import { signin } from "../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Signin = {
    render(){
        return `
            <form id="formSignin">
                <input type="email" id="email" placeholder="your email" class="border border-black"/>
                <input type="password" id="password" placeholder="your password" class="border border-black"/>
                <button>Đăng nhập</button>
            </form>
        
        `
    },
    afterRender(){
        const formSignin = document.querySelector('#formSignin');
        formSignin.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const { data } = await signin({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                if(data){
                    console.log(data.user);
                    // Lưu thông tin user vào localStorage
                    localStorage.setItem("user", JSON.stringify(data.user));
                    toastr.success("Đăng nhập thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href="/"
                    }, 2000)
                }

            } catch (error) {
                toastr.error(error.response.data);
            }
            
        })
    }
}
export default Signin;