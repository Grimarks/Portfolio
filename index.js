// Highlight section hover with smooth animation
document.querySelectorAll('section').forEach((section) => {
    section.addEventListener('mouseover', () => {
        section.style.transform = "translateY(-10px)";
    });

    section.addEventListener('mouseout', () => {
        section.style.transform = "translateY(0)";
    });
});

// Dynamic greeting based on time
document.addEventListener('DOMContentLoaded', () => {
    const nameElement = document.getElementById('name');
    const hours = new Date().getHours();
    const greeting =
        hours < 12 ? "Good morning" :
            hours < 18 ? "Good afternoon" : "Good evening";

    if (nameElement) {
        nameElement.innerText = `${greeting}, I’m Darrell Satriano.`;
    }
});
