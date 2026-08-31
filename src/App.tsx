import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <h2>Sadiya</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home">
        <h1>Hello, I'm Sadiya 👋</h1>
        <p>
          I am learning Web Development and React.
        </p>

        <button>Contact Me</button>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a beginner web developer who enjoys learning
          JavaScript, React and building websites.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2>My Skills</h2>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>

        <p>Email: example@email.com</p>

        <button>Send Message</button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Sadiya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

