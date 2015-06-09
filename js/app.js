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
