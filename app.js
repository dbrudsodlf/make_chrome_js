const loginForm = document.querySelector("#login-form")
const loginInput=document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault(); //자동 저장을 막아주는 라인
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; //'' ""아니고 백틱임 ``
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit)