import { fetchDataAsync } from "./ajax.js";
import { wipeBootdeyDiv } from "./build.js";

function buildLogin() {
    let loginMainDiv = document.createElement("div");
    loginMainDiv.classList.add("container");
    loginMainDiv.classList.add("login-container");
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    let loginForm = document.createElement("div");
    loginForm.classList.add("login-form-1");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Login";
    let form = document.createElement("form");
    let userDiv = document.createElement("div");
    userDiv.classList.add("form-group");
    let userInput = document.createElement("input");
    userInput.setAttribute("type", "text");
    userInput.setAttribute("name", "name");
    userInput.setAttribute("placeholder", "Your Username *");
    userInput.setAttribute("required", "");
    userInput.classList.add("form-control");

    let passDiv = document.createElement("div");
    userDiv.classList.add("form-group");
    let passInput = document.createElement("input");
    passInput.setAttribute("type", "password");
    passInput.setAttribute("name", "password");
    passInput.setAttribute("placeholder", "Your Password *");
    passInput.setAttribute("required", "");
    passInput.classList.add("form-control");

    let submitDiv = document.createElement("div");
    submitDiv.classList.add("form-group");
    let submitInput = document.createElement("input");
    submitInput.setAttribute("type", "submit");
    submitInput.setAttribute("name", "submit");
    submitInput.setAttribute("value", "Login");
    submitInput.classList.add("btnSubmit");

    let registerDiv = document.createElement("div");
    submitDiv.classList.add("form-group");
    let registerA = document.createElement("btn");

    registerA.classList.add("RegisterBtn");
    registerA.innerHTML = "New Account?";
    form.setAttribute("onsubmit","return false")
    

    userDiv.appendChild(userInput);
    passDiv.appendChild(passInput);
    submitDiv.appendChild(submitInput);
    registerDiv.appendChild(registerA);
    form.appendChild(userDiv);
    form.appendChild(passDiv);
    form.appendChild(submitDiv);
    form.appendChild(registerDiv);
    loginForm.appendChild(h3);
    loginForm.appendChild(form);
    rowDiv.appendChild(loginForm);
    loginMainDiv.appendChild(rowDiv);
    document.getElementById("bootdeyDiv").appendChild(loginMainDiv);

    submitInput.addEventListener("click", function() {
        loginFn(userInput.value, passInput.value)
    })
    

    registerA.addEventListener("click", function() {
        wipeBootdeyDiv();
        registerFn();
    })


    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
    

}


