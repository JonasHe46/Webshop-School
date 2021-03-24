import { mainPage } from "./build.js";

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