// Toggle Class Active
const navbarMenu = document.querySelector(".navbar-menu");
// Ketika hamburgermenu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

// klik di luar selain sidebar
const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});
