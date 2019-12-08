import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import portfolio1 from '../assets/images/portfolio1.jpg';
import portfolio2 from '../assets/images/portfolio2.jpg';
import portfolio3 from '../assets/images/portfolio3.jpg';
import portfolio4 from '../assets/images/portfolio4.jpg';
import portfolio5 from '../assets/images/portfolio5.jpg';
import portfolio6 from '../assets/images/portfolio6.jpg';
import portfolio7 from '../assets/images/portfolio7.jpg';
import portfolio8 from '../assets/images/portfolio8.jpg';
import portfolio9 from '../assets/images/portfolio9.jpg';
import portfolio10 from '../assets/images/portfolio10.jpg';
import portfolio11 from '../assets/images/portfolio11.jpg';
import portfolio12 from '../assets/images/portfolio12.jpg';
import portfolio13 from '../assets/images/portfolio13.jpg';
import portfolio14 from '../assets/images/portfolio14.jpg';
import portfolio15 from '../assets/images/portfolio15.jpg';
import portfolio16 from '../assets/images/portfolio16.jpg';
import portfolio17 from '../assets/images/portfolio17.jpg';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="about">
        <a href="#about" className="more" />
      </Scroll>
    </section>

    <section id="about" className="wrapper style2 special">
      <div className="inner">
        <header className="major">
          <h2>
            About
          </h2>
          <p>
            I've been boundlessly fascinated by how things work for most of my life. By 15 I built my first PC, and since then I've dedicated myself to the domain of technology.
          </p>
          <p>
            I specialize in web application development with a core competency in constructing intuitive front-end user interfaces that interact with back-end solutions. Equipped 
            with a Computer Information Systems background, I primarily work with JavaScript, TypeScript, React, Redux, Apollo, SCSS/LESS, Styled Components, GraphQL, SQL, and MongoDB.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <a href="https://www.linkedin.com/in/jleack/">
              <span className="icon brands fa-linkedin major style4">
                <span className="label">Ipsum</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section id="skillset" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Skillset</h2>
        </header>
        <ul className="features">
          <li className="icon solid fa-code">
            <h3>Development</h3>
            <p>
              I'm a developer with experience using: JavaScript, TypeScript, React, Redux, Apollo, React Native, SASS/LESS, Styled Components, Node, Express, Python, Django, 
              SQL, MongoDB, GraphQL, and AWS. I also focused on C++ during college.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Project Management</h3>
            <p>
              I have served in leadership roles managing websites that draw in tens of million of pageviews per month. I also have experience as project manager for four projects, 
              including work with Northrop Grumman.
            </p>
          </li>
          <li className="icon solid fa-keyboard">
            <h3>Writing and Editing</h3>
            <p>
              I've worked in Executive Editor, Managing Editor, and Technical Editor roles responsible for writing and editing content. Since 2009 I've published hundreds of 
              gaming/technology reviews, guides, and interviews.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="portfolio" className="wrapper alt">
      <section className="spotlight">
        <div className="image">
          <img src={portfolio1} alt="" />
        </div>
        <div className="content">
          <h2>
            Redux Saga Frontier
          </h2>
          <p>
            This JavaScript based game allows users to randomize then confirm a group of four characters to embark on a RPG journey. The program is intended to demonstrate handling array 
            structure state with Redux and Saga in React. Two APIs are used with references to one another to provide both sprite avatars and character data.
          </p>
          <p>
            <a
              href="https://github.com/JonnyBeoulve/Redux-Saga-Frontier"
              target="_blank"
              >View Redux Saga Frontier Repository</a>
          </p>
          <p>
            <a
              href="https://redux-saga-frontier.firebaseapp.com/"
              target="_blank"
              >Demo Redux Saga Frontier</a>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio2} alt="" />
        </div>
        <div className="content">
          <h2>
            MovementX
          </h2>
          <p>
            MovementX is a transformative and personalized physical therapy solution. I've been tasked with development of both the front-end using JavaScript, HTML5, and CSS3 along with 
            the back-end that is based in Python, Django, and PostgreSQL. Production occurs in a Linux environment with deployments to AWS. Additionally, I built a blog for the site titled 
            MovementX Health using Gatsby, React, and GraphQL where articles can be published and used for SEO and campaign purposes.
          </p>
          <p>
            <a href="https://movement-x.com/" target="_blank"
              >View MovementX Main Website</a
            >
          </p>
          <p>
            <a
              href="https://movementx-health.netlify.com/"
              target="_blank"
              >View MovementX Health Website</a
            >
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio3} alt="" />
        </div>
        <div className="content">
          <h2>
            AuditQL
          </h2>
          <p>
            This project is for a fictional auditing company. Using GraphQL for API definition on a Node, Express, and MongoDB back end with React, Apollo, and Styled Components on the front 
            end, it will allow users to assign auditors to various audit projects and define their parameters.
          </p>
          <p>
            <a href="https://github.com/JonnyBeoulve/AuditQL"
              >View AuditQL Repository</a
            >
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio4} alt="" />
        </div>
        <div className="content">
          <h2>
            SpaceX Flights
          </h2>
          <p>
            This React-based website is a virtual museum for all SpaceX flights. Users are able to view a variety of interesting information for each flight and view video footage, all provided 
            by an unofficial SpaceX API.
          </p>
          <p>
            <a
              href="https://github.com/JonnyBeoulve/SpaceX-Flights"
              target="_blank"
              >View SpaceX Flights Repository</a>
          </p>
          <p>
            <a href="https://spacex-f.firebaseapp.com/" target="_blank"
              >Demo SpaceX Flights</a>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio5} alt="" />
        </div>
        <div className="content">
          <h2>
            Nadabot
          </h2>
          <p>
            Built using React Native, NadaBot is a central platform for resources and opportunities that are available for students within their university communities. While working at Stackend 
            Solutions we were contracted to contribute work to the mobile application's development on the front end, including feature iteration, bug fixes, and codebase refactoring.
          </p>
          <p>
            <a
              href="https://itunes.apple.com/in/app/nadabot/id1346216186?mt=8"
              target="_blank"
              >Download NadaBot on App Store</a
            >
          </p>
          <p>
            <a
              href="https://play.google.com/store/apps/details?id=com.nadaBot.NADA"
              target="_blank"
              >Download NadaBot on Google Play</a
            >
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio6} alt="" />
        </div>
        <div className="content">
          <h2>
            Flight & Flight Architect
          </h2>
          <p>
            This project is for a fictional private space travel company called Flight. The website was built using HTML and SCSS to demonstrate intermediate and advanced level front-end web 
            development techniques. The project is linked to an interactive React web app called Flight Architect.
          </p>
          <p>
            <a
              href="https://github.com/JonnyBeoulve/Flight"
              target="_blank"
              >View Flight Repository</a
            >
          </p>
          <p>
            <a href="http://www.jonathanleack.com/flight/" target="_blank"
              >Demo Flight</a
            >
          </p>
          <p>
            <a
              href="https://flight-architect.firebaseapp.com/"
              target="_blank"
              >Demo Flight Architect</a
            >
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio7} alt="" />
        </div>
        <div className="content">
          <h2>
            GameTrial
          </h2>
          <p>
            This dynamic library management system is for a fictional video game rental company. The website uses Node, Express, Pug, and the SQL ORM Sequelize to interface with a SQLite database containing games, customers, and rentals.
          </p>
          <p>
            <a
              href="https://github.com/JonnyBeoulve/GameTrial"
              target="_blank"
              >View GameTrial Repository</a>
          </p>
          <p>
            <a href="https://gametrial.herokuapp.com/" target="_blank"
              >Demo GameTrial</a>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio8} alt="" />
        </div>
        <div className="content">
          <h2>
            Hack the Now and Next: The Future of Media Hackathon
          </h2>
          <p>
            I was a member of the Weird A.I. team that earned 3rd place out of 60 participants at Globant's The Future of Media hackathon.
          </p>
          <p>
            <a
              href="https://github.com/JonnyBeoulve/Weird-AI"
              target="_blank"
              >View Weird A.I. Hackathon Repository</a
            >
          </p>
          <p>
            <a
              href="https://weird-ai-c3e96.firebaseapp.com/"
              target="_blank"
              >Demo Weird A.I.</a
            >
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio9} alt="" />
        </div>
        <div className="content">
          <h2>
            Ladybug Frogger
          </h2>
          <p>
            This is an object-oriented JavaScript ES6 game that plays similar to the retro classic Frogger.
          </p>
          <p>
            <a
              href="https://github.com/JonnyBeoulve/Object-Oriented-Frogger"
              target="_blank"
              >View Frogger Repository</a
            >
          </p>
          <p>
            <a
              href="http://www.jonathanleack.com/ladybug-frogger/"
              target="_blank"
              >Demo Ladybug Frogger</a
            >
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio10} alt="" />
        </div>
        <div className="content">
          <h2>
            Glynne Davies Portfolio
          </h2>
          <p>
            I constructed and set up SEO for the official portfolio of Glynne Davies, a Seattle based stylist I met while at a photoshoot for GoDaddy.
          </p>
          <p>
            <a href="https://www.glynnedavies.com/" target="_blank"
              >View Glynne Davies Website</a
            >
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio11} alt="" />
        </div>
        <div className="content">
          <h2>
            ArcGIS Challenge
          </h2>
          <p>
            For this timed coding challenge I used the ArcGIS API to build a map scene in React that allows the user to filter an array of objects and display the location and attributes of the filtered results.
          </p>
          <p>
            <a
              href="https://github.com/JonnyBeoulve/ArcGIS-Challenge"
              target="_blank"
              >View ArcGIS Challenge Repository</a
            >
          </p>
          <p>
            <a
              href="https://arcgis-challenge.firebaseapp.com/"
              target="_blank"
              >Demo ArcGIS Challenge</a
            >
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio12} alt="" />
        </div>
        <div className="content">
          <h2>
            Meme Database
          </h2>
          <p>
            This React project allows a user to browse a database of categorized memes with a Material UI front-end that delivers a Google-esque presentation.
          </p>
          <p>
            <a
              href="https://github.com/JonnyBeoulve/Meme-Database"
              target="_blank"
              >View Meme Database Repository</a
            >
          </p>
          <p>
            <a
              href="https://meme-database-22307.firebaseapp.com/"
              target="_blank"
              >Demo Meme Database</a
            >
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio13} alt="" />
        </div>
        <div className="content">
          <h2>
            Northrop Grumman Reporting System (CIS-490 Project)
          </h2>
          <p>
            I was project manager for my senior project where I worked with five other students in joint application design format. Our client was Northrop Grumman, who wanted a reporting system that 
            would allow users to upload project reports to a repository.
          </p>
          <p>
            <a href="envisage_cis490.pdf" download>View Final Report</a>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio14} alt="" />
        </div>
        <div className="content">
          <h2>
            Hack the Now and Next: AI Edition Hackathon
          </h2>
          <p>
            I was a member of the Recycle Bits team that earned 2nd place out of 60 participants at Globant's February 2018 hackathon. Our project utilized Microsoft Cognititive Services' image-processing 
            algorithms to determine whether an object in a user-submitted image is recyclable or not. I'm now continuing development of the iOS/Android app using React Native.
          </p>
          <p>
            <a
              href="https://github.com/JonnyBeoulve/RecycleBits"
              target="_blank"
              >View Recycle Bits Hackathon Repository</a
            >
          </p>
          <p>
            <a
              href="https://github.com/JonnyBeoulve/React-Native-Recycle-Bits"
              target="_blank"
              >View Recycle Bits App Repository</a>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio15} alt="" />
        </div>
        <div className="content">
          <h2>
            Valve Interview
          </h2>
          <p>
            In 2017 I went to Valve's headquarters to interview founder Gabe Newell among other senior management at the company.
          </p>
          <p>
            <a
              href="http://www.gamerevolution.com/g00/features/13618-valve-interview-roundtable"
              >View Valve Interview</a>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio16} alt="" />
        </div>
        <div className="content">
          <h2>
            Sentimental Chat
          </h2>
          <p>
          A real-time chat web app that includes sentiment analysis with Next.js server-side rendering and a Node/Express based back-end.
          </p>
          <p>
            <a
              href="https://github.com/JonnyBeoulve/Sentimental-Chat"
              target="_blank"
              >View Sentimental Chat Repository</a>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio17} alt="" />
        </div>
        <div className="content">
          <h2>
            Elite: Dangerous Story
          </h2>
          <p>
          In 2017 I wrote a detailed story about my journey deep into the Milky Way galaxy in a game titled Elite: Dangerous.
          </p>
          <p>
            <a
              href="http://www.gamerevolution.com/features/14030-my-unforgettable-and-treacherous-journey-deep-into-the-milky-way-in-elite-dangerous"
              target="_blank"
              >View Elite: Dangerous Story</a>
          </p>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
