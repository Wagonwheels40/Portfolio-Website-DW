const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Perform form validation
    if (!validateForm()) {
      return;
    }

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform form submission (replace with your own code)
    submitForm(name, email, message);

    // Reset the form after submission
    form.reset();
  });

  function validateForm() {
    // Add your form validation logic here
    // Return true if the form is valid, otherwise return false
    return true;
  }

  function submitForm(name, email, message) {
    // Add your form submission logic here
    // You can use AJAX or any other method to submit the form data to your server
    console.log(`Form submitted:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  }
