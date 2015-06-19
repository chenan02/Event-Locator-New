<?php
    include_once("db.php");
    
    $name = $_POST["name"];
    $date = $_POST["date"];
    $time = $_POST["time"];
    $location = $_POST["location"];
    
    if(mysql_query("INSERT INTO events VALUES($name, $date, $time, $location)"))
        echo "Successfully inserted";
    else
        echo "Insertion failed";
    mysql_close($conn); //?
?>