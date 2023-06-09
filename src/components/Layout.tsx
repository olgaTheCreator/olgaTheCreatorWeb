import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  console.log("layout");
  return (
    <div className="w-full p-10 h-full mb-5">
      <div className="bg-white text-black w-full font-vibur">
        <Navbar />
      </div>
      <div className="w-full rounded-b-xl border-x-4 border-b-4 border-black ">
        <Outlet />
      </div>
    </div>
  );
};
