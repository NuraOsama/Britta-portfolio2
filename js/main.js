(function ($) { 
    "use strict";
    
    var  mainStatus  = $('#status'),
    mainBody = $('body'),
    mainPreloader  = $('#preloader');

    window.onload = function() {
     mainStatus.fadeOut();
     mainPreloader.delay(500).fadeOut('slow');
     mainBody.delay(500).css({
         'overflow': 'visible'
     });
    }

//sticky nav bar
$(document).ready(function () {
  
    var $sticky = $('.sticky');
    var stickyOffsetTop = $sticky.offset().top;
  
    $(window).scroll(function (e) {
        e.preventDefault();
  
        var scrollTop = $(window).scrollTop();
  
        if (scrollTop > stickyOffsetTop) {
            $sticky.addClass('is-fixed');
        } else {
            $sticky.removeClass('is-fixed');
        }
    });
  });

 //scroll
 $(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 100;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  }) 
})

  //water ripple effect
  $(document).ready(function() {
		$('.bk_image').ripples({
			resolution: 256,
			perturbance: 0.04
		});
  
});

//wow  .js
new WOW().init();


//counter
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 30000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
  });


  //mixitup
$('#portfolio').mixItUp();

$(".po_1").click(function(){

  $(this).addClass("active");
  $(".po_2").removeClass("active");
  $(".po_3").removeClass("active");
  $(".po_4").removeClass("active");
  $(".po_5").removeClass("active");
  
});

$(".po_2").click(function(){
  $(this).addClass("active");
  $(".po_1").removeClass("active");
  $(".po_3").removeClass("active");
  $(".po_4").removeClass("active");
  $(".po_5").removeClass("active");

});

$(".po_3").click(function(){

  $(this).addClass("active");
  $(".po_1").removeClass("active");
  $(".po_2").removeClass("active");
  $(".po_4").removeClass("active");
  $(".po_5").removeClass("active");
});

$(".po_4").click(function(){

  $(this).addClass("active");
  $(".po_1").removeClass("active");
  $(".po_2").removeClass("active");
  $(".po_3").removeClass("active");
  $(".po_5").removeClass("active");

});

$(".po_5").click(function(){

  $(this).addClass("active");
  $(".po_1").removeClass("active");
  $(".po_2").removeClass("active");
  $(".po_3").removeClass("active");
  $(".po_4").removeClass("active");
});

//owl carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    itemsDesktop:[1000,1],
    itemsDesktopSmall:[979,1],
    itemsTablet:[768,1],
    pagination:true,
    autoPlay:true,
    loop:true
  });
});
  
})(jQuery);