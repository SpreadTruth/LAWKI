<?php 
include 'questionsdb.php'; 
error_reporting(E_ALL);
ini_set('display_errors', 'On');
?>
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
<body class="sub-page" id="intro">

    <div class="nav-wrapper">    
        <nav class="sticky">
            <div class="row">
                <div class="small-12 columns">
                    <a href="index.html"><img src="img/cover3.png" class="menu-logo"/></a>
                    <img id="mr-hamburger" class="menu show-for-small" src="img/menu.png" />
                    <ul class="small-center nav">
                        <li><a href="#intro">Intro</a></li>
                        <li><a href="#beginnings">Beginnings</a></li>
                        <li><a href="#obstacles">Obstacles</a></li>
                        <li><a href="#hope">Hope</a></li>
                        <li><a href="#future">Future</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <section>
        <div class="row">
            <div class="small-12 columns all-center">
                <img src="img/bookinside.jpg" />
            </div>
        </div>
    </section>

    <section>
        <div class="row">
            <div class="small-12 columns">
                <h1 class="lead timeline">Quotes</h1>
                <h5 class="subheader">say it best</h3>
                <p>
                    Sometimes it can be difficult to say exactly what it is we are thinking. We need a push to get over the metaphorical writer's block that stands in our way. This compilation of quotes aims to do exactly that.
                    Simply select the section you are working on to see a list of quotes that apply. Select your favorite quote and write it in, or print it out and tape it in. Feel free to use quotes not listed as well. There is no ban on creativity.
                </p>

            </div>
        </div>
    </section>

    <section id="beginnings">
        <div class="row">
            <div class="small-12 columns">
                <h1 class="lead timeline timeline-solid p1">Beginnings</h1>
                <h5 class="subheader">setting the stage</h3>

                <ul class='vertical-list quotes-list' id="container">
                    <?php questionsList($Quotes['Beginnings']); ?>
                </ul>
            </div>
        </div>
    </section>

    <section id="obstacles">
        <div class="row">
            <div class="small-12 columns">
                <h1 class="lead timeline timeline-solid p2">Obstacles</h1>
                <h5 class="subheader">unexpected twists</h3>

                <ul class='vertical-list quotes-list'>
                    <?php questionsList($Quotes['Obstacles']); ?>
                </ul>
            </div>
        </div>
    </section>

    <section id="hope">
        <div class="row">
            <div class="small-12 columns">
                <h1 class="lead timeline timeline-solid p3">Hope</h1>
                <h5 class="subheader">the upward swing</h3>

                <ul class='vertical-list quotes-list'>
                    <?php questionsList($Quotes['Hope']); ?>
                </ul>
            </div>
        </div>
    </section>

    <section id="future">
        <div class="row">
            <div class="small-12 columns">
                <h1 class="lead timeline timeline-solid p4">Future</h1>
                <h5 class="subheader">Your Legacy</h3>

                <ul class='vertical-list quotes-list'>
                    <?php questionsList($Quotes['Future']); ?>
                </ul>
            </div>
        </div>
    </section>


    <section class="quote quote-dark">
        <div class="row">
            <div class="small-12 small-centered large-10 columns">
                <span class="delta">75% of people surveyed said they <u>did not</u> know the occupation of their closest neighbor.</span>
                <a href="#" class="quote-attr">- USA Today</a>
            </div>
        </div>
    </section>

    <section class="footer-top small-center">
        <div class="row">
            <div class="small-10 small-centered large-12 columns">
                
                <div class="row">
                    <div class="small-12 small-centered columns large-8 large-uncentered">
                        <h5 class="subheader">Keep up with us</h5>
                        <p class="x-small">
                            Sign up to recieve occassional e-mails about any of our awesome new projects. Your email address is yours and will be kept private. We will never disclose it for any reason. All your data will be kept secure.
                        </p>
                    </div>
                    <div class="small-12 small-centered columns large-4 large-uncentered">
                        <div class="subscribe">            
                            <div class="row collapse">
                                <form id="subscribe">
                                    <div class="small-8 columns"><input type="email" required='required' placeholder="you@example.com"/></div>
                                    <div class="small-4 columns"><button>Subscribe</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <section class="footer">
        <div class="row">
            <div class="small-10 small-centered large-6 columns">
                <h5>LifeAsWeKnow.It</h5>
                <p class="x-small">
                    Life As We Know It is a publication created by <strong>Spread Truth Ministries</strong>, a non-profit located in Bloomington, Illinois.
                </p>
                <ul class="vertical-list">
                    <li><a href="#">Spread Truth</a></li>
                    <li><a href="#">The Story</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Modernizer -->
    <script src="js/modernizr-2.5.3.min.js"></script>
    <script src="js/enquire.min.js"></script>
    <!-- <script src="js/vendor/custom.modernizr.js"></script> -->

    <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script> -->
    <script>window.jQuery || document.write('<script src="js/jquery-1.8.1.min.js"><\/script>')</script>

    <!-- Foundation and Script -->
    <script src="js/foundation.min.js"></script>
    <script src="js/jquery.transit.min.js"></script>
    <script src="js/stellar.js"></script>

    <script src="js/jquery.scrollTo.min.js"></script>
    <script src="js/jquery.localScroll.min.js"></script>
    <script src="js/jquery.scrollspy.min.js"></script>
    <script src="js/packery.pkgd.min.js"></script>

    <script src="js/subscript.js"></script>

    <!-- LiveReload -->
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
</body>
</html>