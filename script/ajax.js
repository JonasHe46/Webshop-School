import { mainPage } from "./build.js";

//call Php schript from javascript Function
function ajaxRequest() {
        var data = new FormData();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "/webshop/script/getData.php");
        xhr.onload = function () {
          //console.log(this.response);
        };
        xhr.send(data);
        return false;
      
    
}

//get Data from Php in Javascript
async function fetchDataAsync(url) {
   await fetch(url)
    .then(response => response.json())
    .then(data => {
      mainPage(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
   
  
}


export { ajaxRequest, fetchDataAsync }; 