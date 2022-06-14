import './About.css';
import React from 'react';
import picture from '../../images/kirovgrad.jpeg';

function About() {
  return (
    <section className="about">
      <img className="about__avatar" src={picture} alt="Картинка города Батуми" />
      <div className="about__text">
        <h2 className="about__title">Кировград</h2>
        <div className="about__description">
          <p className="about__author">До 1935 года город назывался <em>Калата</em>. Население около 30 000 человек.</p>
          <p className="about__author">Моя малая родина, в которой я вырос и получил все ценные моменты жизни.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
