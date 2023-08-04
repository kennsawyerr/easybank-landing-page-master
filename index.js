const navBtn = document.getElementById("navBtn");


const menuBtn = document.getElementById("menuBtn")

menuBtn.addEventListener("click", function(){
   navBtn.classList.toggle("active");
   navBtn.classList.toggle("focused");

})