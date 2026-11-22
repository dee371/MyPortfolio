import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <h2>My Portfolio</h2>

        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home">
        <h1>Hello, I'm Deepa</h1>
        <h2>Student & Web Developer</h2>
        <p>Welcome to my personal portfolio website.</p>
        <button>View My Work</button>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a college student interested in web development,
          programming and technology.
        </p>
      </section>

      <section id="skills">
        <h2>My Skills</h2>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React</p>
        <p>Java</p>
        <p>C Programming</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>

        <div>
          <h3>Calculator</h3>
          <p>Simple calculator project.</p>

          <h3>Shipping Calculator</h3>
          <p>Calculates shipping charges.</p>

          <h3>My Portfolio</h3>
          <p>Personal portfolio created using React.</p>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: your-email@gmail.com</p>
        <p>Phone: +91 XXXXX XXXXX</p>
      </section>

      <footer>
        <p>© 2026 Deepa | My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;