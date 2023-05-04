    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents the default form submission behaviour

    // Get form values
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;

    // Create a new FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Send the form data using fetch
    fetch('https://formsubmit.co/ajax/#', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            form.reset(); // Resets the form fields
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .catch(error => alert(`Error: ${error.message}`));
});