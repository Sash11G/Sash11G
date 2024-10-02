document.addEventListener('DOMContentLoaded', function () {
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
  });
  