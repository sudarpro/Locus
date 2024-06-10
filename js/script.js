document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("signupModal");
  const btn = document.querySelector(".nav_button_sign");
  const span = document.querySelector(".modal .close");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
