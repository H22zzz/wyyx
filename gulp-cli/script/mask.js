var box = $1('.box');
var close = $1('.close');
var user = $1('.user');
var pass = $1('.pass');
var auto = $1('.auto');
var form = $1('form');
var mask = $1('.mask');
var loginC = $1('.loginC');

box.onclick = function (){
    // 显示登录框和蒙板层
    loginC.style.display = 'block';
    mask.style.display = 'block';

    // 判断之前是否有存储账号密码
    if (getCookie('username')){
        user.value = getCookie('username');
        pass.value = getCookie('password');
        auto.checked = true;
    }

}

close.onclick = function (){
    // 隐藏登录框和蒙板层
    loginC.style.display = 'none';
    mask.style.display = 'none';
}

form.onsubmit = function (){
    if (!user.value || !pass.value) {
        alert('输入不能为空!');
        return false;
    }
    if (auto.checked) {
        setCookie({
            key: 'username',
            val: user.value,
            days: 7
        });
        setCookie({
            key: 'password',
            val: pass.value,
            days: 7
        });
    } else {
        removeCookie('username');
        removeCookie('password');
    }
}