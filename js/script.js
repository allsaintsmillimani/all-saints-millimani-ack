// ==============================
// MOBILE NAVIGATION
// ==============================

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("nav");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("active");

    });

}


// ==============================
// CLOSE MENU AFTER CLICKING LINK
// ==============================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("active");

    });

});


// ==============================
// CONTACT FORM
// ==============================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for contacting All Saints Millimani ACK. Your message has been received.");

        contactForm.reset();

    });

}


// ==============================
// PRAYER REQUEST FORM
// ==============================

const prayerForm = document.querySelector(".prayer-form form");

if (prayerForm) {

    prayerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you for sharing your prayer request. We will stand with you in prayer.");

        prayerForm.reset();

    });

}