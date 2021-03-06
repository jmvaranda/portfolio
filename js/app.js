// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs



// Set animations
var fadeAnimation = {
  inClass               :   'fade-in',
  outClass              :   'fade-out',
  inDuration            :    1500,
  outDuration           :    800,
  loading               :    false,
  unSupportCss          : [ 'animation-duration',
                            '-webkit-animation-duration',
                            '-o-animation-duration'
                          ]
};
// On load set animations for header and nav
$(".animsition").animsition(fadeAnimation);

// Wait for DOM to load.
$(document).ready(function() {

  // init Foundation framework
  $(document).foundation();

    // After DOM load, remove nojs class to prevent flickering
    setTimeout(function() {
         $('.slider_overlay').removeClass('nojs');
    }, 2000);


    // NOTE
    // Use this to allow Slider and Portfolio-related functions

    // $.when(ajax1(), ajax2(), ajax3(), ajax4()).done(function(a1, a2, a3, a4){
    //     // the code here will be executed when all four ajax requests resolve.
    //     // a1, a2, a3 and a4 are lists of length 3 containing the response text,
    //     // status, and jqXHR object for each of the four ajax calls respectively.
    // });
    //
    // function ajax1() {
    //     //  This function must return the value
    //     //  from calling the $.ajax() method.
    //     return $.ajax({
    //         //url: "someUrl",
    //         //dataType: "json",
    //         //data:  yourJsonData,
    //         //...
    //     });
    // }



 //Load content depending on screen sizes

 //Set portfolio contents container
 var $portfolioContainer = $('section.portfolio');
 //var $portfolioSlider = $('section.portfolio_slider');

 function portfolioDesktop() {
   $portfolioContainer.load('ajax/portfolio-contents-desktop.html')
   .animsition(fadeAnimation);
 }
 function portfolioMobile() {
   $portfolioContainer.load('ajax/portfolio-contents-desktop.html')      .animsition(fadeAnimation);
   //$portfolioSlider.load('ajax/portfolio-slider-mobile.html');
 }

 enquire
   // If MOBILE
   .register("screen and (max-width: 40em)", {
     //deferSetup : true,
     match : function() {
       // Load Desktop contents
       //portfolioMobile();
       portfolioDesktop();
     },
     unmatch : function() {
       // Empty portfolio contents
       $portfolioContainer.empty();
     }
   })

   // If DESKTOP
   .register("screen and (min-width: 40.063em)", {
     //deferSetup : true,
     match : function() {
       // Load Desktop contents
       portfolioDesktop();
     },
     unmatch : function() {
       // Empty portfolio contents
       $portfolioContainer.empty();
     }
 });



 // Slide reveal overlay for mobile
 // Set portfolio overlay object properties
 // var $portfolio_items = {
 //   slider_overlay : $('.slider_overlay'),
 //   magellan : $('#magellan'),
 //   html : $('html'),
 //   body : $('body'),
 //   content_fade : $('.portfolio, .about')
 // };
 //
 // // Set portfolio trigger variables
 // var $slider_otp_trigger = $('.slider_close.trigger_otp');
 // var $slider_qf_trigger = $('.slider_close.trigger_qf');
 //
 // // Set portfolio transition on OPEN methods
 // function portfolio_transition_open() {
 //   $portfolio_items.magellan.addClass('hide');
 //   $portfolio_items.html.addClass('background_dark');
 //   $portfolio_items.body.addClass('no_scroll');
 //   $portfolio_items.content_fade.css( "opacity", ".25" );
 //   // Make sure slider is always scrollable on open
 //   $portfolio_items.slider_overlay.addClass('scroll_y');
 // }
 //
 // // Set portfolio transition on CLOSE methods
 // function portfolio_transition_close() {
 //   //$portfolio_items.magellan.removeClass('hide');
 //   $portfolio_items.html.removeClass('background_dark');
 //   $portfolio_items.body.removeClass('no_scroll');
 //   $portfolio_items.content_fade.css( "opacity", "1" );
 // }
 //
 // function magellan_show() {
 //   $portfolio_items.magellan.removeClass('hide');
 // }
 //
 // //Slider item 1
 // $('#slider_otp').slideReveal({
 //   trigger: $('.trigger_otp'),
 //   //on slider open
 //   show: function(slider, trigger){
 //     portfolio_transition_open(),
 //       $slider_otp_trigger.css({
 //       'position' : 'fixed',
 //       'opacity' : '1'
 //     });
 //     // Pull slider_close out of slider overlay to prevent overflow from hiding element
 //     $slider_otp_trigger.parent().after($slider_otp_trigger);
 //   },
 //
 //   //on slider close
 //   hide: function(slider, trigger){
 //     portfolio_transition_close();
 //       $slider_otp_trigger.css({
 //       'position' : '',
 //       'opacity' : '0'
 //     });
 //     // Put slider_close back inside slider_overlay
 //     $slider_otp_trigger.siblings('section.portfolio_slider').append($slider_otp_trigger);
 //   },
 //   // show magellan nav
 //   hidden: function(slider, trigger){
 //     magellan_show();
 //   }
 // });
 //
 //
 // //Slider item 2
 //   $('#slider_qf').slideReveal({
 //     trigger: $('.trigger_qf'),
 //     //on slider show, hide magellan nav + animate background
 //     show: function(slider, trigger){
 //       portfolio_transition_open();
 //       $slider_qf_trigger.css({
 //       'position' : 'fixed',
 //       'opacity' : '1'
 //     });
 //       // Pull slider_close out of slider overlay to prevent overflow from hiding element
 //       $slider_qf_trigger.parent().after($slider_qf_trigger);
 //     },
 //     // on slider close animate
 //     hide: function(slider, trigger){
 //       portfolio_transition_close();
 //       $slider_qf_trigger.css({
 //         'position' : '',
 //         'opacity' : '0'
 //       });
 //       // Put slider_close back inside slider_overlay
 //       $slider_qf_trigger.siblings('section.portfolio_slider').append($slider_qf_trigger);
 //     },
 //     // show magellan nav
 //     hidden: function(slider, trigger){
 //       magellan_show();
 //     }
 //   });
// End






// Portfolio items Hover
// On hover
// $('.portfolio_grid').hover(
//   // function mouse i
//   function() {
//     // Full opacity on list item and overlay
//     $(this).addClass('opacity_show');
//     $(this).find('a.portfolio_overlay').addClass('opacity_show');
//   },
//   // function  mouse out
//   function() {
//     // Remove opacity on list item and overlay
//     $(this).removeClass('opacity_show');
//     $(this).find('a.portfolio_overlay').removeClass('opacity_show');
//   }
// );


// Contact form
$("#submit").click(function(){
  $(".error").hide();
    // Get value of email input
    var hasError = false;
    //var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;

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


});
//END when document is ready.
