

const counterElement = document.getElementById('counter');
const targetValue = 25000; // Target value to count up to
let currentValue = 1000; // Starting value at 1K

// Function to increment the counter
function updateCounter() {
    if (currentValue < targetValue) {
        currentValue += 500; // Increment by 500, adjust as needed for desired speed
        if (currentValue > targetValue) {
            currentValue = targetValue;
        }
        counterElement.textContent = formatNumber(currentValue); // Format with K+
        if (currentValue >= targetValue) {
            counterElement.textContent += "+"; // Append "+" when target is reached
            clearInterval(counterInterval); // Stop the interval once target is reached
        }
    }
}

// Call updateCounter every 1000ms (1 second)
const counterInterval = setInterval(updateCounter, 3);

// Function to format number with commas and K
function formatNumber(number) {
    return (number / 1000).toLocaleString() + "K";
}



// end

// Function to update counter
function updateCounter(element, targetValue, increment) {
  let currentValue = 1000; // Starting value at 1K
  const counterElement = document.querySelector(element);

  // Function to format number with K
  function formatNumber(number) {
    return (number / 1000).toLocaleString() + "K";
  }

  // Function to increment the counter
  function incrementCounter() {
    if (currentValue < targetValue) {
      currentValue += increment;
      if (currentValue > targetValue) {
        currentValue = targetValue;
      }
      counterElement.textContent = formatNumber(currentValue);
      if (currentValue >= targetValue) {
        clearInterval(counterInterval);
      }
    }
  }

  // Call incrementCounter every 500ms (0.5 seconds)
  const counterInterval = setInterval(incrementCounter, 500);
}

// Call updateCounter for each element
updateCounter(".counter1", 25000, 500); // For the first item
updateCounter(".counter2", 50000, 1000); // For the second item
updateCounter(".counter3", 75000, 1500); // For the third item
updateCounter(".counter4", 100000, 2000); // For the fourth item



$( document ).ready(function() {
    $(function () { 
        $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
      });  
      
      // $( window ).scroll(function() {   
       // if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
        $(".progress-bar").each(function(){
          each_bar_width = $(this).attr('aria-valuenow');
          $(this).width(each_bar_width + '%');
        });
             
       //  }  
      // });
});



$('.testimonial-wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay : true,
    loop : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
                 
	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});



  	/* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });
   