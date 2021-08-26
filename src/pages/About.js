import React from 'react';
import '../pages/About.css';

export default function About() {
  return (
    <div >
      <h1>Know me</h1>
        <div className="about-content">
        <div className="info">
          <h4>Name</h4>
          <p>Thyago Pessoa</p>
          <hr /> 
          <h4>Born</h4>
          <p>September 4, 1989</p>
          <hr />
          <h4>Place</h4>
          <p>Rio de Janeiro, Brazil</p>
          <hr />
          <p>Knowledge</p>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-js-square"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-npm"></i>
          <i class="fab fa-git-alt"></i>
        </div>
        <div className="pitch">
        <h2>A little resume</h2>
        <br/> 
          <p>I always had passion for technology, robotic and science. My dream since I was a child was to be a scientist, so I followed this plan. I'm a graduate in Mechanical Engineering since 2019, Postgraduate in Automation.</p>
          <br/>
          <p>Since the end of last year I've been studying full-stack development. In this moment I'm studying at Trybe since march, 2021.</p>
          <br/>
          <p>One of my dreams is to develop a robot from scratch,  from assembly to programming. I want to be a diference in this world, help those in need, build things that make the world a better place to live.</p>
          <br/>
          <p>I like challenges, things that makes my brain explode, that's why I'm studying development, to do new things for people.</p>
        </div>
      </div>
    </div>
  )
}