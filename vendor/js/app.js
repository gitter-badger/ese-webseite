// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).ready(function(){
    /**
     * Initialize Foundation JS
     */
    $(document).foundation();
    
    /**
     * Initialize Slick Slider
     */
    $('.slider').slick({
        lazyLoad: 'ondemand',
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        slidesToShow: 1,
        // Disable navigation arrows
        arrows: false
    });
    
    /**
     * Test if a SE Bot tries to look at the site
     * This is only for the development site gh-pages
     */
    if(/bot|googlebot|crawler|spider|robot|crawling/i.test(window.navigator.userAgent)) {
	    $('html').removeAttr("class");
	    $('html').addClass("crawler");
	    window.location.replace("https://ese.ifsr.de");
    }
    
    /**
     * Developer Preview Message Reveal
     */
    if(!$( "html" ).hasClass( "crawler" )) {
    	$('#developer-preview-message').foundation('reveal', 'open');
    }
    
    $("#developer-preview-message-close").on('click', function() {
  		$('#developer-preview-message').foundation('reveal', 'close');
		});

});