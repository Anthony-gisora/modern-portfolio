import { Route, Routes } from "react-router-dom";
import Burner from "./components/burner";
import Applayout from "./layouts/AppLayout";
import Home from "./pages/home";
import Work from "./pages/Work";
import Post from "./pages/Post";
import { useState } from "react";

function App() {
  const [showMenu, setShowmwnu] = useState(true);
  const [colorMode, setColorMode] = useState(true);

  return (
    <Applayout
      colorMode={colorMode}
      setColorMode={setColorMode}
      showMenu={showMenu}
      setShowmwnu={setShowmwnu}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Burner colorMode={colorMode} showMenu={showMenu} />
              <Home colorMode={colorMode} />
            </>
          }
        />
        <Route
          path="/work"
          element={
            <>
              <Burner colorMode={colorMode} showMenu={showMenu} />
              <Work />
            </>
          }
        />
        <Route
          path="/post"
          element={
            <>
              <Burner colorMode={colorMode} showMenu={showMenu} />
              <Post />
            </>
          }
        />
      </Routes>
    </Applayout>
  );
}

export default App;
