import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Nav from "./components/Nav";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 overflow-x-hidden md:flex md:justify-between ">
      <Nav activeSection={activeSection} />
      <div className=" md:w-1/3"></div>
      <Content setActiveSection={setActiveSection} />
    </div>
  );
}

export default App;
