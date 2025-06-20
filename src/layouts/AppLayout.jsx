import NavBar from "../components/NavBar";

const Applayout = ({
  children,
  colorMode,
  setColorMode,
  showMenu,
  setShowmwnu,
}) => {
  return (
    <div
      className={`min-h-screen pt-16 ${
        // Added pt-16 here
        colorMode ? "bg-[#dbdada] text-[#161515]" : "bg-[#161515] text-[#ffff]"
      } select-none flex flex-col items-center`}
    >
      <NavBar
        setColorMode={setColorMode}
        colorMode={colorMode}
        showMenu={showMenu}
        setShowmwnu={setShowmwnu}
      />
      {children}
    </div>
  );
};

export default Applayout;
