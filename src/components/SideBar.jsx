import { RxCross2 } from "react-icons/rx";

const navs = ["About", "Experience", "Work", "Contact"];

const SideBar = ({ toggle, show }) => {
  return (
    <div
      onClick={toggle}
      className={` 
      ${show ? "w-[75%] px-4  " : "  opacity-0 w-[0%]"}
    
      absolute overflow-hidden transition-all  py-5  ease-in-out duration-300 bg-[#112240] h-[100%] right-0 top-0  `}
      style={{ boxSizing: "border-box" }}
    >
      <div
        className={`items-center flex transition-all ease-in-out duration-300 justify-end  `}
      >
        <RxCross2
          size={45}
          style={{
            rotate: show ? "0deg" : "-90deg",
            transition: "ease-in-out 0.3s",
          }}
        />
      </div>

      <div className="  flex-col mt-[6rem] gap-7   text-[1rem] text-[#B6C1E1] justify-center items-center flex list-none">
        {navs.map((item, i) => (
          <div key={i}>
            <li className="text-center text-[#64FFDA] ">0{i + 1}.</li>
            <li>{item}</li>
          </div>
        ))}

        <div className="mt-[2rem] text-[0.9rem]  text-[#64FFDA] font-[400] border px-10 border-[#64FFDA] py-2 ">
          RESUME
        </div>
      </div>
    </div>
  );
};

export default SideBar;
