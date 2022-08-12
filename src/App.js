import Home from "./components/Home";
import Tools from "./components/Tools";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import image from "./image.jpg";
// import logo from "/logo512.png";
const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-[#202124]">
      <div className="w-20 h-20 mb-5 relative md:static">
        <img
          src={image}
          className="w-[100%] h-[100%] rounded-full object-cover absolute top-[50%] left-[50%] translate-x-[-80%] translate-y-[-80%] md:static "
        />
      </div>

      <main className=" bg-[#202124] w-[100%] md:w-[700px] h-[60%] p-1 flex flex-col">
        <div className="flex text-4xl md:text-6xl mb-10">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "border-b-2 border-red-700 p-3  md:p-4 text-red-700"
                : "p-3 md:p-4  text-red-300";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/tools"
            className={({ isActive }) => {
              return isActive
                ? "border-b-2 border-red-700 p-3  md:p-4 text-red-700"
                : "p-3  md:p-4  text-red-300";
            }}
          >
            Tools
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tools" element={<Tools />}></Route>
        </Routes>
      </main>
    </div>
  );
};
export default App;
