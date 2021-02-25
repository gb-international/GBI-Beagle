
(function( $ ){

	/* ----------------------------------------------------------- */
	/*  1. MAIN SLIDER
	/* ----------------------------------------------------------- */

	

	
	/* ----------------------------------------------------------- */
	/*  2. VIDEO POPUP
	/* ----------------------------------------------------------- */

   $('.video-play-btn').on('click', function(event) {
	   
        event.preventDefault();
        
        $('.video-iframe-area').addClass('video-iframe-display');
       
    });
   
    // when click the close btn

    // disappear iframe window
    
    $('.video-close-btn').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.video-iframe-area').removeClass('video-iframe-display');
		
    });

    // stop iframe if it is play while close the iframe window

    $('.video-close-btn').click(function(){

        $('.video-iframe').attr('src', $('.video-iframe').attr('src'));

    });

    // when click overlay area

     $('.video-iframe-area').on('click', function(event) {
	    
	    event.preventDefault();
	    
		$('.video-iframe-area').removeClass('video-iframe-display');
		
    });

	$('.video-iframe-area, .video-iframe').on('click', function(e){
	    e.stopPropagation();
	});


   	/* ----------------------------------------------------------- */
	/*  3. TESTIMONIALS (SLICK SLIDER)
	/* ----------------------------------------------------------- */

		$('.testimonial-slide').slick({
			arrows: true,
			dots: false,
			infinite: true,
			speed: 500,
			autoplay: true,
			cssEase: 'linear'
		});

	/* ----------------------------------------------------------- */
  	/*  4. SCROLL TOP BUTTON
  	/* ----------------------------------------------------------- */

	  //Check to see if the window is top if not then display button

	    jQuery(window).scroll(function(){
	      if (jQuery(this).scrollTop() > 300) {
	        jQuery('.scrollToTop').fadeIn();
	      } else {
	        jQuery('.scrollToTop').fadeOut();
	      }
	    });
	     
	    //Click event to scroll to top

	    jQuery('.scrollToTop').click(function(){
	      jQuery('html, body').animate({scrollTop : 0},800);
	      return false;
	    });
	 
		
	/* ----------------------------------------------------------- */
	/*  5. CLIENTS SLIDEER ( SLICK SLIDER )
	/* ----------------------------------------------------------- */

		$('.clients-slider').slick({
		  slidesToShow: 5,
		  arrows: false,
		  autoplay: true,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        slidesToShow: 3
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        slidesToShow: 2
		      }
		    }
		  ]
		});

	
	

	
	
})( jQuery );


  /* ----------------------------------------------------------- */
	/*  7.  ( Side Menu Header )
	/* ----------------------------------------------------------- */
var slide_wrp = ".side-menu-wrapper"; //Menu Wrapper
  var open_button = ".menu-open"; //Menu Open Button
  var close_button = ".menu-close"; //Menu Close Button
  var overlay = ".menu-overlay"; //Overlay

$(slide_wrp).hide().css( {"right": -$(slide_wrp).outerWidth()+'px'}).delay(50).queue(function(){$(slide_wrp).show()}); 

$(open_button).click(function(e){
  e.preventDefault();
  $(slide_wrp).css( {"right": "0px"});
  setTimeout(function(){
    $(slide_wrp).addClass('active');
  },50);
  $(overlay).css({"opacity":"1", "width":"100%"});
});

$(close_button).click(function(e){
  e.preventDefault();
  $(slide_wrp).css( {"right": -$(slide_wrp).outerWidth()+'px'});
  setTimeout(function(){
    $(slide_wrp).removeClass('active');
  },50);
  $(overlay).css({"opacity":"0", "width":"0"});
});

$(document).on('click', function(e) {
  if (!e.target.closest(slide_wrp) && $(slide_wrp).hasClass("active")){
    $(slide_wrp).css( {"right": -$(slide_wrp).outerWidth()+'px'}).removeClass('active');
    $(overlay).css({"opacity":"0", "width":"0"});
  }
});

