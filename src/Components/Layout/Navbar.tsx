import { Link, NavLink, useNavigate } from "react-router-dom";
import { URLS } from "./Url";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

import { ThemeContext } from "../../context/ThemContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, setToken, setUser } = useContext(AuthContext);
  const { term, setTerm } = useContext(SearchContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const onLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <nav className=" fixed w-full md:px-15 z-20 top-0 start-0 bg-indigo-400 border-default   dark:bg-gray-900 
 ">
      <div className=" container   flex flex-wrap items-center justify-between mx-auto py-2.5 px-1.5">
        <Link
          to={URLS.home}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl  text-white  text-heading font-bold whitespace-nowrap dark:text-gray-100">
            Tech Blog
          </span>
        </Link>
        <div className="flex gap-5 items-center md:order-2">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center md:hidden text-body hover:text-heading bg-transparent  hover:bg-neutral-secondary-medium  font-medium leading-5 rounded-base text-sm w-10 h-10 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <label htmlFor="input-group-1" className="sr-only">
            Your Email
          </label>

          <div className="relative hidden md:block">
            <div className="absolute  text-gray-300 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="block border text-white! w-full ps-9 pe-3 py-1.5  border-gray-300  text-heading text-sm rounded-xl focus:outline-0 focus:ring-indigo-400 focus:border focus:border-gray-300 px-2.5  "
              placeholder="Search"
              value={term}
              onChange={(e) => {
                setTerm(e.target.value);
              }}
            />
          </div>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={`w-8 h-8  flex items-center justify-center border-0 outline-0  cursor-pointer text-white  rounded-full transition-all duration-300
  dark:bg-yellow-600 
  bg-amber-300 `}
          >
            {darkMode ? <FaMoon /> : <FaSun />}
          </button>

          <ul className="hidden md:flex items-center space-x-3 ms-8">
            {token ? (
              <li>
                <span
                  onClick={onLogout}
                  className="bg-yellow-300   dark:bg-yellow-600 
 text-white font-semibold  text-[14px] px-3 py-1.5 rounded-md cursor-pointer"
                >
                  Logout
                </span>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to={URLS.login}
                    className="block text-white py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={URLS.register}
                    className="block text-white py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className=" text-gray-300 inline-flex  items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={2}
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="relative  mt-3 md:hidden ">
            <input
              type="text"
              id="input-group-1"
              className="block text-white w-full   ps-2 py-2 bg-neutral-secondary-medium border-gray-300 border focus:outline-gray-300 text-heading text-sm rounded-xl focus:ring-white focus:border-white px-2.5  shadow-xs placeholder:text-body"
              placeholder="Search"
            />
          </div>
          <ul className="font-medium flex flex-col items-center p-2 md:p-0 mt-4 border border-gray-300 rounded-xl bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li onClick={() => setIsMenuOpen(false)}>
              <NavLink
                to={URLS.home}
                className="block text-white py-2 px-3  bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <NavLink
                to={URLS.createPost}
                className="block text-white py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                CreatePost
              </NavLink>
            </li>
            <li>
              <NavLink
                to={URLS.contact}
                className="block text-white py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Contact
              </NavLink>
            </li>
            <ul className="flex flex-col justify-center items-center md:hidden ">
              {token ? (
                <li>
                  <span
                    onClick={onLogout}
                    className="bg-yellow-400 text-white px-2 py-1 rounded-md"
                  >
                    Logout
                  </span>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink
                      to={URLS.login}
                      className="block text-white py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={URLS.register}
                      className="block text-white py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};
