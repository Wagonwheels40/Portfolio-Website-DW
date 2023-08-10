const form = document.querySelector('#contact-form');
const button = form.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    sendData(); 
})

function sendData() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');

    if (name.trim === '') {
        alert('Please enter your name.');
        return;
    }

    if (email.trim === '') {
        alert('Please enter your email address.');
        return;
    }

    if (message.trim === '') {
        alert('Please type your message.');
        return;
    }

    const mailtoURL = `mailto:wagonwheels40@tutanota.com?subject=Message from ${name}&body=${message}`;
    window.location.href = mailtoUrl;

    form.reset();
};
