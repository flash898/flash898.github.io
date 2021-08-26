import React from 'react'
import linkedIn from '../media/linkedIn.jpeg'
import '../components/Home.css';

export default function Home() {
  return (
    <div className="home-content">
      <div className="presentation">
        <p className="presentation presentation-name">Hello, I'm Thyago Pessoa ⚡</p>
        <p className="presentation presentation-profissional">Front-end developer</p>
      </div>
      <div className="photo">
        <img src={ linkedIn } alt="Foto de perfil" />
      </div>
    </div>
  )
}
