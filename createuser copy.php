<?php
    $mysqli = new mysqli("localhost", "root","","webshop");

    $name = $_POST["name"];
    $pass = $_POST["password"];
    $passrep = $_POST["passwordrep"];
    $street = $_POST["street"];
    $number = $_POST["number"];
    $plz = $_POST["plz"];
    $city = $_POST["city"];
    

    if($pass == $passrep){
        $available = $mysqli->query("SELECT ID FROM benutzer WHERE Username LIKE '$name'");
        if($available->num_rows == 0) {
            $hashedPass = password_hash($pass, PASSWORD_DEFAULT);
            $insert = "INSERT INTO benutzer (Username, Password, Strasse, Hausnummer, Ort, Plz) VALUES ('$name','$hashedPass', '$street', '$number', '$city', '$plz')";
            $query = $mysqli->query($insert);
        
            if($query == true){
                echo 'User created successfully. You can <a href="login.html">Login</a> using your created account.';
            }
            else {
                echo 'User could not be created. Please try again later -> <a href="register.html">register</a>';
            }
        } else {
            echo 'This user already exists. Please try again using a different username -> <a href="register.html">Register</a>';
        }
           
    } else {
        exit('The entered passwords do not match. Please try again -> <a href="register.html">register</a>');
    }
    
        
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>