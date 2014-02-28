(function() {

    var OV = {

      el: {
        buttons: $('.outline-buttons a'),
        overlay: $('.over-overlay'),
        contain: $('.contain-middle'),
        exit: $('#exit-overlay')
      },

      init: function() {
        this.bindUIElements();
      },

      bindUIElements: function() {

        this.el.buttons.on('click', this.handleClick);

      },

      handleClick: function(e) {

        e.preventDefault();

        //get url from data element
        var video_url = $(this).data('video');

        //insert iframe
        OV.enterOverlay(video_url);

        //activate the off button
        OV.el.exit.on('click', OV.exitoverlay);

      },

      enterOverlay: function(video_url) {

        //insert the iframe
        //auto fit it to container
        OV.el.contain
        .append("<iframe src='http://player.vimeo.com/video/"+video_url+"?title=0&amp;byline=0&amp;portrait=0;autoplay=1'frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>")
        .fitVids();

        //show the overlay
        OV.el.overlay
        .addClass('oshow');

      },

      exitOverlay: function(e) {
        alert('hey');

        e.preventDefault();

        //deactivate close button
        OV.el.exit.off('click');

        //hide the overlay
        OV.el.overlay.removeClass('oshow');

        //remove iframe
        setTimeout(function() {OV.el.contain.html('');}, 500);

      }

    };

    OV.init();

})();