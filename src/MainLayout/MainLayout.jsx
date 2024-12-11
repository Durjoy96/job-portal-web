import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
