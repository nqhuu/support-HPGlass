
let account = [
    {
        username1: 'huunq',
        password1: '12345678'
    },
    {
        username1: 'user',
        password1: '12345678'
    }
];


let userElement = document.querySelector('input[id="username"]');
let passwordElement = document.querySelector('input[id="password"]');
let website = document.querySelector('a[id="webHpg"]')
// console.log(website);

let username = '';
userElement.oninput = function (event) {
    username = event.target.value;
    // console.log(username);
}
// let userLength = username.length;

let password = '';
passwordElement.oninput = function (event) {
    password = event.target.value
    // console.log(password.length);
}
// let passLength = password.length;

let summit = document.querySelector('button')
summit.onclick = function () {
    let kq = false;
    let checkAccount;
    if (username.length === 0 || username.length <= 3) {
        alert('Nhập tài khoản có nhiều hơn 3 ký tự')
    } else if (username.length > 3) {
        if (password.length === 0 || password.length < 8) {
            alert('Mật khẩu không được để trống và phải có ít nhất 8 ký tự')
        } else {
            checkAccount = account.find(item => item.username1 === username && item.password1 === password)
            if (checkAccount) {
                console.log('Bạn đã đăng nhập thành công');
                kq = true;
            } else {
                alert('Sai tài khoản hoặc mật khẩu')
            }
        }

        if (kq) {
            window.location.href = website.href;
        };
    }

}


// console.log(userElement);
// console.log(passwordElement);