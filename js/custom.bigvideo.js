var bigVideo = {
            // Use Modernizr to detect for touch devices, 
            // which don't support autoplay and may have less bandwidth, 
            // so just give them the poster images instead

    jsdb: {
        BV: null,
        videoPlayer: null,
        isTouch: Modernizr.touch
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
        this.el.exitBtn.on('click',function(e) { e.preventDefault(); bigVideo.toggleNav(); bigVideo.showVideo.apply(bigVideo);});
    },

    init: function() {
        this.loadVideo();
        this.bindEvents();
    },

    loadVideo: function() {

        if (!this.jsdb.isTouch) {
            
            // initialize BigVideo
            bigVideo.jsdb.BV = new $.BigVideo({forceAutoplay:bigVideo.jsdb.isTouch, useFlashForFirefox:true});
            bigVideo.jsdb.BV.init();

            this.showVideo();
            
            bigVideo.jsdb.BV.getPlayer().addEvent('loadeddata', function() {
                bigVideo.onVideoLoaded();
            });

        }

    },

    showVideo: function() {
        this.jsdb.BV.show($('#screen-1').attr('data-video'),{ambient:true});
    },

    onVideoLoaded: function() {
        $('#screen-1').find('.big-image').transit({'opacity':0},500);
    },

    showFeature: function() {
        var videoURL = this.videoSize();

        this.toggleNav();
        this.jsdb.BV.show(videoURL);
    },

    toggleNav: function() {
        //change the background of the main element to be a black background with the life as we know it logo in the background for loading
        this.el.wrapper.toggleClass('loadingBG');

        //toggle all the nav elements off and on
        this.el.overlay.toggleClass('transparent');
        this.el.playingOverlay.toggleClass('transparent');

    },

    videoSize: function() {
        var width = $(window).width(),

        videoSizes = [480,640,1280],

        videoLocations = [
            'http://vimeo.com/71136459/download?t=1375887273&v=179659022&s=fe8fa5445c25c46bc41ed1be732323ac',
            'http://vimeo.com/71136459/download?t=1375887273&v=179659029&s=99b2eb8c125dbe5ee328813418e5ce23',
            'http://vimeo.com/71136459/download?t=1375887273&v=179659028&s=2aab702fc44a74f6d46ba9eadc5aa87a'
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