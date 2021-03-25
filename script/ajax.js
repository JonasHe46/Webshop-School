import { mainPage } from "./build.js";

var loggedIn = new Boolean("false"); 

function ajaxRequest() {


   
        // (B1) GET FORM DATA
        var data = new FormData();
        // data.append('name', document.getElementById("user-name").value);
        // data.append('email', document.getElementById("user-email").value);
       
        // (B2) AJAX CALL
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "/webshop/script/getData.php");
        xhr.onload = function () {
          // console.log(this.response);
        };
        xhr.send(data);
        return false;
      
    
}

function ajaxLogoutCall() {


  console.log(loggedIn);
 // (B1) GET FORM DATA
 var data = new FormData();

 var xhr = new XMLHttpRequest();
 if(loggedIn == false) {
   xhr.open('POST', "/webshop/login.html");
   xhr.onload = function () {
     // console.log(this.response);
   };
   xhr.send(data);
 
   document.getElementById("logBtn").innerHTML="Logout";
 } else {
   xhr.open('POST', "/webshop/logout.php");
   xhr.onload = function () {
     // console.log(this.response);
   };
   xhr.send(data);
 
   document.getElementById("logBtn").innerHTML="Login";
 }

 loggedIn = !loggedIn;

 return false;


}

async function fetchDataAsync(url) {
   await fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      mainPage(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
   
  
}


export { ajaxRequest, fetchDataAsync }; 