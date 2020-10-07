import React from 'react';
import './App.css';
import {phone, email, location, linkedin, github} from './svg.js';

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
            <p className= "abautMe">
              I'm also a biologist and musician, but <span>I look foward to grow as a
              web developer</span>. I'm actually working as a music teacher in an
              elementary school and as Teaching assistant in Henry coding bootcamp. But
              I'm actively looking for a job position in the web development area.
            </p>
            <h6><span>Main technical skills:</span></h6>
            <p align="center">
              <img className="techIcon" src={require("./icons/html5.png")} height="38" alt=""/>
              <img className="techIcon" src={require("./icons/css.png")} height="38" alt=""/>
              <img className="techIcon" src={require("./icons/javascript.png")} height="38" alt=""/>
              <img className="techIcon" src={require("./icons/react.png")} height="38" alt=""/>
              <img className="techIcon" src={require("./icons/redux.png")} height="38" alt=""/>
              <img className="techIcon" src={require("./icons/webpack.png")} height="38" alt=""/>
              <img className="techIcon" src={require("./icons/nodejs.png")} height="38" alt=""/>
              <img className="techIcon" src={require("./icons/express.png")} height="38" alt=""/>
              <img className="techIcon" src={require("./icons/postgresql.png")} height="38" alt=""/>
              <img className="techIcon" src={require("./icons/mocha.png")} height="38" alt=""/>
              <img className="techIcon" src={require("./icons/linux.png")} height="38" alt=""/>
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
                In general zoology and Invertebrate biodiversity
                for biology students.
              </p>
              <h3>PhD Scholarship holder</h3>
              <h5>National Technical and Scientific Council - CONICET</h5>
              <h5>(2013 - 2018)</h5>
              <p>
                500 hours of postgraduated courses and 3 scientific articles published in english.
              </p>
              <p>
                <span>Skills learned:</span> Biostatistics, Multivariate parametric and
                nonparametric data analisys, Photoshop, R language,
                SIG software, Teamwork, Research, Scientific writing.
              </p>
              <div className="rowCont">
                <h3>Teacher</h3>
                <h5> - (2018 to present)</h5>
              </div>
              <p>
                For primary and secondary education. Teaching Biology and Music.
              </p>
              <div className="rowCont">
                <h3>Teaching assistant</h3>
                <h5> - Henry (2020 to present)</h5>
              </div>
              <p>
                Heading daily Stand up meetings with 20 Henry full-stack students.
              </p>
            </div>
          </div>
        </div>
        <div className="rightColumn">
          <div className="contactInfo">
            <div className="infoTagCont">{phone}<h5 className="infoTag">+549-387-5060-613</h5></div>
            <div className="infoTagCont">{email}<h5 className="infoTag">pardobio@gmail.com</h5></div>
            <div className="infoTagCont">{location}<h5 className="infoTag">Salta, Argentina</h5></div>
            <div className="infoTagCont">{linkedin}<a className="infoTag" href="https://www.linkedin.com/in/luciobio/"><h5>Linked In</h5></a></div>
            <div className="infoTagCont">{github}<a className="infoTag" href="https://github.com/Luciobio"><h5>GitHub</h5></a></div>
          </div>
          <div className="aboutCont">
            <h2>ABOUT ME</h2>
            <p>
              I'm a person of many interests, environment, wildlife, music, photography, design, cience,
              technology and videogames have always called my atention. Since I was little I've been skilled
              in computer use, but it wasn't untill a few years ago I realized I could become a developer, and
              that's my main focus today.
            </p>
            <h2 className="ed">EDUCATION</h2>
            <h3 className="edTitle">Full-stack Developer</h3>
            <h5>Henry bootcamp (06/20 - 10/20)</h5>
            <p>
              More that 500 hours of coding practice. Including two team work development proyects: an e-commerce and a
              final proyect.
            </p>
            <p>
              <span>Technologies learned: HTML, CSS, JavaScript, React, Redux, AJAX, Webpack, NodeJs, Express, PostgreSQL,
              Authentication, Testing.</span>
            </p>
            <h3 className="edTitle">Biologist</h3>
            <p>
            Biology degree - University of Salta (2007 - 2013)
            </p>
            <p>
            Natural Sciences PhD - University of Tucumán (2013 - 2018)
            </p>
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
