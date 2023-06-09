import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const activeLink =
    "h-24 w-full flex place-items-center justify-center p-6 rounded-t-xl border-x-4 border-t-4 border-black";
  const navStyle =
    "h-20 w-full flex place-items-center justify-center p-6  border-t-2 border-b-4 border-x border-black relative";
  return (
    <div className="w-full flex">
      <div className="basis-2/3 lg:grid lg:grid-cols-4 place-items-end text-5xl relative">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? `${activeLink} bg-yellow_bright`
              : `${navStyle} bg-yellow_light border-l-2 rounded-tl-xl`
          }
        >
          <button className="">about me</button>
        </NavLink>
        <NavLink
          to="/resources"
          className={({ isActive }) =>
            isActive
              ? `${activeLink} bg-red_bright`
              : `${navStyle} bg-red_light`
          }
        >
          <button>portfolio</button>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? `${activeLink} bg-blue_bright`
              : `${navStyle} bg-blue_light`
          }
        >
          <button>resources</button>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? `${activeLink} bg-green_bright`
              : `${navStyle} bg-green_light rounded-tr-xl`
          }
        >
          <button>contact</button>
        </NavLink>
      </div>
      <div className="h-24 w-full basis-1/3 border-b-4 border-black"></div>
    </div>
  );
};
