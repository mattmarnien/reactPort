import React from "react";
import './about.css'


function About() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div class='container'>
        <div class="row card col 12 bio z-depth-2 device-width bioCard">
          <img id="myImage" src={require('../images/Me.jpg')} alt="picture of me" class="col 4" />
          <div class='row'>
            <p class="bioText">I'm a new developer with years of experience in professional environments and
            research
            skills that make my google-fu exceptional. I've been an attorney since 2014 and worked both as a
            clerk for
            the Philadelphia courts and an attorney in private practice.
            I decided this past year I needed a change in my life. I decided it was time to pursue coding,
            something I'd
            considered in for years and studied as a hobby. I'm currently immersed in a full time boot-camp
            program run
            at the University of Pennsylvania where I'm learning all the skills necessary to be a full-stack
            developer
            and learning how to learn new skills quickly.
            </p>


          </div>
          <div class="center bold row contactInfo">‪(267) 540-8490 </div>
          <div class="center row contactInfo">‪matt.marnien@gmail.com</div>
        </div>
      </div>
    </>
  )
};


export default About;