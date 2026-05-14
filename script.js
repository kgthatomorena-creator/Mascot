// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 90;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Booking Form Handler
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = bookingForm.querySelector('input[name="name"]').value;
        const phone = bookingForm.querySelector('input[name="phone"]').value;
        const package = bookingForm.querySelector('select[name="package"]').value;
        const mascot = bookingForm.querySelector('select[name="mascot"]').value;
        const details = bookingForm.querySelector('textarea[name="details"]').value;
        
        const whatsappMessage = `Hi Dancing Mascots SA!%0A%0A` +
            `📋 BOOKING REQUEST%0A%0A` +
            `Name: ${encodeURIComponent(name)}%0A` +
            `Phone: ${encodeURIComponent(phone)}%0A` +
            `Package: ${encodeURIComponent(package)}%0A` +
            `Mascot: ${encodeURIComponent(mascot)}%0A` +
            `Details: ${encodeURIComponent(details || 'None')}`;
        
        window.open(`https://wa.me/27627541766?text=${whatsappMessage}`, '_blank');
        bookingForm.reset();
        alert('Opening WhatsApp... Please send your booking!');
    });
}

// Video Background - Mobile Optimization
const videoBg = document.getElementById('videoBg');
if (videoBg) {
    // Force play on load
    videoBg.play().catch(err => {
        console.log('Video autoplay prevented:', err);
    });
    
    // Retry play on user interaction (mobile fix)
    document.addEventListener('touchstart', () => {
        if (videoBg.paused) {
            videoBg.play();
        }
    }, { once: true });
    
    document.addEventListener('click', () => {
        if (videoBg.paused) {
            videoBg.play();
        }
    }, { once: true });
}

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.mascot-card, .price-card, .video-item, .requirement').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

// Add bounce animation to mascot cards
document.querySelectorAll('.mascot-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'bounce 0.5s ease';
    });
    
    card.addEventListener('animationend', () => {
        card.style.animation = '';
    });
});

// Add CSS for bounce animation
const style = document.createElement('style');
style.textContent = `
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        25% { transform: translateY(-10px); }
        50% { transform: translateY(0); }
        75% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);

console.log('🎭 Dancing Mascots SA - Make Every Event Unforgettable! 🎉');
