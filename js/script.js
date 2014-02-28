$(function() {

    //fixes Chrome problem
    $(document).scrollTop(0);

    //fastclick
    FastClick.attach(document.body);

    //mobile nav
    var navToggle = function() {
      $('.menu').toggleClass('rotate');
      $('nav').toggleClass('open');
    };

    $('#mr-hamburger').on('click', function() {
        navToggle();
    });

    $('#main-nav a').on('click', function() {
      console.log('clicked');
      navToggle();
    });

    //attach the watch video 
    $('.video-container').fitVids();

    //register a media query match
    enquire.register("screen and (min-width:768px)", {

        match : function() {

            $('#main-nav').off('click');

            //fixed backgrounds on desktop
            mobileParallax.resize();

            //when the screen is resized, resize the backgrounds as well
            $(document).on('resizeimages', mobileParallax.resize);

            //remove hashtags from hrefs of links on top
            $('.main-buttons a:first-child').attr('href', '#');


            $('#hostagathering').find('ul').removeClass('host').addClass('rslides');

            //setup responsive slider
            $(".rslides").responsiveSlides({
                auto: true,
                navContainer: "#slider-btns",
                pagerContainer: "#slider-nav",
                nav: true,
                prevText: '&lt;',
                nextText: '&gt;',
                pager: true,
                pause: true,
                timout: 7000
              });

            //setup auto change when scrolling down the page
            $('#hostagathering').waypoint(function(direction) {

              if(direction === "up") {return false;}

              $('.rslides1_s1').trigger('click');

            }, {offset: '80%'});

            $('h1.timeline').waypoint(function(direction) {

              if (direction === "down") {
                $(this).addClass('current');
              }

              if (direction === "up") {
                $(this).removeClass('current');
              }

            }, {offset: '50%'});

            //set up sticky nav
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

            $('body').scrollspy({offset: 100});

            //video overlay

            var enterOverlay = function(video_url) {
              $('.contain-middle')
              .append("<iframe src='http://player.vimeo.com/video/"+video_url+"?title=0&amp;byline=0&amp;portrait=0;autoplay=1'frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>")
              .fitVids()
              .parent()
              .addClass('oshow');
            };

            var exitoverlay = function(e) {
              
              e.preventDefault();
              // turn off close button
              $('#exit-overlay').off('click');

              $('.over-overlay').removeClass('oshow');

              setTimeout(function() {$('.contain-middle').html('');}, 500);

            };

            $('.outline-buttons a, #watch-video').on('click', function(e) {
              e.preventDefault();

              var video_url = $(this).data('video');

              enterOverlay(video_url);

              // enable close button
              $('#exit-overlay').on('click', exitoverlay);

            });

            //PLEASE PLEASE PLEASE CLEAN THIS CRAP UP WHEN YOU CAN
            //REFERENCE videoOverlay.js (its almost done)

        },      
                                    
        unmatch : function() {
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
