<?php

// error_reporting(E_ALL);
// ini_set('display_errors', '1');
//check to see if an e-mail was sent, also check to see if it is an ajax request, otherwise return a 404 error

$email = $_POST['email'];

require('sendyLibrary.php');

$sendy = new SendyLibrary('wVoR37HnUNovS8YfwJHUpQ');

$results = $sendy->subscribe(array('email' => $email));

echo json_encode($results);

?>