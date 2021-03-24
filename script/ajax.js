
function ajaxRequest() {


   
        // (B1) GET FORM DATA
        var data = new FormData();
        // data.append('name', document.getElementById("user-name").value);
        // data.append('email', document.getElementById("user-email").value);
       
        // (B2) AJAX CALL
        var xhr = new XMLHttpRequest();
        xhr.open('POST', "getData.php");
        xhr.onload = function () {
          console.log(this.response);
        };
        xhr.send(data);
        return false;
      
    
}

export { ajaxRequest }; 