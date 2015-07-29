// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

// init Foundation framework
$(document).foundation();

// Wait for DOM to load.
$(document).ready(function() {
    // After DOM load, remove nojs class to prevent flickering
    setTimeout(function() {
         $('.slider_overlay').removeClass('nojs');
    }, 2000);

  // On load set animations for header and nav
  $(".animsition").animsition({
    inClass               :   'fade-in',
    inDuration            :    1500,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ]
  });

 // Contact form
 $("#submit").click(function(){
   $(".error").hide();
     // Get value of email input
     var hasError = false;
     var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

     // Make sure email address is not empty or invalid
     var emailToVal = $("#emailTo").val();
     if(emailToVal == '') {
       $("#emailTo").after('<span class="error">You forgot to enter the email address to send to</span>');
       hasError = true;
       } else if(!emailReg.test(emailToVal)) {
       $("#emailTo").after('<span class="error">Enter a valid email address to send to.</span>');
       hasError = true;
     }

     // Make sure subject is not empty or invalid
     var subjectVal = $("#subject").val();
     if(subjectVal == '') {
       $("#subject").after('<span class="error">You forgot to enter the subject.</span>');
       hasError = true;
     }

     // Make message field is not empty or invalid
     var messageVal = $("#message").val();
     if(messageVal == '') {
       $("#message").after('<span class="error">You forgot to enter the message.</span>');
       hasError = true;
     }

     // If no error, show loading and ...
     if(hasError == false) {
 			$(this).hide();
 			$("#sendEmail li.buttons").append('<img src="/wp-content/themes/default/images/template/loading.gif" alt="Loading" id="loading" />');

       // Send data via AJAX POST to PHP handler
      $.post("sendmail.php",
      { emailTo: emailToVal, emailFrom: emailFromVal, subject: subjectVal, message: messageVal },
      function(data){
        $("#sendEmail").slideUp("normal", function() {
        	$("#sendEmail").before('<h1>Success</h1><p>Your email was sent.</p>');
          });
        });
      }
   return false;
 });

 // Slide reveal overlay for mobile

 // Set portfolio overlay object properties
 var $portfolio_items = {
   slider_overlay : $('.slider_overlay'),
   magellan : $('#magellan'),
   html : $('html'),
   body : $('body'),
   content_fade : $('.portfolio, .about')
 };

 // Set portfolio trigger variables
 var $slider_otp_trigger = $('.slider_close.trigger_otp');
 var $slider_qf_trigger = $('.slider_close.trigger_qf');

 // Set portfolio transition on OPEN methods
 function portfolio_transition_open() {
   $portfolio_items.magellan.addClass('hide');
   $portfolio_items.html.addClass('background_dark');
   $portfolio_items.body.addClass('no_scroll');
   $portfolio_items.content_fade.css( "opacity", ".25" );
   // Make sure slider is always scrollable on open
   $portfolio_items.slider_overlay.addClass('scroll_y');
 }

 // Set portfolio transition on CLOSE methods
 function portfolio_transition_close() {
   //$portfolio_items.magellan.removeClass('hide');
   $portfolio_items.html.removeClass('background_dark');
   $portfolio_items.body.removeClass('no_scroll');
   $portfolio_items.content_fade.css( "opacity", "1" );
 }

 function magellan_show() {
   $portfolio_items.magellan.removeClass('hide');
 }

 //Slider item 1
 $('#slider_otp').slideReveal({
   trigger: $('.trigger_otp'),
   //on slider open
   show: function(slider, trigger){
     portfolio_transition_open(),
       $slider_otp_trigger.css({
       'position' : 'fixed',
       'opacity' : '1'
     });
     // Pull slider_close out of slider overlay to prevent overflow from hiding element
     $slider_otp_trigger.parent().after($slider_otp_trigger);
   },

   //on slider close
   hide: function(slider, trigger){
     portfolio_transition_close();
       $slider_otp_trigger.css({
       'position' : '',
       'opacity' : '0'
     });
     // Put slider_close back inside slider_overlay
     $slider_otp_trigger.siblings('section.portfolio_slider').append($slider_otp_trigger);
   },
   // show magellan nav
   hidden: function(slider, trigger){
     magellan_show();
   }
 });


 //Slider item 2
   $('#slider_qf').slideReveal({
     trigger: $('.trigger_qf'),
     //on slider show, hide magellan nav + animate background
     show: function(slider, trigger){
       portfolio_transition_open();
       $slider_qf_trigger.css({
       'position' : 'fixed',
       'opacity' : '1'
     });
       // Pull slider_close out of slider overlay to prevent overflow from hiding element
       $slider_qf_trigger.parent().after($slider_qf_trigger);
     },
     // on slider close animate
     hide: function(slider, trigger){
       portfolio_transition_close();
       $slider_qf_trigger.css({
         'position' : '',
         'opacity' : '0'
       });
       // Put slider_close back inside slider_overlay
       $slider_qf_trigger.siblings('section.portfolio_slider').append($slider_qf_trigger);
     },
     // show magellan nav
     hidden: function(slider, trigger){
       magellan_show();
     }
   });

// Portfolio items Hover

// On hover
$('.portfolio_grid').hover(
  // function mouse i
  function() {
    // Full opacity on list item and overlay
    $(this).addClass('opacity_show');
    $(this).find('a.portfolio_overlay').addClass('opacity_show');
  },
  // function  mouse out
  function() {
    // Remove opacity on list item and overlay
    $(this).removeClass('opacity_show');
    $(this).find('a.portfolio_overlay').removeClass('opacity_show');
  }
);




// $(window).resize(function() {
//         // This will fire each time the window is resized:
//         if($(window).width() >= 1024) {
//             // if larger or equal
//             $('.element').show();
//         } else {
//             // if smaller
//             $('.element').hide();
//         }
//     }).resize(); // This will simulate a resize to trigger the initial run.





  // Remove overflow property to allow lightbox to expand full width
  $(document.body).on("open.fndtn.clearing", function(event) {
    $portfolio_items.slider_overlay.removeClass('scroll_y');
});
  // Add overflow property when lightbox closes
  $(document.body).on("close.fndtn.clearing", function(event) {
    $portfolio_items.slider_overlay.addClass('scroll_y');
});



});
//END when document is ready.
