const navBtn = document.getElementById("navBtn");
const sections = document.querySelectorAll(".section")

const overlay = document.querySelector(".overlay")
const menuBtn = document.getElementById("menuBtn")

menuBtn.addEventListener("click", function () {
   navBtn.classList.toggle("active");
   overlay.style.visibility = "visible";
})

window.addEventListener("click", function (event) {
   if (event.target != menuBtn) {
      navBtn.classList.remove("active");
      overlay.style.visibility = "hidden";

   }

})