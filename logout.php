<?php
    //handle logout
    session_start();
    if(isset($_SESSION["name"])) {
        session_destroy();
        header("Location: index.htm;");
    }
?>