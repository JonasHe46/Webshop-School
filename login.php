<?php
    $mysqli = new mysqli("localhost", "root","","webshop");
    if($mysqli->connect_error) {
        echo "didnt work  ";
    }
        // session_start();
        
        // Checks if name and password are available.
        if(isset($_POST["data"]["user"]) && isset($_POST["data"]["pass"])){
            $user = $_POST["data"]["user"];
            $pass = $_POST["data"]["pass"];
            // echo $user;
            // echo $pass;
            //sql query
            $request = $mysqli->query("SELECT * FROM benutzer WHERE Username LIKE '$user'");

            //loop through data
            while($row = $request->fetch_array()){
                $passsql = $row["Password"];
                if(password_verify($pass, $passsql)) {
                    // $_SESSION["name"] = $user;
                    echo "true";
                    // header("Location: index.php");
                }else {
                    echo "false";
                }    
            }
            
        }else {
            echo "false";
        }
?>