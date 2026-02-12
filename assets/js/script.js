document.addEventListener('DOMContentLoaded', function () {

    var STUDENT_ID = '2300401';
    var STUDENT_PASS = 'jeysi123';
    var FACULTY_USER = 'jaycee';
    var FACULTY_PASS = 'faculty123';

    // --- Toast Helpers ---
    function showToast(toastEl) {
        toastEl.classList.add('show');
        // Auto-hide after 3 seconds (matches progress bar animation)
        setTimeout(function () {
            hideToast(toastEl);
        }, 3000);
    }

    function hideToast(toastEl) {
        toastEl.classList.remove('show');
    }

    // --- Close buttons (vanilla JS, replaces jQuery onclick) ---
    var loginToast = document.getElementById('loginToast');
    var errorToast = document.getElementById('errorToast');

    document.querySelectorAll('.toast-close').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var toast = btn.closest('.toast');
            if (toast) hideToast(toast);
        });
    });

    // --- Detect which page we are on ---
    var studentIdInput = document.getElementById('studentId');
    var facultyUsernameInput = document.getElementById('facultyUsername');

    // --- Student Login ---
    if (studentIdInput) {
        var form = studentIdInput.closest('form');
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var id = document.getElementById('studentId').value.trim();
            var pass = document.getElementById('password').value;

            if (id === STUDENT_ID && pass === STUDENT_PASS) {
                // Success
                loginToast.querySelector('.toast-message').textContent = 'Login successful! Welcome, Student.';
                showToast(loginToast);
            } else {
                // Error
                errorToast.querySelector('.toast-message').textContent = 'Invalid Student ID or Password.';
                showToast(errorToast);
            }
        });
    }

    // --- Faculty Login ---
    if (facultyUsernameInput) {
        var form = facultyUsernameInput.closest('form');
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var username = document.getElementById('facultyUsername').value.trim();
            var pass = document.getElementById('facultyPassword').value;

            if (username === FACULTY_USER && pass === FACULTY_PASS) {
                // Success
                loginToast.querySelector('.toast-message').textContent = 'Login successful! Welcome, Faculty.';
                showToast(loginToast);
            } else {
                // Error
                errorToast.querySelector('.toast-message').textContent = 'Invalid Faculty Username or Password.';
                showToast(errorToast);
            }
        });
    }

});
