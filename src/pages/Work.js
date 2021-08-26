import React from 'react';
import '../pages/Work.css';

export default function Work() {
  return (
    <div>
      <h1>Works</h1>
      <div className="works-content">
        <div className="project-content">
          <p>Project Star Wars
          <br/>
          Project using API that contains information about planets from Star Wars movie series, using React and Context API.</p>
          <a target="_blank" href="https://github.com/flash898" class="fab fa-github" rel="noreferrer"> Link para o repositório</a>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6833748599986302977?compact=1" height="284" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
        </div>
        <div className="project-content">
          <p>Project Trivia
          <br/>
          Project based on a game of questions and answers, with user validation to be able to play, using React and Redux.</p>
          <a target="_blank" href="https://github.com/flash898/sd-011-project-trivia-react-redux" class="fab fa-github" rel="noreferrer" > Link para o repositório</a>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6831190325193687040?compact=1" height="284" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
        </div>
        <div className="project-content">
          <p>Project Podcastr
          <br/>
          Project carried out at Rocketseat NLW, in this project a podcast was developed using React, Typescript, SASS.</p>
          <a target="_blank" href="https://github.com/flash898/nlw-05-2021" class="fab fa-github" rel="noreferrer"> Link para o repositório</a>
          <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6790743432236216320?compact=1" height="284" width="504" frameborder="0" allowfullscreen="" title="Publicação incorporada"></iframe>
        </div>
      </div>
    </div>
  )
}
