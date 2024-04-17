import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Burner from "./components/burner";
import Applayout from "./layouts/AppLayout";
import Home from "./pages/home";
import Work from "./pages/Work";
import Post from "./pages/Post"
import { useState } from "react";


function App() {

  const [showMenu, setShowmwnu] = useState(true)
  const [colorMode, setColorMode] =useState(true)

  return (
    <Applayout colorMode={colorMode}  >
      <Routes>
        <Route path="/" element={
          <>
            <NavBar setColorMode={setColorMode} colorMode={colorMode} showMenu={showMenu} setShowmwnu={setShowmwnu}/>
            <Burner colorMode={colorMode} showMenu={showMenu} />
            <Home colorMode={colorMode}/>
          </>
        } />
        <Route path="/work" element={
          <>
            <NavBar setColorMode={setColorMode} colorMode={colorMode} showMenu={showMenu} setShowmwnu={setShowmwnu}/>
            <Burner colorMode={colorMode} showMenu={showMenu} />
            <Work />
          </>
        } />
        <Route path="/post" element={
          <>
            <NavBar setColorMode={setColorMode} colorMode={colorMode} showMenu={showMenu} setShowmwnu={setShowmwnu}/>
            <Burner colorMode={colorMode} showMenu={showMenu} />
            <Post />
          </>
        } />
      </Routes>
      
    </Applayout>
  );
}

export default App;
