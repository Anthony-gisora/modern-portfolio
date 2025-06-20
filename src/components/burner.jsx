import image from "../assets/images/pic.png";

const Burner = ({ colorMode, showMenu }) => {
  return (
    <div
      className={`md:w-[70%]    rounded-xl p-1 ${
        colorMode ? "bg-[#a3a1a1] text-[#161515]" : "bg-[#2c2a2a] text-[#ffff]"
      } ${
        showMenu ? "flex" : "hidden"
      }   items-center justify-evenly md:justify-around`}
    >
      <img
        src={image}
        alt="Profile Pic"
        className=" animate-pulse anima h-[190px] w-[190px]  md:rounded-3xl rounded-full   object-cover"
      />
      <div className="flex flex-col items-center ">
        <p className="font-mono font-bold border-b-2 border-[#ff4741]">
          Anthony Gisemba
        </p>
        <p className="font-mono font-bold text-[#ff4741]">Web Dev</p>
      </div>
    </div>
  );
};

export default Burner;
