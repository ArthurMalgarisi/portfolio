
const textElem = document.getElementById("typed-text")
const skillArray = ['Front-End','Power BI','UI-UX']
let currentIndex = 0;
const animationSpeed = 2000;

const typeWriter = () => {
    const currentText = skillArray[currentIndex];
    textElem.textContent = currentText

    currentIndex = (currentIndex + 1) % skillArray.length;

    setTimeout(typeWriter,animationSpeed)
}

typeWriter()

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}