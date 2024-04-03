import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import SideBar from "./SideBar";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const navs = ["About", "Experience", "Work", "Contact"];

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div
      className="bg-[#0A192F]  text-[#64FFDA] flex justify-between py-4  box-border px-4 text-[1.2rem] items-center lp:px-16 "
      style={{ boxSizing: "border-box" }}
    >
      <h1 className="text-[1.3rem] font-[500]">.DEV</h1>

      <p className={` transition-all ease-in-out duration-200 lp:hidden ${show ? "rotate-[90deg]" :""}`}  onClick={toggle} >
        <IoMenu size={35} />
      </p>

<div className="lp:flex list-none hidden items-center justify-center  text-[#B6C1E1] gap-8 text-[0.9rem]">
{navs.map((item, i) => (
          <div key={i} className="flex gap-2 cursor-pointer ">
            <li className="text-center text-[#64FFDA] ">0{i + 1}.</li>
            <li className="hover:text-[#64FFDA]">{item}</li>
          </div>
        ))}

         <div className="text-[0.9rem] rounded-sm  z-10 bg-[#0A192F] relative hover:-translate-y-[0.2rem] hover:-translate-x-[0.2rem] transition ease-in-out duration-200  text-[#64FFDA] font-[400] border px-4 cursor-pointer border-[#64FFDA] py-2 ">
          RESUME
        </div>
         <div className="text-[0.9rem] rounded-sm z-[0]  absolute right-16 bg-cyan-400  text-[#ff6464] font-[400] border px-4 cursor-pointer border-[#64FFDA] py-2 ">
          RESUME
        </div>
       
</div>

      <SideBar toggle={toggle} show={show} />
    </div>
  );
};

export default Navbar;
