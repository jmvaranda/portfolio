<?php

//$mailTo = $_POST['emailTo'];
$mailTo = 'littlegreenmendesign@gmail.com';
$mailFrom = $_POST['emailFrom'];
$subject = $_POST['subject'];
$message = $_POST['message'];


mail($mailTo, $subject, $message, "From: ".$mailFrom);
?>
