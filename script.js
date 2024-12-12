function sendMail() {
    // Get form inputs
    const form = document.querySelector("form");
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation logic
    if (!name || !email || !subject || !message) {
        alert("All fields are required. Please fill in the missing information.");
        return;
    }

    // Parameters for EmailJS
    let parms = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Send the email
    emailjs.send("service_mzzla3l", "template_fe8kgi2", parms)
        .then(() => {
            alert("Email Sent!");
            form.reset();
        })
        .catch((error) => {
            alert("Failed to send email. Please try again later.");
            console.error("EmailJS Error:", error);
        });
}
