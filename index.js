const navBtn = document.getElementById("navBtn");
const sections=document.querySelectorAll(".section")

const menuBtn = document.getElementById("menuBtn")

menuBtn.addEventListener("click", function(){
   navBtn.classList.toggle("active");
   // sections.forEach(function(section) {
   //    section.classList.toggle("focused");})
   body.classList.toggle("focused")

})


