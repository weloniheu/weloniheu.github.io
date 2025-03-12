// navbar.ts
async function loadNavbar() {
    try {
        const response = await fetch('navbar.html');
        const navbarHTML = await response.text();
        document.getElementById('navbar')!.innerHTML = navbarHTML;
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

// Run function after page loads
document.addEventListener('DOMContentLoaded', loadNavbar);
