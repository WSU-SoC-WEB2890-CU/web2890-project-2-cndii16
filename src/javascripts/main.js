import "bootstrap";

//Notes for submission.
//I am still learning how to use EmailJS, so for now its not working. Right now, its giving an error to the user until i can understand how to configure it!
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("bB5jg5PRoDGxv93n5"); 
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const serviceID = "service_c5hta48"; 
        const templateID = "template_c5hta48";

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        emailjs.send(serviceID, templateID, {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        })
        .then(response => {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        })
        .catch(error => {
            console.error("Error sending message:", error);
            alert("Failed to send message.");
        });
    });
});

//blog
document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll(".text-muted[data-date]");

    posts.forEach(post => {
        const postDate = new Date(post.getAttribute("data-date"));
        const today = new Date();
        const timeDiff = today - postDate;
        const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        post.innerHTML += `, ${daysAgo} days ago`;
    });
});