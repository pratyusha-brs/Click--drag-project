const slider =document.querySelector(".items");
// init variables
let isDown=false;
let startX;
let scrollLeft;
//default theme
const defaultTheme="#1A4B84";
slider. addEventListener("mousedown",(e)=>{
    isDown= true;
    slider.classList.add("active");
    startX= e.pageX - slider.offsetLeft ;
    console.log("Start X is" +startX);
    scrollLeft = slider.scrollLeft;
    console.log("Scroll Left is"+scrollLeft);
});
slider.addEventListener("mouseleave",()=>{
    isDown= false;
    slider.classList.remove("active")
});
slider.addEventListener("mouseup",()=>{
    isDown= false;
    slider.classList.remove("active");
});
 slider.addEventListener("mousemove",(e)=>{
    if(!isDown) return;//stop the function to move
    e.preventDefault();
    //gived the x-coordinate of the mouse pointer
    const x=e.pagex-slider.offsetLeft;
    //calculate the horizontal distance 
    //multiplied by 3 to control the speed of scrolling.
    const walk= (x - startX)/10 *3;
    slider.scrollLeft= scrollLeft-walk;
 });
 // Set the Theme
function setTheme(theme) {
    document.documentElement.style.setProperty("--primary-color", theme);
    localStorage.setItem("movie-theme", theme);
  }
  setTheme(localStorage.getItem("movie-theme") || chathams_blue);