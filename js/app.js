// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();



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

  //Hide portfolio
  //$('.portfolio').hide();

  //On portfolio nav item click
  $('.portfolio_nav').click(function() {
    // TEST make link red
    //$(this).css('color','red');

    //Show Portfolio Overlay
    $('.portfolio').animsition({

    inClass               :   'overlay-slide-in-top',
    outClass              :   'overlay-slide-out-top',
    inDuration            :    1500,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'body', //animsition wrapper element
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    //"unSupportCss" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    //The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

    overlay               :   true,
    //overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });

  });



 //Execute animsition function


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


/* Slide reveal */

  $('#slider').slideReveal({
    trigger: $("#trigger"),
    position: "right",
    autoEscape: false,
    width: 100,
    speed: 700
  });
