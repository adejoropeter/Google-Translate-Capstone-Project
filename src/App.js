import Home from "./components/Home";
import Tools from "./components/Tools";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import image from "./image.jpg";
// import logo from "/logo512.png";
const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col">
      <div className="w-20 h-20 mb-5">
        <img
          src={image}
          className="w-[100%] h-[100%] rounded-full object-cover"
        />
      </div>

      <main className=" bg-[#202124] w-[700px] h-[450px] p-3 flex flex-col ">
        <div className="flex text-3xl mb-10">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive
                ? "border-b-2 border-red-700 p-4 text-red-700"
                : "p-4 text-red-300";
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/tools"
            className={({ isActive }) => {
              return isActive
                ? "border-b-2 border-red-700 p-4 text-red-700"
                : "p-4 text-red-300";
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
