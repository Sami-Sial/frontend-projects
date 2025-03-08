// toggling menu
const toggleBtn = document.querySelector("#menu-toggler");
const menuList = document.querySelector("#menu-list");

toggleBtn.addEventListener("click", () => {
     menuList.classList.toggle("active");
})

// // close menu icon functionality
let closeMenuBtn = document.querySelector("#close-menu");
closeMenuBtn.addEventListener("click", () => {
     menuList.classList.remove("active");
})


// scroll to top btn
let btn = document.querySelector("#scroll-to-top");
btn.addEventListener("click", () => {
     window.scrollTo({
          top: 0,
          behavior: "smooth"
     })
})


// herosection slider
   // Accessing Elements
   let slideImg = document.querySelector(".slider-images");
   let prevBtn = document.querySelector(".prev-btn");
   let nextBtn = document.querySelector(".next-btn");
   let imgIdx = 0;

   // next Button Functionality
   nextBtn.addEventListener("click", () => {
      if(imgIdx == slideImg.children.length-1){
           imgIdx = 0;
           slideImg.style.transform = "translate(0)";
      } else {
           imgIdx++;
           slideImg.style.transform = `translate(-${imgIdx*100}%)`;
      } 
      console.log(imgIdx);
   })
   
   // Previous Button Functionality
   prevBtn.addEventListener("click", () => {
       if(imgIdx == 0){
           imgIdx+=3;
           slideImg.style.transform = "translate(-300%)";
       } else {
           imgIdx--;
           slideImg.style.transform = `translate(-${imgIdx*100}%)`;
       } 
       console.log(imgIdx);
   })

   // Sliding Transition
   slideImg.style.transition = "transform 0.5s ease-in-out";
