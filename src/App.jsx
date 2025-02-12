import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Directions from "./pages/Directions";
import Departments from "./pages/Departments";
import News from "./pages/News";
import { useState } from "react";
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
            const [email, setEmail] = useState("");
            const [pass, setPass] = useState("");
            const [test, setTest] = useState(false);

            const test1 = "qwe@gmail.com";
            const test2 = "asd";

            useEffect(() => {
              if (localStorage.getItem("test")) {
                setTest(true);
              }
            }, []);

            const handleSubmit = async (e) => {
              console.log("...");
              e.preventDefault();
              if (JSON.parse(localStorage.getItem("test"))) {
                setTest(true);
                return;
              } else {
                let health = JSON.parse(localStorage.getItem("health"));
                if (health) {
                  if (email === test1 && pass === test2) {
                    localStorage.setItem("test", true);
                    localStorage.setItem("health", JSON.stringify(3));
                    setTest(true);
                  } else {
                    localStorage.setItem("health", JSON.stringify(health - 1));
                  }
                } else if (health === null) {
                  localStorage.setItem("health", JSON.stringify(3));
                } else {
                  navigate("/");
                }
              }
            };

            return (
              <div className="w-[100%] h-[100vh] bg-[#000] text-[#fff] flex flex-col items-center">
                {!test && (
                  <form
                    onSubmit={handleSubmit}
                    className="w-[320px] h-[250px] bg-[#fffcdf] text-[#000] p-[20px] rounded-[12px] m-auto flex flex-col gap-[10px] items-start"
                  >
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      required={true}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      className="w-[100%] h-auto rounded-[6px] bg-[#333] py-[2px] px-[10px] outline-none border-[1px] border-solid border-[#0ff] text-[#0ff]"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                      type="password"
                      id="pass"
                      required={true}
                      onChange={(e) => setPass(e.target.value)}
                      value={pass}
                      className="w-[100%] h-auto rounded-[6px] bg-[#333] py-[2px] px-[10px] outline-none border-[1px] border-solid border-[#0ff] text-[#0ff]"
                    />
                    <div className="mt-auto ">
                      <button
                        type="submit"
                        className="text-[#333] font-bold text-[16px] bg-[#0ff] hover:bg-[#00f9] py-[4px] px-[12px] rounded-[6px]"
                      >
                        Yuborish
                      </button>
                    </div>
                  </form>
                )}
                {test && <>Hello admin :)</>}
              </div>
            );
          }}
        />
      </Routes>
    </>
  );
}

export default App;
