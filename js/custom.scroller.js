var scroller = {
    jsdb: {
        position: 0,
        navposition: null,
        sticky: false
    },

    el: {
        document: $(document),
        nav: $('nav')
    },

    init: function() {
        this.el.nav.removeClass('sticky');
        this.jsdb.navposition = this.el.nav.offset();
        this.updatePosition();
        this.bindEvents();
    },

    destroy: function() {
        //unbind scrolling listener
        this.el.document.off('scroll');
        this.el.nav.addClass('sticky');
    },

    bindEvents: function() {
        this.el.document.on('scroll', function() {scroller.updatePosition();});
        // $(window).resize(function() {scroller.init();});
    },

    updatePosition: function() {
        this.jsdb.position = this.el.document.scrollTop();

        if (!this.jsdb.sticky && (this.jsdb.position >= this.jsdb.navposition.top)) {
            this.el.nav.addClass('sticky');
            $('#big-video-wrap').hide();
            this.jsdb.sticky = true;
            // console.log('add it');
        }

        if (this.jsdb.sticky && (this.jsdb.position <= this.jsdb.navposition.top)) {
            this.el.nav.removeClass('sticky');
            $('#big-video-wrap').show();
            this.jsdb.sticky = false;
        }
    }

};