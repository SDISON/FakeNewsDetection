var slideIndex = 0;
carousel();

function carousel() {
  var cars = ["g10.gif","g4.gif", "g14.gif", "g12.gif","g8.gif","g3.gif","g6.gif"];

  var y = document.getElementById("disp");
  slideIndex++;
  if (slideIndex > cars.length) {slideIndex = 1}
  
  y.src= url + cars[slideIndex-1];
  
  setTimeout(carousel, 7000); // Change image every 2 seconds
}
