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

        this.el.targets.css({'background-size': 'auto ' + that.jsdb.wheight});
    },

    unsetBGs: function() {
        this.el.targets.attr('style', '');
    }

};