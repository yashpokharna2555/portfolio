function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.timeline-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => {
        observer.observe(item);
    });
});

function filterProjects(category) {
    var projects = document.querySelectorAll('.project');
    projects.forEach(function (project) {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none';
        }
    });

    var buttons = document.querySelectorAll('.filters button');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    event.target.classList.add('active');
}
