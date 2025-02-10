import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Directions from "./pages/Directions";
import Departments from "./pages/Departments";
import News from "./pages/News";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/news" element={<News />} />
        <Route
          path="/test"
          Component={() => {
            let test = null;
            useEffect(() => {
              if (JSON.parse(localStorage.getItem("test"))) {
                return;
              } else {
                let health = JSON.parse(localStorage.getItem("health"));
                console.log(health);
                if (health) {
                  if (
                    prompt("Username") === "qwe" &&
                    prompt("Password") === "asd"
                  ) {
                    localStorage.setItem("test", true);
                    localStorage.setItem("health", JSON.stringify(3));
                    test = true;
                  } else {
                    localStorage.setItem("health", JSON.stringify(health - 1));
                  }
                } else if (health === null) {
                  localStorage.setItem("health", JSON.stringify(3));
                } else {
                  navigate("/");
                }
              }
            }, []);
            return (
              <div className="w-[100%] h-[100vh] bg-[#000] text-[#fff]">
                {test ? "Test passed" : "Test incorrected"}
              </div>
            );
          }}
        />
      </Routes>
    </>
  );
}

export default App;
