<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["contactName"]);
    $email = htmlspecialchars($_POST["contactEmail"]);
    $message = htmlspecialchars($_POST["contactMessage"]);

    // Example: Sending an email (you can modify it as needed)
    $to = "info@breakthroughtech.edu";
    $subject = "New Contact Form Submission";
    $headers = "From: " . $email;

    mail($to, $subject, $message, $headers);

    // Redirect back to contact page with success message
    header("Location: contact.html?success=true");
    exit();
}
?>
