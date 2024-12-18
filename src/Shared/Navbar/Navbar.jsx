import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  // console.log(user);
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/my-submission">My Submission</NavLink>
                </li>
                <li>
                  <NavLink to="/add-job">Add Job</NavLink>
                </li>
                <li>
                  <NavLink to="/my-posts">My Posts</NavLink>
                </li>
              </ul>
            </div>
            <a className="text-xl font-semibold">Job Portal</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/my-submission">My Submission</NavLink>
              </li>
              <li>
                <NavLink to="/add-job">Add Job</NavLink>
              </li>
              <li>
                <NavLink to="/my-posts">My Posts</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-6">
            {user ? (
              <>
                <div className="flex items-center gap-6">
                  <p className="truncate w-32">{user?.email}</p>
                  <button
                    onClick={signOutUser}
                    className="px-6 py-2 bg-red-500 rounded-xl text-white font-semibold hover:opacity-70"
                  >
                    Log Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/register" className="btn-link text-primary">
                  Register
                </Link>
                <Link
                  to="/login"
                  className="btn bg-primary text-primary-content hover:bg-primary hover:opacity-70"
                >
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
