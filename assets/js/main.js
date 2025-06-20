/*==================== MENU SHOW Y HIDDEN ====================*/
const  navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close';
    }

    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open';
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        });

        target.classList.add('qualification__active');

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

// Add: Also allow clicking the entire .services__content to open the modal
const serviceContents = document.querySelectorAll('.services__content');
serviceContents.forEach((serviceContent, i) => {
    serviceContent.addEventListener('click', function(e) {
        // Prevent double opening if the button is clicked (since it bubbles up)
        if (e.target.closest('.services__button')) return;
        // Open the modal corresponding to this service
        modal(i);
    });
});

console.log('Modal elements found:', {
    modals: modalViews.length,
    buttons: modalBtns.length,
    closeButtons: modalCloses.length
}); // Debug

let modal = function (modalClick) {
    // Fermer tous les modals avant d'en ouvrir un nouveau
    modalViews.forEach((modalView) => {
        modalView.classList.remove('active-modal');
    });
    // Ouvrir le modal demandé
    if (modalViews[modalClick]) {
        modalViews[modalClick].classList.add('active-modal');
        console.log('Modal classes:', modalViews[modalClick].className); // Debug
    } else {
        console.error('Modal not found at index:', modalClick);
    }
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Ajout pour empêcher le comportement par défaut
        e.stopPropagation();
        console.log('Button clicked:', i); // Debug
        modal(i);
    });
});

modalCloses.forEach((modalClose, index) => {
    modalClose.addEventListener('click', () => {
        console.log('Close button clicked for modal:', index); // Debug
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

modalViews.forEach((modalView, index) => {
    modalView.addEventListener('click', (event) => {
        if (!event.target.closest('.services__modal-content')) {
            console.log('Clicked outside modal content:', index); // Debug
            modalView.classList.remove('active-modal');
        }
    });
});

// Fermer le modal quand on clique sur le bouton "Schedule Now" à l'intérieur du modal
document.querySelectorAll('.services__modal-content a.button').forEach(btn => {
    btn.addEventListener('click', function() {
        // Trouver le parent modal et le fermer
        let modal = this.closest('.services__modal');
        if (modal) {
            modal.classList.remove('active-modal');
        }
    });
});


/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
    cssMode: false, // Désactiver cssMode pour avoir de vraies transitions
    loop: true,
    speed: 600,
    spaceBetween: 30,
    grabCursor: true,
    
    // Navigation
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
    // Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    
    // Autoplay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    
    // Effet de transition
    effect: 'slide', // Effet de glissement classique
    
    // Pour mobile
    breakpoints: {
        568: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 48,
        },
    }
});


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const nav = document.getElementById('header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


/*==================== SHOW SCROLL UP ====================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== UMAMI CUSTOM TRACKING ====================*/
// Track important button clicks (Book an appointment, Get in touch)
document.querySelectorAll('a.button--flex').forEach(btn => {
    btn.addEventListener('click', function() {
        // Identify booking or contact buttons by href
        const href = btn.getAttribute('href') || '';
        let eventName = '';
        if (href.includes('calendar.google.com')) {
            eventName = 'booking_button_click';
        } else if (href.includes('mailto:') || href.includes('#contact') || btn.textContent.toLowerCase().includes('get in touch')) {
            eventName = 'contact_button_click';
        }
        if (eventName && typeof window.umami === 'function') {
            window.umami(eventName, { href, text: btn.textContent.trim(), location: window.location.pathname });
        }
    });
});

// Track section view and time spent
(function() {
    if (typeof window.IntersectionObserver !== 'function') return;
    const sectionTimes = {};
    const enterTimes = {};
    document.querySelectorAll('section[id]').forEach(section => {
        const sectionId = section.id;
        sectionTimes[sectionId] = 0;
        enterTimes[sectionId] = null;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    enterTimes[sectionId] = Date.now();
                } else if (enterTimes[sectionId]) {
                    const timeSpent = (Date.now() - enterTimes[sectionId]) / 1000;
                    sectionTimes[sectionId] += timeSpent;
                    if (typeof window.umami === 'function') {
                        window.umami('section_view', { section: sectionId, time_spent: timeSpent, location: window.location.pathname });
                    }
                    enterTimes[sectionId] = null;
                }
            });
        }, { threshold: 0.5 });
        observer.observe(section);
    });
    // Optionally, send time spent on all sections when user leaves the page
    window.addEventListener('beforeunload', function() {
        Object.keys(sectionTimes).forEach(sectionId => {
            if (sectionTimes[sectionId] > 0 && typeof window.umami === 'function') {
                window.umami('section_total_time', { section: sectionId, total_time: sectionTimes[sectionId], location: window.location.pathname });
            }
        });
    });
})();