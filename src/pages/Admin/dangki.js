

// Lấy thông tin đăng ký từ người dùngconst 
username = document.getElementById('username').value;const 
password = document.getElementById('password').value;
// Kiểm tra xem người dùng đã nhập đủ thông tin hay chưa
if (username === '' || password === '') 
{ alert('Vui lòng nhập đầy đủ thông tin đăng ký.'); 
return;}
// Kiểm tra xem tên đăng nhập đã tồn tại chưa
if (localStorage.getItem(username)) { 
alert('Tên đăng nhập đã tồn tại.'); return;}
const dangki = () => {
  return `
  <form action=""> 
<label for=""> Tên Tài Khoản </label>
<input type="text" id="username">
<label for=""> Đặt mật Khẩu </label>
<input type="text" id="password" >
</form>
  `
}

export default dangki;
