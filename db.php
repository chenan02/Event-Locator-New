<?php
    $conn = mysql_connect("localhost", "root", "");
    $db = mysql_select_db("events");
    if(mysql_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysql_connect_error();
    }
?>