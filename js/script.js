$(function() {

    //fixes Chrome problem
    $(document).scrollTop(0);

    $('#hostagathering').waypoint(function(direction) {

      if(direction === "up") {return false;}

      $('.rslides1_s1').trigger('click');

    }, {offset: '80%'});

    // $('#hostagathering').waypoint(function(direction) {

    //   if(direction === "up") {return false;}

    //   $('.rslides1_s3').trigger('click');
      
    // }, {offset: '5%'});


    $(".rslides").responsiveSlides({
        auto: true,
        navContainer: $("#slider-nav"),
        pager: true,
        pause: true,
        timout: 7000
      });

    //setup smooth scrolling and scrollspying
    $('body').scrollspy({offset: 100});

    //set mobile bg's to height of window
    // mobileParallax.resize();

    //mobile nav
    $('#mr-hamburger').on('click', function() {
        $('.menu').toggleClass('rotate');
        // $('.menu').transition({rotate: '45deg'});
        $('nav').toggleClass('open');
    });

    //attach the watch video 
    $('.video-container').fitVids();

    //register a media query match
    enquire.register("screen and (min-width:768px)", {

        match : function() {

            //unset the bg stuff
            // mobileParallax.destroy();
            mobileParallax.resize();

            $(document).on('resizeimages', mobileParallax.resize);

            //remove hashtags from hrefs of links on top
            $('.main-buttons a:first-child').attr('href', '#');

            //determine menu position
            // scroller.init();



            $('nav').removeClass('sticky').waypoint(function(direction) {

              var down = function() {
                $('nav').addClass('sticky');
                $('#big-video-wrap').hide();
              }

              var up = function() {
                $('nav').removeClass('sticky');
                $('#big-video-wrap').show();
              }

              if (direction === 'up') {
                up();
                return;
              }

              down();


            });

            //show big video
            bigVideo.init();
            // bigVideo.show('http://lawki.s3.amazonaws.com/video/SD_Loop1.mp4', {altSource:'http://lawki.s3.amazonaws.com/video/SD_Loop1.ogg'});

        },      
                                    
        unmatch : function() {
            // scroller.destroy();
            $('.main-buttons a').attr('href', '#whatisit');

            $(document).off('resizeimages');

            $('nav').removeClass('sticky').waypoint('destroy');

            mobileParallax.destroy();
        },    
          
    });


    var waitForFinalEvent = (function () {
      var timers = {};
      return function (callback, ms, uniqueId) {
        if (!uniqueId) {
          uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
          clearTimeout (timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
      };
    })();


    $(window).resize(function () {
        waitForFinalEvent(function(){
          // mobileParallax.resize();
          $(document).trigger('resizeimages');
        }, 500, "resize bgs");
    });


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


});
