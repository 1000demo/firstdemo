// all components initialize here....

// Mobile Collapse Button
$('.sidenav').sidenav();

// Slider Initialization
  $('.slider').slider();

//
 $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });

// parallax effect 
$(document).ready(function(){
    $('.parallax').parallax();
  }); 

//scrollspy
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });


// fixed navbar bg clr chnage code
 $(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 5000) {
	    $(".go").css("background" , "#fff");
	  }

	  else{
		  $(".go").css("background" , "#4f80b3"); 	
		  $(".go ul li a").css("color" , "#fff");
	  }
  })
})

// scroll to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrolltoTopBtn").style.display = "block";
  } else {
    document.getElementById("scrolltoTopBtn").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// scroll to top button end here.....

