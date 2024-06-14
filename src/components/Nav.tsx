import Links from "./Links";

const Nav = () => {
  return (
    <div className=" max-w-xs">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-300 cursor-pointer">
        <a href="/">Aryan Bhat</a>
      </h1>
      <h3 className=" text-lg sm:text-xl font-medium text-slate-300 tracking-tight mt-3">
        Full Stack Engineer
      </h3>
      <h4 className=" text-md sm:text-lg font-medium text-slate-400 leading-normal mt-4">
        I build full stack apps in Javascript/Typescript
      </h4>
      <Links />
    </div>
  );
};

export default Nav;
