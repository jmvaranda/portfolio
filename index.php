<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Julian Varanda UI &amp; UX Designer</title>
    <link rel="stylesheet" href="stylesheets/app.css" />
    <!-- animsition CSS -->
    <link rel="stylesheet" href="bower_components/animsition/dist/css/animsition.min.css">

  </head>
  <body>

      <script>
        //prevent flickering
          document.body.className += ' js';
      </script>

    <div class="header animsition">
      <div class="row">
        <header class="branding">
          <a href="#">
            <h1>Julian Varanda</h1>
            <h2>UX &amp; UI Designer</h2>
          </a>
        </header>
      </div>
    </div>

    <div id="magellan" class="magellan-nav animsition" data-magellan-expedition="fixed">
      <dl class="sub-nav">
        <dd data-magellan-arrival="about"><a href="#about">about</a></dd>
        <dd data-magellan-arrival="portfolio"><a href="#portfolio">portfolio</a></dd>
        <dd data-magellan-arrival="contact"><a href="#contact">contact</a></dd>
      </dl>
    </div>

    <div class="gradient"></div>

    <section class="about" data-magellan-destination="about">
      <a name="about"></a>

      <!-- About -->
      <div class="row">
          <h2 class="large-12 medium-12 columns">About</h2>
          <div class="large-3 medium-3 columns">
            <img src="images/about.png" alt="Image of Julian Varanda"/>
          </div>
          <div class="large-9 medium-9 columns text">
            <p class="emphasis">Seattle&ndash;native, born and bred. I am an interaction designer with a passion for creating thoughtful user experiences.</p>
            <p>I subscribe to a clean, functional, and user-centric design ideology. With a background in visual and web design I have worked with both large and small product teams creating clean visual UI and delightful user experiences.</p>
            <p class="smallspacer hide-for-medium-up">When I'm not working, some other passions of mine include: music composition and audio production or geeking out and playing futbol.</p>
          </div>
      </div>

      <!-- Experience & Skills -->
      <div class="row">

        <!-- Appears first on mobile -->
        <div class="show-for-small-only text columns">
          <h3 class="subheader">What I know</h3>
            <ul class="skills">
              <li>UX &amp; User-centered design principles</li>
              <li>Adobe Creative Cloud</li>
              <li>Sketch</li>
              <li>PC &amp; Mac fluent</li>
              <li>HTML5 / CSS3 / SASS</li>
              <li>Light jQuery</li>
              <li>Git</li>
            </ul>
        </div>

          <div class="large-8 medium-8 text columns">
            <h3 class="subheader">Experience</h3>
            <ul class="experience">
              <li>
                <p><strong>Bing</strong></p>
                <p>Interaction Designer <br/>
                  04/2014 &ndash; Present</p>
                <p>Designing and producing user experiences for multiple platforms( mobile, desktop, tablet).</p> <p>Project involved communicating with various product teams and stakeholders, working within existing visual systems and creating new explorartory ...</p>
              </li>
              <li>
                <p><strong>Windows Phone</strong></p>
                <p>Design Integrator <br/>
                09/2013 &ndash; 12/2014 </p>
                <p>Proin sodales ullamcorper enim ac porta. Donec malesuada fringilla neque, vitae accumsan nisl tincidunt vel. Nulla facilisi. Sed ultricies ultricies mi sit amet euismod. Integer quis ante est. Nulla lacinia, neque eu volutpat pellentesque, arcu urna fringilla urna</p>
              </li>
              <li>
                <p><strong>Bizango</strong></p>
                <p>Visual Designer &amp; Front-end Developer <br/>
                04/2012 &ndash; 09/2013</p>
                <p>Mauris eget metus eget massa efficitur viverra in ac mi. Ut consectetur lobortis tortor at euismod. Sed aliquet mi id dictum gravida. Phasellus et mi egestas</p>
              </li>
            </ul>
          </div>

          <!--Show for medium screen sizes + -->
          <div class="show-for-medium-up large-4 medium-4 text columns">
            <h3 class="subheader">What I know</h3>
              <ul class="skills">
                <li>UX &amp; User-centered design principles</li>
                <li>Adobe Creative Cloud</li>
                <li>Sketch</li>
                <li>PC &amp; Mac fluent</li>
                <li>HTML5 / CSS3 / SASS</li>
                <li>Light jQuery</li>
                <li>Git</li>
              </ul>
          </div>

      </div>
    </section>

    <section class="portfolio row" data-magellan-destination="portfolio">
      <a name="portfolio"></a>

        <h2>Portfolio</h2>
        <!-- Portfolio Items -->
        <ul class="portfolio_items">

          <li class="portfolio_otp trigger_otp">
            <a class="portfolio_overlay">
              <div class="project_logo small-6 columns">
                <img src="images/bing-logo.png" alt=""/>
              </div>
              <div class="project_label small-6 columns">
                <h4>iOS app</h4>
                <h5>UI / UX Design</h4>
              </div>
            </a>
          </li>

          <li class="portfolio_qf trigger_qf">
            <a class="portfolio_overlay">
              <div class="project_logo small-6 columns">
                <img src="images/bing-logo.png" alt=""/>
              </div>
              <div class="project_label small-6 columns">
                <h4>Query formulation</h4>
                <h5>UI / UX Design</h4>
              </div>
            </a>
          </li>

          <li class="portfolio_music_answer">
            <a class="portfolio_overlay">
              <div class="project_logo small-6 columns">
                <img src="images/bing-logo.png" alt=""/>
              </div>
              <div class="project_label small-6 columns">
                <h4>Mobile <br> music answer</h4>
                <h5>UI / UX Design</h4>
              </div>
            </a>
          </li>

          <li class="portfolio_immortal_palm">
            <a class="portfolio_overlay">
              <div class="project_logo small-6 columns">
                <img src="images/bing-logo.png" alt=""/>
              </div>
              <div class="project_label small-6 columns">
                <h4>Immortal Palm <br> Martial Arts</h4>
                <h5>UI &amp; UX Design / Front-End</h4>
              </div>
            </a>
          </li>

        </ul>
        <!-- Portfolio Items END -->
    </section>

    <section class="portfolio_slider hide-for-medium-up">
      <!-- Slider Overlay Items BEGIN -->

      <section id="slider_otp" class="slider_overlay nojs">
        <a class="slider_close trigger_otp"></a>
        <header>
          <h1>Off The Post</h1>
          <h2><small>iOS app experience</small></h2>
          <p class="emphasis">A creative thought experiment&ndash;I developed this design and product idea with soccer enthusiasts in mind.</p>
        </header>
        <div class="large-12 medium-12 columns text">
          <ul class="clearing-thumbs clearing-feature" data-clearing>
            <li class="clearing-featured-img"><a href="images\portfolio_01.jpg"><img src="images\portfolio_01.jpg"></a></li>
            <li class="th"><a href="images\portfolio_02.jpg"><img class="hide" src="images\portfolio_02.jpg"></a></li>
          </ul>
          <p>The unique aspect of this experience is the interlinking of information such as players profiles to clubs, tagging players in articles, user &amp; community driven content and exploration of new content through a exploratory experience</p>
          <p>This project proved challenging with the organization of information being displayed. The app consisted of multiple template states such as: </p>
          <ul class="square">
            <li>Single article experience</li>
            <li>Player card experience</li>
            <li>Club / team  experience</li>
            <li>Auto suggest &amp; search disambiguation</li>
          </ul>
        </div>
      </section>

      <section id="slider_qf" class="slider_overlay nojs">
        <a class="slider_close trigger_qf"></a>
        <header>
          <h1>Query Formulation</h1>
          <h2><small>Bing homepage &amp; search experience</small></h2>
          <p class="emphasis">Through Bing, this feature involved simplifying the previous QF experience to improve scannability, scalability and engagement metrics.</p>
        </header>
        <div class="large-12 medium-12 columns text">
          <ul class="clearing-thumbs clearing-feature" data-clearing>
            <li class="clearing-featured-img"><a href="images\portfolio_02.jpg"><img src="images\portfolio_02.jpg"></a></li>
            <li class="th"><a href="images\portfolio_01.jpg"><img class="hide" src="images\portfolio_01.jpg"></a></li>
          </ul>
          <p>Some challenges included finding solutions to fitting data into smaller UI while still maintaining legibility and scannability,  working within the Bing visual framework and aligning with future the Windows 10 design release.</p>
          <p>With the new UX, query formulation engagement increased substantially (upwards of 400%).</p>
          <p>This involved multiple interaction scenarios to account for such as:</p>
          <ul class="square">
            <li>Single rich entity answer</li>
            <li>Multiple entity disambiguation</li>
            <li>Direct navigation and URL queries</li>
            <li>Weather &amp; stock price answers
            </li>
          </ul>
        </div>
      </section>
      <!-- Slider Overlay Items END -->
    </section>


  <!-- Contact Form BEGIN -->
  <section class="contact row" data-magellan-destination="contact">
    <a name="contact"></a>

    <div class="large-12 columns">
      <h2>Get in touch!</h2>
      <p class="text">Drop a line here and I will get in contact with you as soon as I am available.</p>

      <?php include('verify.php'); ?>
    	<form action="" method="post" id="sendEmail">
    		<ul class="forms no-bullet">
          <li>
            <label for="subject">Name:</label>
            <input type="text" name="subject" id="subject" placeholder="What's your name?" value="<?= $_POST['subject']; ?>" /><?php if(isset($subjectError)) echo '
            <span class="error">'.$subjectError.'</span>'; ?>
          </li>
    			<!-- <li>
            <label for="emailTo">To</label>
            <input type="text" name="emailTo" id="emailTo" value="<?= $_POST['emailTo']; ?>" />
            <?php if(isset($emailToError)) echo '<span class="error">'.$emailToError.'</span>'; ?>
          </li> -->
    			<li>
            <label for="emailFrom">Email:</label>
            <input type="text" name="emailFrom" id="emailFrom" placeholder="How do I get in touch with you?" value="<?= $_POST['emailFrom']; ?>" /><?php if(isset($emailFromError)) echo '
            <span class="error">'.$emailFromError.'</span>'; ?>
          </li>
    			<li>
            <label for="subject">Subject:</label>
            <input type="text" name="subject" id="subject" placeholder="Subject line" value="<?= $_POST['subject']; ?>" /><?php if(isset($subjectError)) echo '
            <span class="error">'.$subjectError.'</span>'; ?>
          </li>
    			<li>
            <label for="message">Message:</label>
            <textarea name="message" id="message" placeholder="Drop a line"><?= $_POST['message']; ?></textarea><?php if(isset($messageError)) echo '
            <span class="error">'.$messageError.'</span>'; ?>
          </li>
          <li>
            <label>What's your spirit animal:
              <select id="spirit_animal">
                <option value="null">-</option>
                <option value="wolf">Wolf</option>
                <option value="tiger">Tiger</option>
                <option value="unicorn">Unicorn</option>
                <option value="unicorn">Still figuring that out</option>
              </select>
            </label>
          </li>
          <li class="buttons">
            <button type="submit" id="submit" class="button">Submit</button>
            <input type="hidden" name="submitted" id="submitted" value="true" />
          </li>
    		</ul>
    	</form>
    </div>
  </section>
<!-- Contact Form END -->

    <section class="footer row">
      <div class="text large-12 columns">
        <p>&copy; 2015 by Julian Varanda</p>
      </div>
    </section>

    <!-- Load resources -->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/foundation/js/foundation.min.js"></script>
    <script src="bower_components/modernizr/modernizr.js"></script>
    <script src="bower_components/slidereveal/src/slidereveal.js"></script>
    <script src="bower_components/animsition/dist/js/jquery.animsition.min.js"></script>
    <script src="js/app.js"></script>

  </body>
</html>
