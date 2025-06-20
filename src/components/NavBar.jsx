import {
  Close,
  DarkMode,
  LaptopMacOutlined,
  LightMode,
  Menu,
} from "@mui/icons-material";
import { MenuItem, MenuList } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = ({ setColorMode, colorMode, showMenu, setShowmwnu }) => {
  return (
    // The main nav element is now fixed at the top, full width, with a high z-index
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-16 ${
        colorMode ? "bg-[#dbdada]" : "bg-[#161515]"
      } shadow-md`}
    >
      {" "}
      {/* Added h-16 */}
      {/* This inner div contains the actual navigation content and controls its width and centering */}
      <div className="md:w-[60%] w-full mx-auto flex items-center justify-between px-2 h-full">
        {" "}
        {/* Added items-center and h-full */}
        <NavLink
          to="/"
          className="md:text-[32px] text-[28px] cursor-pointer flex items-center"
        >
          <LaptopMacOutlined className="!text-[#ff4741] md:!text-[38px] !text-[28px]" />{" "}
          Tonny<span className="text-[#ff4741]">_G</span>
        </NavLink>
        {/* Desktop Navigation Links */}
        <div className="w-[30%] hidden md:flex items-center justify-evenly px-2 h-full">
          {" "}
          {/* Added items-center and h-full */}
          <NavLink
            className={`cursor-pointer ${
              colorMode ? "text-[#161515]" : "text-[#ffff]"
            }`}
            to="/"
          >
            About
          </NavLink>
          <NavLink
            className={`cursor-pointer ${
              colorMode ? "text-[#161515]" : "text-[#ffff]"
            }`}
            to="/work"
          >
            Work
          </NavLink>
          <NavLink
            className={`cursor-pointer ${
              colorMode ? "text-[#161515]" : "text-[#ffff]"
            }`}
            to="/post"
          >
            Posts
          </NavLink>
        </div>
        {/* Desktop Mode Toggle */}
        <div className="hidden md:flex items-center justify-center h-full w-fit">
          {" "}
          {/* Added h-full */}
          {colorMode ? (
            <DarkMode
              onClick={() => setColorMode(!colorMode)}
              className="cursor-pointer !text-[#161515]"
            />
          ) : (
            <LightMode
              onClick={() => setColorMode(!colorMode)}
              className="cursor-pointer !text-[#ffff]"
            />
          )}
        </div>
        {/* Mobile Menu Icon (Hamburger) - visible only on small screens */}
        <Menu
          onClick={() => setShowmwnu(true)} // Set to true to show menu
          className={`md:!hidden mx-4 cursor-pointer ${
            colorMode ? "!text-[#161515]" : "!text-[#ffff]"
          }`}
        />
      </div>
      {/* Mobile MenuList (Full screen overlay when active) */}
      <MenuList
        className={`
          fixed top-0 left-0 w-full h-screen z-50 flex flex-col p-4
          ${showMenu ? "block" : "hidden"}
          ${
            colorMode
              ? "bg-[#dbdada] text-[#161515]"
              : "bg-[#161515] text-[#ffff]"
          }
          md:!hidden  // Ensure it's hidden on medium and larger screens
        `}
      >
        <div className="flex w-full justify-between p-2">
          <LaptopMacOutlined className="!text-[#ff4741]" />
          <div className="flex items-center">
            {/* Mobile Mode Toggle */}
            {colorMode ? (
              <DarkMode
                onClick={() => setColorMode(!colorMode)}
                className="cursor-pointer mr-4 !text-[#161515]"
              />
            ) : (
              <LightMode
                onClick={() => setColorMode(!colorMode)}
                className="cursor-pointer mr-4 !text-[#ffff]"
              />
            )}
            <Close
              onClick={() => setShowmwnu(false)}
              className="cursor-pointer"
            />{" "}
            {/* Set to false to hide menu */}
          </div>
        </div>

        <div className="w-full mt-8 flex flex-col items-center gap-4 text-xl font-medium">
          <MenuItem
            onClick={() => setShowmwnu(false)}
            className="!w-full !justify-center !py-3"
          >
            <NavLink className="w-full text-center" to="/">
              About
            </NavLink>
          </MenuItem>
          <MenuItem
            onClick={() => setShowmwnu(false)}
            className="!w-full !justify-center !py-3"
          >
            <NavLink className="w-full text-center" to="/work">
              Work
            </NavLink>
          </MenuItem>
          <MenuItem
            onClick={() => setShowmwnu(false)}
            className="!w-full !justify-center !py-3"
          >
            <NavLink className="w-full text-center" to="/post">
              Post
            </NavLink>
          </MenuItem>
        </div>

        <div className="absolute bottom-4 left-0 right-0 mx-auto w-full flex items-center justify-between px-7">
          <LaptopMacOutlined className="!text-[#ff4741]" />
          <p>
            <span className="text-[#ff4741] font-bold">Web Dev</span>eloper
          </p>
        </div>
      </MenuList>
    </nav>
  );
};

export default NavBar;
