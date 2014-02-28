var bigVideo = {

    jsdb: {
        BV: null,
        videoPlayer: null,
        isTouch: Modernizr.touch,
        playingFeature: null
    },

    el: {
        overlay: $('.overlay, .nav-wrapper'),
        wrapper: $('.wrapper')
    },

    init: function() {
        this.loadVideo();
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
        this.jsdb.BV.show(videoraw+".mp4",{ambient:true, altSource: videoraw+".ogv"});
    },

    onVideoLoaded: function() {

        if(bigVideo.jsdb.playingFeature) { 
            bigVideo.toggleLogo(); 
            bigVideo.jsdb.playingFeature = false;
        }

        $('#screen-1').find('.big-image').transit({'opacity':0},500);
    }

};