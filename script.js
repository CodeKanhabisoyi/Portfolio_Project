var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}

// Get the button:
const scrollUpBtn = document.getElementById("scrollUpBtn");

// When the user scrolls down 20px from the top of the document, show the 
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
scrollUpBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Define the phrases for the typing animation
const phrases = ["Web Developer", "PHP Developer", "React JS Developer"];
let index = 0;
let letterIndex = 0;
let currentPhrase = "";

// Function to perform typing animation
function type() {
  if (letterIndex < phrases[index].length) {
    currentPhrase += phrases[index].charAt(letterIndex);
    document.getElementById("typingText").innerHTML = currentPhrase;
    letterIndex++;
    setTimeout(type, 100); // Adjust typing speed here (milliseconds)
  } else {
    setTimeout(erase, 1500); // Adjust pause before erasing (milliseconds)
  }
}

// Function to perform erasing animation
function erase() {
  if (currentPhrase.length > 0) {
    currentPhrase = currentPhrase.slice(0, -1);
    document.getElementById("typingText").innerHTML = currentPhrase;
    setTimeout(erase, 50); // Adjust erasing speed here (milliseconds)
  } else {
    index++;
    if (index >= phrases.length) {
      index = 0;
    }
    letterIndex = 0;
    setTimeout(type, 500); // Adjust pause before typing next phrase (milliseconds)
  }
}

// Start the typing animation
type();
