

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please complete all fields.");
            return;
        }

        document.getElementById("contactResponse").textContent =
            "Thank you, " + name +
            "! Your message has been prepared successfully.";

        contactForm.reset();
    });
}




const rescueForm = document.getElementById("rescueForm");

if (rescueForm) {
    rescueForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const reporter =
            document.getElementById("reporter").value.trim();

        const animal =
            document.getElementById("animal").value;

        const condition =
            document.getElementById("condition").value;

        const location =
            document.getElementById("location").value.trim();

        const details =
            document.getElementById("details").value.trim();

        if (!reporter || !animal || !condition ||
            !location || !details) {
            alert("Please complete all required fields.");
            return;
        }

        document.getElementById("rescueResponse").textContent =
            "Thank you, " + reporter +
            ". Your rescue report has been prepared. " +
            "Please contact the rescue team directly to arrange assistance.";

        rescueForm.reset();
    });
}




document.querySelectorAll("footer p").forEach(function(footer) {
    footer.innerHTML =
        "&copy; " + new Date().getFullYear() +
        " Happy Paws Animal Rescue. All Rights Reserved.";
});
