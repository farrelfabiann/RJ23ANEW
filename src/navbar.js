document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("navbar-container");
  if (!container) return;
  var isContactPage = /(^|\/)contact\.html(\?|#|$)/i.test(window.location.pathname) || document.body.id === "contact-page";
  var partial = isContactPage ? "partials/navbar_contact.html" : "partials/navbar.html";
  fetch(partial)
    .then(function (res) { return res.text(); })
    .then(function (html) {
      container.innerHTML = html;
    })
    .catch(function (err) { console.error("Failed to load navbar:", err); });
});


