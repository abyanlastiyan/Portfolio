// Custom JavaScript for Contact Form and GPA Fix
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Handler
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
            const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
            const message = contactForm.querySelector('textarea[placeholder="Message"]').value;
            
            // Validate
            if (!email || !subject || !message) {
                alert('Mohon isi semua field yang diperlukan!');
                return;
            }
            
            // Create mailto link
            const mailtoLink = `mailto:lastiyanabyan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('From: ' + email + '\n\n' + message)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show success message
            setTimeout(function() {
                alert('Email client Anda telah dibuka. Silakan kirim email dari aplikasi email Anda.');
                
                // Reset form
                contactForm.reset();
            }, 500);
        });
    }
    
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // PERBAIKAN: FIX GPA Counter - ukuran font SAMA untuk 3.71
    function fixGPADisplay() {
        const gpaCounter = document.querySelector('#section-counter .col-md:last-child .number');
        if (gpaCounter) {
            // Force display 3.71 dengan ukuran font yang sama
            gpaCounter.textContent = '3.71';
            gpaCounter.style.fontSize = '50px';
            gpaCounter.style.fontWeight = '700';
        }
    }
    
    // Call immediately
    fixGPADisplay();
    
    // Call after 100ms
    setTimeout(fixGPADisplay, 100);
    
    // Call after counter animation (2 seconds)
    setTimeout(fixGPADisplay, 2000);
    
    // Call after 3 seconds to ensure it's fixed
    setTimeout(fixGPADisplay, 3000);
    
    // Also fix on window load
    window.addEventListener('load', function() {
        setTimeout(fixGPADisplay, 500);
        setTimeout(fixGPADisplay, 1500);
        setTimeout(fixGPADisplay, 2500);
    });
    
    // Use MutationObserver to watch for changes to GPA counter
    const gpaCounter = document.querySelector('#section-counter .col-md:last-child .number');
    if (gpaCounter) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    const currentText = gpaCounter.textContent.trim();
                    if (currentText !== '3.71') {
                        gpaCounter.textContent = '3.71';
                        gpaCounter.style.fontSize = '50px';
                        gpaCounter.style.fontWeight = '700';
                    }
                }
            });
        });
        
        observer.observe(gpaCounter, {
            childList: true,
            characterData: true,
            subtree: true
        });
    }
});
