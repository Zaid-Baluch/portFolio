// Contact form handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText =
    "✅ Your message has been sent!";
  this.reset();
});