function registerFn() {

    let registerDiv = document.createElement("div");
    registerDiv.classList.add("container");
    registerDiv.classList.add("login-container");
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    let loginFormDiv = document.createElement("div");
    loginFormDiv.classList.add("login-form-1");
    let h3 = document.createElement("h3");
    h3.innerHTML = "Register";
    let form = document.createElement("form");
    let userDiv = document.createElement("div");
    userDiv.classList.add("form-group");
    let userInput = document.createElement("input");
    userInput.classList.add("form-control");
    userInput.setAttribute("placeholder", "Your Name");
    userInput.setAttribute("required", "");
    userInput.setAttribute("type", "text");

    let passDiv = document.createElement("div");
    passDiv.classList.add("form-group");
    let passInput = document.createElement("input");
    passInput.classList.add("form-control");
    passInput.setAttribute("placeholder", "Your Password");
    passInput.setAttribute("required", "");
    passInput.setAttribute("type", "password");

    let passReDiv = document.createElement("div");
    passReDiv.classList.add("form-group");
    let passReInput = document.createElement("input");
    passReInput.classList.add("form-control");
    passReInput.setAttribute("placeholder", "Confirm Your Password");
    passReInput.setAttribute("required", "");
    passReInput.setAttribute("type", "password");

    let containerDiv = document.createElement("div");
    containerDiv.classList.add("container")
    let firstRowDiv = document.createElement("div")
    firstRowDiv.classList.add("form-inline");
    firstRowDiv.classList.add("row");
    firstRowDiv.classList.add("register-form-inline");
    let streetInput = document.createElement("input");
    streetInput.classList.add("form-control");
    streetInput.classList.add("col");
    streetInput.setAttribute("placeholder", "Street");
    streetInput.setAttribute("required", "");
    let numberInput = document.createElement("input");
    numberInput.classList.add("form-control");
    numberInput.classList.add("col");
    numberInput.setAttribute("placeholder", "Housenumber");
    numberInput.setAttribute("required", "");
  

    let secondRowDiv = document.createElement("div")
    secondRowDiv.classList.add("form-inline");
    secondRowDiv.classList.add("row");
    secondRowDiv.classList.add("register-form-inline");
    let plzInput = document.createElement("input");
    plzInput.classList.add("form-control");
    plzInput.classList.add("col");
    plzInput.setAttribute("placeholder", "PLZ");
    plzInput.setAttribute("required", "");
    let cityInput = document.createElement("input");
    cityInput.classList.add("form-control");
    cityInput.classList.add("col");
    cityInput.setAttribute("placeholder", "City");
    cityInput.setAttribute("required", "");

    let submitDiv = document.createElement("div");
    submitDiv.classList.add("form-group");
    let submitInput = document.createElement("btn");  
    submitInput.classList.add("btnSubmit");
    submitInput.classList.add("lgf");
    submitInput.innerHTML = "REGISTER"
    submitInput.setAttribute("type", "submit");
    
    let goToLogin = document.createElement("div");
    goToLogin.classList.add("form-group");
    let goToLoginBtn = document.createElement("btn");
    goToLoginBtn.classList.add("btn");
    goToLoginBtn.innerHTML = "Go Back"

    loginFormDiv.classList.add("lgf");

    loginFormDiv.appendChild(h3);
    userDiv.appendChild(userInput);
    form.appendChild(userDiv);
    passDiv.appendChild(passInput);
    form.appendChild(passDiv);
    passReDiv.appendChild(passReInput);
    form.appendChild(passReDiv);
    firstRowDiv.appendChild(streetInput);
    firstRowDiv.appendChild(numberInput);
    secondRowDiv.appendChild(plzInput);
    secondRowDiv.appendChild(cityInput);
    containerDiv.appendChild(firstRowDiv);
    containerDiv.appendChild(secondRowDiv);
    form.appendChild(containerDiv);
    submitDiv.appendChild(submitInput);
    form.appendChild(submitDiv);
    goToLogin.appendChild(goToLoginBtn);
    form.appendChild(goToLogin);
    loginFormDiv.appendChild(form);
    
    rowDiv.appendChild(loginFormDiv);
    registerDiv.appendChild(rowDiv);
    document.getElementById("bootdeyDiv").appendChild(registerDiv);

    goToLoginBtn.addEventListener("click", function() { 
        document.getElementById("footer").remove();
        document.getElementById("bootdeyDiv").remove();
        fetchDataAsync('/Webshop-School/script/getData.php');
    })

    submitInput.addEventListener("click", function() {
        let d = {
            "name": userInput.value,
            "pass" :passInput.value,
            "passre" : passReInput.value,
            "street" : streetInput.value,
            "number" : numberInput.value,
            "plz" : plzInput.value,
            "city" : cityInput.value
        }
        console.log(d);
        $.ajax({
            url: '/Webshop-School/createuser.php',
            type: "POST",
            data: {data: d},
            success: function(data) { 
                console.log(data)
                
                
                if(data == "true") {
                   
                    document.getElementById("carousel").classList.remove("dNone");
            
                
                    document.getElementById("footer").remove();
                    document.getElementById("bootdeyDiv").remove();
                    fetchDataAsync('/Webshop-School/script/getData.php');
                    alert("Juhu, you are now ready to login")
                }
    
                if(data == "false") {
                    alert("wrong login data. Please try again :)");
                }
                if(data == "") {
                    alert("wrong login data. Please try again :)");
                }
    
            }
        })
    })

   
}


function loginFn(user, pass) {
// console.log("test: ", user, pass)
let d = {
    "user": user,
    "pass": pass
}
    $.ajax({
        url: '/Webshop-School/login.php',
        type: "POST",
        data: {data: d},
        success: function(data) { 
            console.log(data)

            if(data == "true") {
                document.cookie = "username=" + user;
                document.getElementById("carousel").classList.remove("dNone");
                document.getElementById("loginBtn").innerHTML ="Logout";
                document.getElementById("footer").remove();
                document.getElementById("bootdeyDiv").remove();
                fetchDataAsync('/Webshop-School/script/getData.php');
            }

            if(data == "") {
                alert("wrong login data. Please try again :)");
            }

        }
    })
}


function logoutFn() {
    document.cookie = "username= ;";
    document.getElementById("loginBtn").innerHTML ="Login";
    // console.log("logout")
}

export { buildLogin, logoutFn }