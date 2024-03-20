// Select the container and button elements
const container = document.querySelector('.container');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const elements = document.getElementsByClassName("child");
let numb = elements.length;

// Get the number of child elements in the container
// const numChildren = container.children.length;
// Initialize the current index of the visible child element
let currentIndex = 0;

// Update the '--n' CSS variable on the container
container.style.setProperty('--n', numb);

// Function to go to the next slide
function nextSlide() {
  // Increment the currentIndex and ensure it doesn't exceed numChildren
  currentIndex = (currentIndex + 1) % numb;
  // Update the '--i' CSS variable to change the slide
  container.style.setProperty('--i', currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
  // Decrement the currentIndex and ensure it wraps around correctly
  currentIndex = (currentIndex - 1 + numb) % numb;
  // Update the '--i' CSS variable to change the slide
  container.style.setProperty('--i', currentIndex);
}

// Add click event listeners to the buttons
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// To disable scrolling
window.addEventListener('scroll', preventScroll, { passive: false });

function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
}

// To re-enable scrolling
// window.removeEventListener('scroll', preventScroll);
