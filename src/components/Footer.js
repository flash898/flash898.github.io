import React from 'react';
import '../components/Footer.css';

export default function Footer() {
  return (
    <div className="footer-content">
      <span className="footer-text">Developed by Thyago Pessoa, 2021 ©</span>
      <div className="footer-social">
        <a href="https://www.instagram.com/thyagopessoa09/" class="fab fa-instagram"> </a>
        <a href="https://www.linkedin.com/in/thyago-pessoa/" class="fab fa-linkedin-in"> </a>
        <a href="https://github.com/flash898" class="fab fa-github"> </a>
        <a href="mailto: thyago_pessoa@hotmail.com" class="fas fa-envelope-square"> </a>
      </div>
    </div>
  )
}
