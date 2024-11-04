import Links from "./Links";

const Nav = () => {
  return (
    <div className="sm:max-w-sm md:flex md:flex-col md:justify-between md:h-[80vh] md:mt-24 md:fixed md:top-0">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-300 cursor-pointer">
          <a href="/">Aryan Bhat</a>
        </h1>
        <h3 className="text-lg sm:text-xl font-medium text-slate-300 tracking-tight mt-3">
          Full Stack Developer
        </h3>
        <h4 className="text-md sm:text-lg font-medium text-slate-400 leading-normal mt-4">
          Building cool stuff with JavaScript, TypeScript, and a dash of{" "}
          <span className="coffee-hover underline hover:no-underline">
            caffeine.
          </span>
        </h4>
      </div>
      <Links />
    </div>
  );
};

export default Nav;
