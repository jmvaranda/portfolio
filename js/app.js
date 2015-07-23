// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs

// init Foundation framework
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
    inDuration            :    1650,
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
///////////////

// Set portfolio overlay object properties
var $portfolio_items = {
  slider_overlay : $('.slider_overlay'),
  magellan : $('#magellan'),
  html : $('html'),
  body : $('body'),
  content_fade : $('.portfolio, .about')
};

// Set portfolio trigger variables
var $slider_otp_close = $('.slider_close.trigger_otp');
var $slider_qf_close = $('.slider_close.trigger_qf');

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
  $portfolio_items.magellan.removeClass('hide');
  $portfolio_items.html.removeClass('background_dark');
  $portfolio_items.body.removeClass('no_scroll');
  $portfolio_items.content_fade.css( "opacity", "1" );
}


//Slider item 1
$('#slider_otp').slideReveal({
  trigger: $('.trigger_otp'),
  //on slider open
  show: function(slider, trigger){
    portfolio_transition_open(),
      $slider_otp_close.css({
      'position' : 'fixed',
      'opacity' : '1'
    });
    // Pull slider_close out of slider overlay to prevent overflow from hiding element
    $slider_otp_close.parent().after($slider_otp_close);
  },

  //on slider close
  hide: function(slider, trigger){
    portfolio_transition_close();
      $slider_otp_close.css({
      'position' : '',
      'opacity' : '0'
    });
    // Put slider_close back inside slider_overlay
    $slider_otp_close.siblings('section.portfolio_slider').append($slider_otp_close);
  }
});


//Slider item 2
  $('#slider_qf').slideReveal({
    trigger: $('.trigger_qf'),
    //on slider show, hide magellan nav + animate background
    show: function(slider, trigger){
      portfolio_transition_open();
      $slider_qf_close.css({
      'position' : 'fixed',
      'opacity' : '1'
    });
      // Pull slider_close out of slider overlay to prevent overflow from hiding element
      $slider_qf_close.parent().after($slider_qf_close);
    },
    //on slider close, show magellan nav
    hide: function(slider, trigger){
      portfolio_transition_close();
      $slider_qf_close.css({
        'position' : '',
        'opacity' : '0'
      });
      // Put slider_close back inside slider_overlay
      $slider_qf_close.siblings('section.portfolio_slider').append($slider_qf_close);
    }
  });






  // //Slider item 1
  // $('#slider_otp').slideReveal({
  //   trigger: $('.trigger_otp'),
  //   //on slider show, hide magellan nav + animate background
  //   show: function(slider, trigger){
  //     $portfolio_items.magellan.addClass('hide');
  //     $portfolio_items.html.addClass('background_dark');
  //     $portfolio_items.body.addClass('no_scroll');
  //     $portfolio_items.content_fade.css( "opacity", ".25" );
  //     $slider_otp_close.css({
  //       'position' : 'fixed',
  //       'opacity' : '1'
  //     });
  //     // Pull slider_close out of slider overlay to prevent overflow from hiding element
  //     //$slider_otp_close.parent().after($slider_otp_close);
  //     $slider_otp_close.parent().after($slider_otp_close);
  //   },
  //   //on slider close, show magellan nav
  //   hide: function(slider, trigger){
  //     $portfolio_items.magellan.removeClass('hide');
  //     $portfolio_items.html.removeClass('background_dark');
  //     $portfolio_items.body.removeClass('no_scroll');
  //     $portfolio_items.content_fade.css( "opacity", "1" );
  //     $slider_otp_close.css({
  //       'position' : '',
  //       'opacity' : '0'
  //     });
  //     // Put slider_close back inside slider_overlay
  //     //$slider_otp_close.siblings('section').append($slider_otp_close);
  //     $slider_otp_close.siblings('section.portfolio_slider').append(this);
  //   }
  // });


//Slider item 2
  // $('#slider_qf').slideReveal({
  //   trigger: $('.trigger_qf'),
  //   //on slider show, hide magellan nav + animate background
  //   show: function(slider, trigger){
  //     $portfolio_items.magellan.addClass('hide');
  //     $portfolio_items.html.addClass('background_dark');
  //     $portfolio_items.body.addClass('no_scroll');
  //     $portfolio_items.content_fade.css( "opacity", ".25" );
  //     $slider_qf_close.css({
  //       'position' : 'fixed',
  //       'opacity' : '1'
  //     });
  //     // Pull slider_close out of slider overlay to prevent overflow from hiding element
  //     $slider_qf_close.parent().after($slider_qf_close);
  //   },
  //   //on slider close, show magellan nav
  //   hide: function(slider, trigger){
  //     $portfolio_items.magellan.removeClass('hide');
  //     $portfolio_items.html.removeClass('background_dark');
  //     $portfolio_items.body.removeClass('no_scroll');
  //     $portfolio_items.content_fade.css( "opacity", "1" );
  //     $slider_qf_close.css({
  //       'position' : '',
  //       'opacity' : '0'
  //     });
  //     // Put slider_close back inside slider_overlay
  //     $slider_qf_close.siblings('section.portfolio_slider').append(this);
  //   }
  // });


  //Remove overflow property to allow lightbox to expand full width
  $(document.body).on("open.fndtn.clearing", function(event) {
    $portfolio_items.slider_overlay.removeClass('scroll_y');
});

  $(document.body).on("close.fndtn.clearing", function(event) {
    $portfolio_items.slider_overlay.addClass('scroll_y');
});
