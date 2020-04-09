import React from "react";
import './nav.css'


function Nav() {


  return (
    <>
      <nav>
        <div className="head-line blue darken-4">
        </div>
        <div className="nav-wrapper blue darken-2 flow-text ">
          <a href="#!" className="brand-logo flow-text nameText"><img className='cornerIcon hide-on-med-and-down' src={require('../images/newMin.png')} alt="MGM Icon" /></a>
          <a href="#" data-target="mobileNavBar" className="sidenav-trigger"><img className="cornerIcon" src={require('../images/newMin.png')} alt="MGM Icon" /></a>
          <div className='row center'>
            <div className='col xl2 offset-xl5 l4 offset-l4 m4' id='nameText'>Matthew Marnien</div>
            <div className='right col xl5 l4'>
              <div className="right hide-on-med-and-down right mainNavStuff">
                <a href={require("../images/Marnien Resume.pdf")} rel="noopener noreferrer nofollow" target="_blank"><i className="navIcons fas fa-clone fa-lg"></i> Resume</a>
                <a href="https://github.com/mattmarnien" rel="noopener noreferrer nofollow" target="_blank"><i className="navIcons fab fa-github fa-lg"></i>GitHub</a>
                <a href="https://www.linkedin.com/in/matthew-marnien-0a394239/"  rel="noopener noreferrer nofollow" target="_blank"><i
                  className="navIcons fab fa-linkedin fa-lg"></i> LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-line blue darken-4 left valign-wrapper">
          <ul>
            <li class='bottomLink'><a href="/">Portfolio</a></li>
            <li class='bottomLink'><a href="/about">About Me</a></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav grey lighten-3" id="mobileNavBar">
        <li><a href={require("../images/Marnien Resume.pdf")} rel="noopener noreferrer nofollow" target="_blank"><i className="fas fa-clone fa-2x"></i>Resume</a></li>
        <li><a href="https://github.com/mattmarnien" rel="noopener noreferrer nofollow" target="_blank"><i className="fab fa-github fa-2x"></i>GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/matthew-marnien-0a394239/" rel="noopener noreferrer nofollow" target="_blank"><i
          className="fab fa-linkedin fa-2x"></i>LinkedIn</a></li>
        <hr />
        <li> Contact Information:</li>
        <li> Email: matt.marnien@gmail.com</li>
        <li> Phone: ‪(215) 962-3410‬</li>

      </ul>


    </>


  );
}


export default Nav;
