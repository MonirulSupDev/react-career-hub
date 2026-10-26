import { Link, NavLink } from "react-router";
import logo from "../../assets/images/logos/careerhub-logo-172x44.png";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/applied">Applied Jobs</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-1 md:px-2 xl:px-0 absolute top-0 z-10 bg-transparent xl:mt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden hover:shadow-none hover:bg-linear-90 hover:from-blue-500 hover:to-violet-500 hover:text-white"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal gap-10 font-medium px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/#featured-jobs"
          className="btn bg-linear-90 from-blue-500 to-violet-500 font-medium xl:font-bold text-xs md:text-lg xl:text-xl text-white px-3 md:px-4 xl:px-5.75 md:py-6 xl:py-[31.5px] rounded-lg hover:bg-linear-180 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-300"
        >
          Start Applying
        </Link>
      </div>
    </div>
  );
};

export default Header;
