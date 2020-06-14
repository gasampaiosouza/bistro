import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Footer() {
  return (
    <div className="container footer--container">
      <div className="footer--main">
        <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
          <h1 className="logo">Bistrô.</h1>
        </ScrollAnimation>
        <h3>A sua organização em nossas mãos!</h3>
      </div>
      <p className="copyright">© Todos os direitos reservados</p>
    </div>
  );
}
