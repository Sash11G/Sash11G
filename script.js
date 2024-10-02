document.addEventListener('DOMContentLoaded', function () {

  // Form submission handling
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
      return;
    }

    // Email format validation (basic)
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Submit the form if validation passes
    form.submit();

    // Clear form fields after submission
    form.reset();
  });

  // Function to validate email format using regex
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Burger menu toggle functionality
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar a'); // Get all links in the navbar

  // Toggle navbar when the burger icon is clicked
  menuIcon.addEventListener('click', function () {
    // Toggle the "show" class to open/close the navbar
    navbar.classList.toggle('show');

    // Toggle between burger icon and "X"
    if (navbar.classList.contains('show')) {
      menuIcon.classList.remove('bx-menu');
      menuIcon.classList.add('bx-x');
    } else {
      menuIcon.classList.remove('bx-x');
      menuIcon.classList.add('bx-menu');
    }
  });

  // Close navbar when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navbar.classList.remove('show'); // Remove 'show' class to hide navbar

      // Change the "X" back to the burger icon
      menuIcon.classList.remove('bx-x');
      menuIcon.classList.add('bx-menu');
    });
  });

});
