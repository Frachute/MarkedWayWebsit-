// Select all internal anchor links that start with '#'
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default link behavior
  
      // Scroll smoothly to the target section
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Carousel functionality
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
  images[currentImageIndex].style.display = 'none';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.display = 'block';
}

// Change image every 3 seconds
setInterval(showNextImage, 3000);


// Form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      e.preventDefault(); // Stop form submission
    }
  });
  
  