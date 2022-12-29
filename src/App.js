import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import MyProjects from "./components/MyProjects";
import NavBar from "./components/NavBar";
import image from "./assets/background.png"

function App() {
  return (
    <div className="w-full mx-auto scroll-smooth" style={{ backgroundImage:`url(${image})` }}>
      <NavBar />
      <Home />
      <AboutMe />
      <MyProjects />
      <Experience />
      <Contact />
      <div class="text-center p-4 text-zinc-500">
          © 2022 Copyright: Ryan Chung
        </div>
    </div>
  );
}

export default App;
