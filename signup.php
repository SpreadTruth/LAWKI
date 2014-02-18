<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>LifeAsWeKnow.IT</title>

    <meta name="description" content="A Communnity resource to help people craft and share their stories with friends, families, and neighbors." />
    <meta name="author" content="Spread Truth" />

    <meta name="viewport" content="width=device-width, user-scalable=no">

    <link rel="shortcut icon" href="favicon.ico">
    <link rel="icon" href="favicon.ico" type="image/x-icon"> 

    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> 

    <link rel="stylesheet" href="css/foundation.min.css" />
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/bigvideo.css">

</head>
<body data-spy="scroll" data-target="#main-nav" id="home">


    <div class="wrapper signuppage" style="background-image: url('img/bg/black.png'), url('img/randimg/<?php echo rand(1,6); ?>.jpg');">
        <!-- <div class="screen" id="screen-1" data-video="http://vimeo.com/66765424/download?t=1369255247&v=166334131&s=4bd9bd8f7346339c3b836d14f490ae91"> -->
        <div class="screen" id="screen-1" data-video="vid/main-video.mp4">
        </div>
    </div>

    <div class="overlay">
        <div class="headline row">
            <div class="cover"><img src="img/cover3.png" /></div>

            <div class="signup small-12 small-centered large-8 columns">
                <h4>Launching 2013</h4>
                <p>Sign-up to be reminded when Life As We Know It launches in 2013</p>

                <form id="signup" type="POST" action="signup_process.php">
                    <input type="email" required="required" name="email" placeholder="you@example.com"/>
                    <!-- <a href="#" class="btn btn-border btn-white">Get Reminded</a> -->
                    <a href="#" id="submit" class="btn btn-border btn-black">Get Reminded</a>
                </form>
            </div>
        </div>
    </div>





    <!-- Modernizer -->
    <!-- <script src="js/modernizr-2.5.3.min.js"></script> -->
    <script src="js/enquire.min.js"></script>
    <script src="js/vendor/custom.modernizr.js"></script>

    <!-- BigVideo Dependencies -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery-1.8.1.min.js"><\/script>')</script>
    <script src="js/jquery-ui-1.8.22.custom.min.js"></script>
    <script src="js/jquery.imagesloaded.min.js"></script>
    <script src="http://vjs.zencdn.net/c/video.js"></script>

    <!-- BigVideo -->
    <script src="js/jquery.transit.min.js"></script>
    <script src="js/bigvideo.js"></script>

    <!-- Foundation and Script -->
    <script src="js/foundation.min.js"></script>


    <script src="js/custom.bigvideo.js"></script>

    <script>
    $(function() {

    $(document).foundation();

        //attach the watch video 
        //register a media query match
        enquire.register("screen and (min-width:768px)", {

            match : function() {

                //unlink the scroll for watch video
                $('#watch-video').off('click');

                //show big video
                bigVideo.init();

            },      
                                        
            unmatch : function() {
                scroller.destroy();
            },    
              
        });

        //handle email subscribe
        $('#submit').on('click', function(e) {
            e.preventDefault();

            var $container = $('.signup').addClass('working');

            var post_data = $('#signup').serialize();

            $.ajax({
              url: 'inc/emailsubscribe.php',
              data: post_data,
              type: "POST",
              dataType: "JSON"
            })
            .done(function(data) {

                $container.removeClass('working');

                if (!data.status) {

                    if (!$('.error').length) {
                        $container.after('<div class="small-12 large-6 small-centered columns"><span class="error">'+ data.message+'</span></div>');
                    } else {
                        $('.error').html(data.message);
                    }

                    return false;
                }
                
                $('.error').parent().remove();
                $container.html('<h3 class="highlight3">Success</h3>Thanks! We will be in touch.');

            })

            .fail(function(data) {
                $container.removeClass('working');
                $container.append('<p><span class="error highlight3">Our server seems to be upset, please try again later.</span></p>');
            });
    });



    });
    </script>

    <!-- LiveReload -->
<!-- 
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
 -->
    
</body>
</html>