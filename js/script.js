$(function() {

    $(document).foundation();

    //setup smooth scrolling and scrollspying
    $('.nav-wrapper').localScroll();
    $('body').scrollspy({offset: 100});

    $('#watch-video').on('click', function() {
        $.scrollTo('#video', 1000, {offset: -70});
    });

    //set mobile bg's to height of window
    mobileParallax.init();

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

            //unlink the scroll for watch video
            $('#watch-video').off('click');

            //unset the bg stuff
            mobileParallax.destroy();

            //determine menu position
            scroller.init();

            //parallax scrolling
            $.stellar({horizontalScrolling: false});

            //show big video
            bigVideo.init();

        },      
                                    
        unmatch : function() {
            scroller.destroy();
        },    
          
    });



});