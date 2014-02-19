var mobileParallax = {
    jsdb: {
        wheight: null,
        wwidth: null
    },

    el: {
        targets: $('.imgwrap')
    },

    resize: function() {
        mobileParallax.jsdb.wheight = $(window).height();
        mobileParallax.jsdb.wwidth = $(window).width();
         mobileParallax.setBGs();
    },

    destroy: function() {
        this.unsetBGs();
    },

    setBGs: function() {
        var that = this;
        var bgfix = "background-attachment: fixed;";
        var bgprop = 'auto ' + that.jsdb.wheight + 'px';

        if(that.jsdb.wwidth > (that.jsdb.wheight * 1.5)) 
        {
            bgprop = that.jsdb.wwidth + 'px auto';
        }

        this.el.targets.css({'background-size': bgprop, 'background-attachment': 'fixed'});
    },

    unsetBGs: function() {
        this.el.targets.attr('style', '');
    }

};