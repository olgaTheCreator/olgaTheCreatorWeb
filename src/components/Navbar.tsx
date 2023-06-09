import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const activeLink =
    "opacity-100 bg-orange-600 w-full rounded-t-md h-14 ring-2 ring-orange-300 ring-inset";
  return (
    <div className="lg:w-full max-w-xl lg:grid lg:grid-cols-4">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? activeLink
            : "h-14 w-full -left-1 -right-1 bg-yellow_bright"
        }
      >
        <button className="">About me</button>
      </NavLink>
      <button>Projects</button>
      <button>Resources</button>
      <button>Contact</button>
    </div>
  );
};
