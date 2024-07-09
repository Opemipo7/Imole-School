// Form validation
document.getElementById('admission-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;

    if (name === '' || email === '' || phone === '' || dob === '') {
        alert('Please fill in all required fields.');
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});


