
var mobileParallax = {
    jsdb: {
        wheight: null
    },

    el: {
        targets: $('.imgwrap')
    },

    init: function() {
        this.jsdb.wheight = $(window).height() + "px";
        this.setBGs();
    },

    destroy: function() {
        this.unsetBGs();
    },

    setBGs: function() {
        var that = this;

        this.el.targets.css({'background-size': 'auto, ' + that.jsdb.wheight});
    },

    unsetBGs: function() {
        this.el.targets.attr('style', '');
    }

}


$(function() {

    $(document).foundation();


    //set scrollspy and smoothscroll
    $('.nav-wrapper').localScroll();
    $('body').scrollspy();


    //set mobile bg's to height of window
    mobileParallax.init();

    //prep vimeo links
    // $('.fix-vim').vimeoFixr();

    //mobile nav
    $('#mr-hamburger').on('click', function() {
        $('.menu').toggleClass('rotate');
        // $('.menu').transition({rotate: '45deg'});
        $('nav').toggleClass('open');
    });

    //register a media query match
    enquire.register("screen and (min-width:768px)", {

        match : function() {

            //unset the bg stuff
            mobileParallax.destroy();

            //determine menu position
            // scroller.init();

            //parallax scrolling
            $.stellar({horizontalScrolling: false});

            var $container = $('.quotes-list');

            $container.packery({
              itemSelector: '.quotes-item',
              gutter: 10
            });
            

            $('body').scrollspy('refresh');

            // var container = document.querySelector('#container');
            // var pckry = new Packery( container, {
            //     itemSelector: '.item',
            //     // columnWidth: 60,
            //     gutter: 10
            // });


        },      
                                    
        unmatch : function() {
            // scroller.destroy();
        },    
          
    });

});