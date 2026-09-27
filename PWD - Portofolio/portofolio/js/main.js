// Typing Effect

const typingText = document.getElementById('typing-text');
if (typingText) {
    const names = ['Gendis Setyawan Putri', 'Graphic Designer'];
    let nameIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    function typeEffect() {
        const currentName = names[nameIndex];
        if (isDeleting) {
            typingText.textContent = currentName.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentName.substring(0, charIndex + 1);
            charIndex++;
        }
        let delay = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === currentName.length) {
            delay = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            nameIndex = (nameIndex + 1) % names.length;
            delay = 500;
        }
        setTimeout(typeEffect, delay);
    }
    typeEffect();
}
// Generate Project Cards
const projects = [
    {
        title: 'Social Media Design',
        desc: 'Visual content designed for social media',
        image: 'https://gendistudio.wordpress.com/wp-content/uploads/2026/09/sosmed-campaign.png'
    },
    {
        title: 'Instagram Feed Design',
        desc: 'Social media content design created for Instagram',
        image: 'https://gendistudio.wordpress.com/wp-content/uploads/2026/09/ig-feed.png'
    },
    {
        title: 'Event Promotion Design',
        desc: 'Visual designs created for events and promotional content',
        image: 'https://gendistudio.wordpress.com/wp-content/uploads/2026/09/event-promotion.png'
    }
];
const projectGrid = document.getElementById('project-grid');
if (projectGrid) {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
        `;
        // Click Event
        card.addEventListener('click', function() {
            document.getElementById('modal-image').src = project.image;
            document.getElementById('modal-title').textContent = project.title;
            document.getElementById('modal-description').textContent = project.desc;
            document.getElementById('project-modal').classList.add('show');
        });
        projectGrid.appendChild(card);
    });
}
// Project Modal
const projectModal = document.getElementById('project-modal');
const closeModal = document.getElementById('close-modal');
if (projectModal && closeModal) {
    closeModal.addEventListener('click', function() {
        projectModal.classList.remove('show');
    });
    projectModal.addEventListener('click', function(event) {
        if (event.target === projectModal) {
            projectModal.classList.remove('show');
        }
    });
}
// Smooth Scroll Navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Anchor Links
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
// Dark Mode
const darkModeBtn = document.getElementById('dark-mode-btn');
if (darkModeBtn) {
    // Check Saved Mode
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeBtn.textContent = '☀️';
    }
    darkModeBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeBtn.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeBtn.textContent = '🌙';
        }
    });
}
// Active Navigation Link
// Highlight Navigation Based on Current Page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

console.log('🚀 Website portofolio sudah siap!');