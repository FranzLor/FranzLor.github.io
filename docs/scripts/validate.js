// Form submission handler
window.sendMail = function() {
    // Initialize EmailJS
    if (typeof emailjs !== 'undefined') {
        emailjs.init({
            publicKey: "efeGP1KAJQXu_2iXz"
        });
    } else {
        console.error('EmailJS not loaded');
    }

    // Get form inputs
    const form = document.querySelector("form");
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation logic
    if (!name || !email || !subject || !message) {
        alert("All fields are required. Please fill in the missing information.");
        return false;
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
            // Reset button state after successful send
            const button = document.getElementById('button');
            if (button) {
                button.classList.remove('validate');
            }
        })
        .catch((error) => {
            alert("Failed to send email. Please try again later.");
            console.error("EmailJS Error:", error);
            // Reset button state on error
            const button = document.getElementById('button');
            if (button) {
                button.classList.remove('onclic', 'validate');
            }
        });

    return false;
};