import "./App.css";
import Content from "./components/Content";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 overflow-x-hidden">
        <Nav />
        <Content />
      </div>
    </>
  );
}

export default App;
