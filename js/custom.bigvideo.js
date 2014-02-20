var bigVideo = {
            // Use Modernizr to detect for touch devices, 
            // which don't support autoplay and may have less bandwidth, 
            // so just give them the poster images instead

    jsdb: {
        BV: null,
        videoPlayer: null,
        isTouch: Modernizr.touch,
        playingFeature: null
    },

    el: {
        playBtn: $('#watch-video'),
        overlay: $('.overlay, .nav-wrapper'),
        playingOverlay: $('.playing-overlay'),
        exitBtn: $('#exit-video'),
        wrapper: $('.wrapper')
    },

    bindEvents: function() {
        this.el.playBtn.on('click',function(e) { e.preventDefault(); bigVideo.showFeature.apply(bigVideo);});
        this.el.exitBtn.on('click',function(e) { 
            e.preventDefault(); 
            if (bigVideo.jsdb.playingFeature) {bigVideo.toggleLogo();}
            bigVideo.toggleNav();
            bigVideo.showVideo.apply(bigVideo);
        });
    },

    init: function() {
        this.loadVideo();
        this.bindEvents();
    },

    loadVideo: function() {

        if (!this.jsdb.isTouch) {
            
            // initialize BigVideo
            bigVideo.jsdb.BV = new $.BigVideo({forceAutoplay:true, useFlashForFirefox:false});
            bigVideo.jsdb.BV.init();

            this.showVideo();
            
            bigVideo.jsdb.BV.getPlayer().addEvent('loadeddata', function() {
                bigVideo.onVideoLoaded();
            });

        }

    },

    showVideo: function() {
        var videosrc = $('#screen-1').attr('data-video'),
            videoraw = videosrc.substring(0, videosrc.lastIndexOf('.'));
            debugger;
        this.jsdb.BV.show(videoraw+".mp4",{ambient:true, altSource: videoraw+".ogv"});
    },

    onVideoLoaded: function() {

        if(bigVideo.jsdb.playingFeature) { 
            bigVideo.toggleLogo(); 
            bigVideo.jsdb.playingFeature = false;
        }

        $('#screen-1').find('.big-image').transit({'opacity':0},500);
    },

    showFeature: function() {
        bigVideo.jsdb.playingFeature = true;
        var videoURL = this.videoSize();
        this.toggleLogo();
        this.toggleNav();
        this.jsdb.BV.show(videoURL);
    },

    toggleLogo: function() {
        //change the background of the main element to be a black background with the life as we know it logo in the background for loading
        this.el.wrapper.toggleClass('loadingBG');
    },

    toggleNav: function() {
        //toggle all the nav elements off and on
        this.el.overlay.toggleClass('transparent');
        this.el.playingOverlay.toggleClass('transparent');

    },

    videoSize: function() {
        var width = $(window).width(),

        videoSizes = [480,640,1280],

        videoLocations = [
            'http://vimeo.com/86572285/download?t=1392817645&v=228333840&s=5cb141899d60c2316e29a9cf2c0b7957',
            'http://vimeo.com/86572285/download?t=1392817645&v=228333833&s=9cbfb5e7eedd22ac13d67e19d6a3c4fc',
            'http://vimeo.com/86572285/download?t=1392817645&v=228333838&s=28e4626eef7ec4d702ddae8fb135159d'
        ];

        for(var i = 0; i<videoSizes.length; i++) {
            if (width <= (videoSizes[i]+(100*(1+i)))) {return videoLocations[i];}
        };

        return videoLocations[2];

    },

    showMobile: function() {
        $('body').append('<div class="mobile-container" id="mobile-video"><iframe src="http://player.vimeo.com/video/71136459?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1" width="450" height="253" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>');
        $('#mobile-video').fitVids();
    }

};