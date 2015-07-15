// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

// init Foundation
$(document).foundation();

//After DOM loads, remove nojs class to prevent flickering
$(document).ready(function() {
    setTimeout(function() {
         $('.slider_overlay').removeClass('nojs');
    }, 2000);
});

  //On load set animations for header and nav
  $(".animsition").animsition({
    inClass               :   'fade-in-up',
    inDuration            :    1500,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ]
  });
  $(".animsition_2").animsition({
    inClass               :   'fade-in-up',
    inDuration            :    1600,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ]
  });
 /* Contact form */

    /* attach a submit handler to the form */
    $("#contactForm").submit(function(event) {

      /* stop form from submitting normally */
      event.preventDefault();

      /* get some values from elements on the page: */
      var $form = $( this ),
          url = $form.attr( 'action' );

      /* Send the data using post */
      var posting = $.post( url, { name: $('#name').val(), name2: $('#name2').val() } );

      /* Alerts the results */
      posting.done(function( data ) {
        alert('success');
      });
    });

    /* END Contact form */

// Slide reveal

  //Slider item 1
  $('#slider_otp').slideReveal({
    trigger: $('.trigger_otp'),
    //on slider show, hide magellan nav + animate background
    show: function(slider, trigger){
      $('#magellan.fixed').addClass('hide');
      $('html').addClass('background_dark');
      $('body').addClass('no_scroll');
    },
    //on slider close, show magellan nav
    hide: function(slider, trigger){
      $('#magellan.fixed').removeClass('hide');
      $('html').removeClass('background_dark');
      $('body').removeClass('no_scroll');
    }
  });

  //Slider item 2
  $('#slider_qf').slideReveal({
    trigger: $('.trigger_qf'),
  });
