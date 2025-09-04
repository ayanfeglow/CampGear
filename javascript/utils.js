const menuToggler = document.getElementById("menu-toggler");
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuToggler.checked = false;
  });
});