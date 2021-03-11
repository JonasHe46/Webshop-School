<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" type="text/css" href="style.css"></link>
    <script>
        $(document).ready(function(){
            $("form").submit(function(event){
                event.preventDefault();
                var name = $("#username").val();
                var password = $("userpassword").val();
                var submit = $("userdatasend");
                $(".form-message").load("createuser.php",{
                    name: name,
                    password: password,
                    submit: submit
                });
            });
        });
    </script>
    
    </head>
    <body>
        <form action="createuser.php">
            <input id="username" type="text" name="name" placeholder="Username">
            <input id="userpassword" type="password" name="password" placeholder="Password">
            <button id="userdatasend" type="submit" name="submit">Senden</button>
            <p class="form-message"></p>
        </form> 
    </body>
</html>