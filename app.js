const loginForm = document.querySelector("#login-form")
const loginInput=document.querySelector("#login-form input");


function onLoginSubmit(event){
    event.preventDefault(); //자동 저장을 막아주는 라인
    console.dir(event);
}


loginForm.addEventListener("submit",onLoginSubmit)