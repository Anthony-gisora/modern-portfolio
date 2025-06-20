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
    <nav
      className={`fixed top-0 z-50 w-full self-center md:w-[60%] flex items-baseline justify-between px-2 backdrop-blur-md ${
        colorMode ? "bg-white/30" : "bg-[#1a1a1a]/30"
      }`}
    >
      <NavLink to="/" className="md:text-[32px] text-[28px] cursor-pointer">
        <LaptopMacOutlined className="!text-[#ff4741] md:!text-[38px] !text-[28px]" />{" "}
        Tonny<span className="text-[#ff4741]">_G</span>
      </NavLink>
      <div className="w-[30%] flex items-baseline  justify-evenly px-2">
        <NavLink className="md:flex hidden cursor-pointer" to="/">
          About
        </NavLink>
        <NavLink className="md:flex hidden cursor-pointer" to="/work">
          Work
        </NavLink>
        <NavLink className="md:flex hidden cursor-pointer" to="/post">
          Posts
        </NavLink>
      </div>
      <div className="flex items-center justify-center h-fit w-fit">
        {colorMode ? (
          <DarkMode
            onClick={() => setColorMode(!colorMode)}
            className={`${!showMenu && "!hidden"} cursor-pointer`}
          />
        ) : (
          <LightMode
            onClick={() => setColorMode(!colorMode)}
            className={`${!showMenu && "!hidden"} cursor-pointer`}
          />
        )}
      </div>
      <Menu
        onClick={() => {
          setShowmwnu(!showMenu);
        }}
        className={`${!showMenu ? "!hidden" : null} md:!hidden mx-4 `}
      />
      <MenuList
        className={`!h-[100vh] ${showMenu ? "!hidden" : null} ${
          colorMode
            ? "bg-[#a3a1a1] text-[#161515]"
            : "bg-[#2c2a2a] text-[#ffff]"
        } !sticky  z-10  !w-[100%] md:self-end flex flex-col`}
      >
        <div className="flex w-full justify-between p-2">
          <LaptopMacOutlined className="!text-[#ff4741] " />
          <div className="flex">
            <div className="flex items-center justify-center h-fit w-fit">
              {colorMode ? (
                <DarkMode
                  onClick={() => setColorMode(!colorMode)}
                  className={`${showMenu && "!hidden"} cursor-pointer`}
                />
              ) : (
                <LightMode
                  onClick={() => setColorMode(!colorMode)}
                  className={`${showMenu && "!hidden"} cursor-pointer`}
                />
              )}
            </div>
            <Close
              onClick={() => {
                setShowmwnu(!showMenu);
              }}
            />
          </div>
        </div>
        <div className="w-full">
          <MenuItem
            onClick={() => {
              setShowmwnu(!showMenu);
            }}
          >
            <NavLink className="w-full" to="/">
              About
            </NavLink>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setShowmwnu(!showMenu);
            }}
          >
            <NavLink className="w-full" to="/work">
              Work
            </NavLink>
          </MenuItem>
          <MenuItem
            onClick={() => {
              setShowmwnu(!showMenu);
            }}
          >
            <NavLink className="w-full" to="/post">
              Post
            </NavLink>
          </MenuItem>
        </div>
        <div className=" absolute bottom-0 m-2 flex items-center justify-between w-[100%] p-3">
          <LaptopMacOutlined className="!text-[#ff4741] " />
          <p>
            <span className="text-[#ff4741] font-bold">Web Dev</span>eloper
          </p>
        </div>
      </MenuList>
    </nav>
  );
};

export default NavBar;
