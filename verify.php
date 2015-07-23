<?php
if(isset($_POST['submitted'])) {
	// if($_POST['emailTo'] == '') {
	// 	$emailToError = 'You forgot to enter the email address to send to.';
	// } else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", $_POST['emailTo'])) {
	// 	$emailToError = 'Enter a valid email address to send to.';
	// }
	if($_POST['emailFrom'] == '') {
		$emailFromError = 'You forgot to enter the email address to send from.';
	} else if (!eregi("^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$", $_POST['emailFrom'])) {
		$emailFromError = 'Enter a valid email address to send from.';
	}

	if($_POST['subject'] == '') {
		$subjectError = 'You forgot to enter the subject.';
	}

	if($_POST['message'] == '') {
		$messageError = 'You forgot to enter the message.';
	}

	if(!isset($emailToError) && !isset($emailFromError) && !isset($subjectError) && !isset($messageError)) {
		include('sendEmail.php');
		include('thanks.php');
	}
}

?>
