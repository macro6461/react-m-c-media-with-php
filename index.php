<?php

if($_POST){
    $name = $_POST['form_name'];
    $email = $_POST['form_email'];
    $message = $_POST['form_msg'];

//send email
    mail("mattcroak718@gmail.com", "This is an email from:" .$email, $message);
}
?>

<!-- if(isset($_POST['submit'])) {
  exit();
}

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions

try {
    //Server settings
    $contact_email = $_POST['email'];
    $contact_first_name = $_POST['firstname'];
    $contact_last_name = $_POST['lastname'];
    $contact_phone = $_POST['phone'];
    $contact_message = $_POST['inquery-message']

    exit();

  $mail->IsSMTP(); // telling the class to use SMTP
  $mail->Host = "smtp.gmail.com"; // SMTP server
  $mail->SMTPDebug = 3;                     // enables SMTP debug information (for testing) // 1 = errors and messages // 2 = messages only
  $mail->SMTPSecure = 'tls';
  $mail->SMTPAuth = true;                  // enable SMTP authentication
  $mail->Port = 587; // set the SMTP port for the GMAIL server
  $mail->SMTPAuth = true;
  $mail->Username = "mattcroak718@gmail.com";  // SMTP account username
  $mail->Password = "Bandit1234#";        // SMTP account password         // TCP port to connect to

    //Recipients
    $mail->FromName = $contact_first_name . $contact_last_name;
    $mail->setFrom($contact_email);
    $mail->addAddress('mattcroak718@gmail.com');     // Add a recipient
    $mail->addCC($contact_email);

    $mail->smtpConnect(
    array(
        "ssl" => array(
            "verify_peer" => false,
            "verify_peer_name" => false,
            "allow_self_signed" => true
        )
    )
);

    // //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    $html = <<<STARTEMAIL

  <html>
      <body>
      <p style="margin: auto;">Hi Matt,</p><br>
      <p style="margin: auto;">$mail->FromName is interested in doing business!</p><br>
      <p style="margin: auto;">$contact_message </p><br>
      </body>
  </html>

STARTEMAIL;

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    if(!$mail->send()){
      echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
      echo "Message has been sent successfully";
    } -->
