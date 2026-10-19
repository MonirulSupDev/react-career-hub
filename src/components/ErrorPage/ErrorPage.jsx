import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="text-center mt-40">
      <h1 className="text-5xl font-bold gradient-text mb-8">Oops!</h1>
      <NavLink
        to="/"
        className="text-lg font-bold px-2 py-1.5 rounded bg-black text-white"
      >
        Go to Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
