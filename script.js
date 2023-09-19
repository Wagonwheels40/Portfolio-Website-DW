const sentence = "Hi there, I'm Daniel.";
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
  $('#resume-modal').modal('show'); 
  overlay.classList.add("active"); 
  document.body.classList.add("modal-open");
}

function closeModal() {
  $('#resume-modal').modal('hide'); 
  overlay.classList.remove("active"); 
  document.body.classList.remove("modal-open");
}

typeOutSentence(sentence);
