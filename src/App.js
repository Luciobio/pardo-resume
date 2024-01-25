import "./App.css";
import { phone, email, location, linkedin, github } from "./svg.js";

function App() {
  return (
    <div className="app">
      <div className="columnContainer">
        <div className="leftColumn">
          <div className="headerCont">
            <h1 className="myName">LUCIANO</h1>
            <h1 className="myName">PARDO</h1>
            <div className="lineDiv"></div>
            <h3 className="jsDev">JavaScrip Jr Full-stack</h3>
            <h3 className="jsDev">Developer</h3>
            <p className="abautMe">
              I'm also a biologist and musician, but{" "}
              <span>
                I look foward to grow as a web developer and digital marketing
                specialist
              </span>
              . I'm actually working as Digital Marketing Assistant in 3DUS and
              working in personal web development projects mostly focused on
              front-end development.
            </p>
            <h6>
              <span>Main technical skills:</span>
            </h6>
            <p align="center">
              <img
                className="techIcon"
                src={require("./icons/html5.png")}
                height="38"
                alt="HTML"
              />
              <img
                className="techIcon"
                src={require("./icons/css.png")}
                height="38"
                alt="CSS"
              />
              <img
                className="techIcon"
                src={require("./icons/javascript.png")}
                height="38"
                alt="JavaScript"
              />
              <img
                className="techIcon"
                src={require("./icons/react.png")}
                height="38"
                alt="ReactJS"
              />
              <img
                className="techIcon"
                src={require("./icons/redux.png")}
                height="38"
                alt="ReductJS"
              />
              <img
                className="techIcon"
                src={require("./icons/webpack.png")}
                height="38"
                alt="Webpack"
              />
              <img
                className="techIcon"
                src={require("./icons/nodejs.png")}
                height="38"
                alt="NodeJS"
              />
              <img
                className="techIcon"
                src={require("./icons/express.png")}
                height="38"
                alt="Express"
              />
              <img
                className="techIcon"
                src={require("./icons/postgresql.png")}
                height="38"
                alt="PostgreSQL"
              />
              <img
                className="techIcon"
                src={require("./icons/mocha.png")}
                height="38"
                alt="Mocha"
              />
              <img
                className="techIcon"
                src={require("./icons/linux.png")}
                height="38"
                alt="Linux"
              />
              <img
                className="techIcon"
                src={require("./icons/scrum.png")}
                height="38"
                alt="Scrum"
              />
              <img
                className="techIcon"
                src={require("./icons/wordpress.png")}
                height="38"
                alt="WordPress"
              />
              <img
                className="techIcon"
                src={require("./icons/mailchimp.png")}
                height="38"
                alt="Mailchimp"
              />
              <img
                className="techIcon"
                src={require("./icons/google-ads.png")}
                height="38"
                alt="Goodle Ads"
              />
              <img
                className="techIcon"
                src={require("./icons/google-analytics.png")}
                height="38"
                alt="Google Analytics"
              />
              <img
                className="techIcon"
                src={require("./icons/facebook.png")}
                height="38"
                alt="Facebook Ads"
              />
              <img
                className="techIcon"
                src={require("./icons/instagram.png")}
                height="38"
                alt="Instagram"
              />
              <img
                className="techIcon"
                src={require("./icons/linkedin.png")}
                height="38"
                alt="LinkedIn"
              />
              <img
                className="techIcon"
                src={require("./icons/pinterest.png")}
                height="38"
                alt="Pinterest"
              />
            </p>
          </div>
          <div className="expCont">
            <div className="expTitleCont">
              <h1 className="expTitle">EXPERIENCE</h1>
            </div>
            <div className="whiteCont">
              <h3>Teaching assistant</h3>
              <h5>University of Salta (2008 - 2012)</h5>
              <p>
                In general zoology and Invertebrate biodiversity for biology
                students.
              </p>
              <h3>PhD Scholarship holder</h3>
              <h5>National Technical and Scientific Council - CONICET</h5>
              <h5>(2013 - 2018)</h5>
              <p>
                500 hours of postgraduated courses and 3 scientific articles
                published in english.
              </p>
              <p>
                <span>Skills learned:</span> Biostatistics, Multivariate
                parametric and nonparametric data analisys, Photoshop, R
                language, SIG software, Teamwork, Research, Scientific writing.
              </p>
              <div className="rowCont">
                <h4>Teacher</h4>
                <h5>- (2018 - 2021)</h5>
              </div>
              <p>
                For primary and secondary education. Teaching Biology and Music.
              </p>
              <div className="rowCont">
                <h4>Teaching assistant</h4>
                <h5> - Henry (08/20 - 12/20)</h5>
              </div>
              <p>
                Heading daily Stand up meetings with 20 Henry full-stack
                students.
              </p>
              <div className="rowCont">
                <h4>Digital Marketing Specialist</h4>
                <h5> - 3DUS (02/21 to present)</h5>
              </div>
              <p>
                Digital Marketing Trainee, social media, web management and
                digital marketing.
              </p>
              <div className="rowCont">
                <h4>Teaching assistant </h4>
                <h5> - CODERHOUSE (08/22 to present)</h5>
              </div>
              <p>
                Provided support during online classes and valuable feedback and
                corrections for Midterm and Final student projects.
              </p>
            </div>
          </div>
        </div>
        <div className="rightColumn">
          <div className="contactCont">
            <div className="contactInfo">
              <div className="infoTagCont">
                {location}
                <h5 className="infoTag">Córdoba, Argentina</h5>
              </div>
              <div className="infoTagCont">
                {phone}
                <a className="infoTag" href="https://wa.me/5493875060613">
                  <h5>+549-387-5060-613</h5>
                </a>
              </div>
              <div className="infoTagCont">
                {email}
                <a className="infoTag" href="mailto: pardobio@gmail.com">
                  <h5>pardobio@gmail.com</h5>
                </a>
              </div>
              <div className="infoTagCont">
                {linkedin}
                <a
                  className="infoTag"
                  href="https://www.linkedin.com/in/luciobio/"
                >
                  <h5>Linked In</h5>
                </a>
              </div>
              <div className="infoTagCont">
                {github}
                <a className="infoTag" href="https://github.com/Luciobio">
                  <h5>GitHub</h5>
                </a>
              </div>
            </div>
            <div className="qrCont">
              <img
                className="qr"
                src={require("./icons/qr.png")}
                height="200"
                alt=""
              />
            </div>
          </div>
          <div className="aboutCont">
            <h2>ABOUT ME</h2>
            <p>
              I'm a person of many interests, environment, wildlife, music,
              photography, design, cience, technology and videogames have always
              called my atention. Since I was little I've been skilled in
              computer use, but it wasn't untill a few years ago I realized I
              could work in the digital world, and that's my main focus today.
            </p>
            <h2 className="ed">EDUCATION</h2>
            <h3 className="edTitle">Digital Marketing</h3>
            <h5>LinkedIn Learning</h5>
            <h6>Marketing on Linkedin - Completed 02/2/2021.</h6>
            <h6>Digital Marketing Foundations - Completed 02/25/2021.</h6>
            <h6>
              Google Universal Analytics Essential Training - Completed
              03/4/2021.
            </h6>
            <h6>SEO Foundations - Completed 03/17/2021.</h6>
            <h6>Content Marketing Foundations - Completed 03/24/2021.</h6>

            <h5>CODERHOUSE</h5>
            <h6>Comunity Management and Marketing - Completed 01/18/2022.</h6>
            <h6>Advanced Social Media Advertising - Completed 03/22/2022.</h6>
            <h6>Growth Marketing - Completed 07/06/2022.</h6>

            <h3 className="edTitle">Full-stack Developer</h3>
            <h5>Henry bootcamp (06/20 - 10/20)</h5>
            <p>
              More that 500 hours of coding practice. Including two team work
              development proyects: an e-commerce and a final proyect.
            </p>
            <p>
              <span>
                Technologies learned: HTML, CSS, JavaScript, React, Redux, AJAX,
                Webpack, NodeJs, Express, PostgreSQL, Authentication, Testing,
                Scrum.
              </span>
            </p>
            <br/>
            <h5>Image Campus (10/22 - 02/23)</h5>
            <h6>C++ for Videogame Development.</h6>
            <br/>
            <h5>CODERHOUSE</h5>
            <h6>React JS - Completed 09/20/2022.</h6>
            <h6>UX/UI Design - Completed 02/14/2023.</h6>
            <h6>Angular + Redux - Completed 03/09/2023.</h6>
            <h6>Python + Django - Completed 07/25/2023.</h6>

            <h3 className="edTitle">Biologist</h3>
            <p>Biology degree - University of Salta (2007 - 2013)</p>
            <p>Natural Sciences PhD - University of Tucumán (2013 - 2018)</p>
            <h3 className="edTitle">Music</h3>
            <h5>Music Conservatory (1999 - 2004)</h5>
            <h6>Instrument: Piano.</h6>
            <h5>Salta State Music School (2015 - 2019)</h5>
            <h6>Instrument: Violoncello and Orchestral practice.</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
