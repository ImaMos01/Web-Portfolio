import Experience from "./Experience";
import Home from "./Home";
import Proyects from "./Proyects";
import Technology from "./Technology";
import AboutMe from "./AboutMe";

function Main() {
  /* 
    Merge the componenets of the protafiolio
    Args:
      empty
    Return:
      All the components from Pages
  */
  return (
    <main>
      <Home />
      <Proyects />
      <Experience />
      <Technology />
      <AboutMe />
    </main>
  );
}

export default Main;
