const sentence = "I'm Daniel, and I'm a 28 year old front-end developer.";
const typingEffect = document.getElementById("typing-effect");
const modal = document.getElementById("resume-modal");
const openModalButton = document.getElementById("open-modal-btn");
const dropdownButtons = document.getElementsByClassName("dropdown-btn");

function typeOutSentence(sentence) {
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < sentence.length) {
      typingEffect.textContent += sentence.charAt(i);
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, 60);
}

function openModal() {
  $('#resume-modal').modal('show'); // Use Bootstrap's modal show method
  overlay.classList.add("active"); // Add the 'active' class to the overlay
  document.body.classList.add("modal-open");
}

function closeModal() {
  $('#resume-modal').modal('hide'); // Use Bootstrap's modal hide method
  overlay.classList.remove("active"); // Remove the 'active' class from the overlay
  document.body.classList.remove("modal-open");
}

typeOutSentence(sentence);
