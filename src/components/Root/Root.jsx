import "./Root.css";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div className="overflow-hidden">
      <div className="max-w-330 mx-auto relative">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
