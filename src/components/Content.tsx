import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const Content = () => {
  return (
    <div className=" w-full pt-24 md:w-1/2 md:pb-24 ">
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Content;
