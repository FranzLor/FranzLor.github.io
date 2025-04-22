document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button');
    const form = document.querySelector('form');

    if (button && form) {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            if (form.checkValidity()) {
                // Start animation
                button.classList.add('onclic');

                setTimeout(() => {
                    button.classList.remove('onclic');
                    button.classList.add('validate');

                    setTimeout(() => {
                        // Submit the form after animation completes
                        form.dispatchEvent(new Event('submit'));
                    }, 1250);
                }, 2250);
            } else {
                // Focus first invalid field
                form.querySelector(':invalid').focus();
            }
        });
    }
});