import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Hawkyshun</h1>
          <p className="title">Frontend Developer</p>
        </header>

        <section className="about">
          <p>
            Merhaba! Ben Hawkyshun. Frontend geliştirme konusunda tutkulu bir yazılımcıyım.
            Modern web teknolojileri ile kullanıcı dostu arayüzler geliştiriyorum.
          </p>
        </section>

        <section className="skills">
          <div className="skill-tag">HTML</div>
          <div className="skill-tag">CSS</div>
          <div className="skill-tag">JavaScript</div>
          <div className="skill-tag">React</div>
          <div className="skill-tag">Vue.js</div>
          <div className="skill-tag">Tailwind</div>
        </section>

        <section className="experience">
          <div className="job">
            <h3>Frontend Developer</h3>
            <p>Web uygulamaları geliştirme ve kullanıcı deneyimi tasarımı</p>
          </div>
          <div className="job">
            <h3>UI/UX Tasarımcı</h3>
            <p>Modern ve kullanıcı dostu arayüz tasarımları</p>
          </div>
        </section>

        <section className="links">
          <a href="https://github.com/hawkyshun" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://codepen.io/hawkyshun" target="_blank" rel="noopener noreferrer">CodePen</a>
          <a href="https://twitter.com/hawkyshun" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="mailto:hawkyshun@gmail.com">Email</a>
        </section>
      </div>
    </div>
  );
}

export default App;

