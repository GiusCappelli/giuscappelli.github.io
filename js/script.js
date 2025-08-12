// Dark mode toggle function
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const toggle = document.querySelector('.dark-mode-toggle');
    
    if (document.body.classList.contains('dark-mode')) {
        toggle.textContent = '☀️';
        // Save preference to localStorage (if you want persistence)
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggle.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Load dark mode preference on page load
document.addEventListener('DOMContentLoaded', function() {
    const darkMode = localStorage.getItem('darkMode');
    const toggle = document.querySelector('.dark-mode-toggle');
    
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        if (toggle) toggle.textContent = '☀️';
    } else {
        if (toggle) toggle.textContent = '🌙';
    }
});
