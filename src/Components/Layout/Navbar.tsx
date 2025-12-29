import { Link, NavLink, useNavigate, useLocation } from "react-router-dom"; // أضفنا useLocation
import { URLS } from "./Url";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemContext";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { token, setToken, setUser } = useContext(AuthContext);
  const { term, setTerm } = useContext(SearchContext);
  const { toggleTheme, theme } = useContext(ThemeContext);

  const onLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleSearchChange = (value: string) => {
    setTerm(value);
    if (location.pathname !== "/allPosts") {
      navigate(`/allPosts?q=${value}`);
    }
  };

  return (
    <nav className="fixed w-full md:px-15 z-20 top-0 start-0 bg-indigo-400 border-default dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto py-2.5 px-1.5">
        <Link
          to={URLS.home}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl text-white text-heading font-bold whitespace-nowrap dark:text-gray-100">
            Tech Blog
          </span>
        </Link>

        <div className="flex gap-5 items-center md:order-2">
          {/* أيقونة البحث للموبايل (تفتح القائمة) */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center md:hidden text-body hover:text-heading bg-transparent font-medium rounded-base text-sm w-10 h-10 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>

          {/* خانة البحث للـ Desktop */}
          <div className="relative hidden md:block">
            <div className="absolute text-gray-300 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="block border text-white w-full ps-9 pe-3 py-1.5 border-gray-300 text-sm rounded-xl focus:outline-0 focus:ring-indigo-400 bg-transparent placeholder:text-gray-200"
              placeholder="Search posts..."
              value={term}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>

          <button
            onClick={toggleTheme}
            className={`w-8 h-8 flex items-center justify-center border-0 outline-0 cursor-pointer text-white rounded-full transition-all duration-300 ${
              theme ? "bg-yellow-600" : "bg-amber-300"
            }`}
          >
            {theme ? <FaMoon /> : <FaSun />}
          </button>

          {/* روابط الـ Desktop */}
          <ul className="hidden md:flex items-center space-x-3 ms-8">
            {token ? (
              <li>
                <span
                  onClick={onLogout}
                  className="bg-yellow-300 dark:bg-yellow-600 text-white font-semibold text-[14px] px-3 py-1.5 rounded-md cursor-pointer"
                >
                  Logout
                </span>
              </li>
            ) : (
              <>
                <li>
                  <NavLink
                    to={URLS.login}
                    className="block text-white py-2 px-3 hover:text-yellow-200"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={URLS.register}
                    className="block text-white py-2 px-3 hover:text-yellow-200"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {/* زر الهامبرجر للموبايل */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="text-gray-300 inline-flex items-center p-2 w-10 h-10 justify-center rounded-base md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* القائمة المنسدلة للموبايل */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="relative mt-3 md:hidden">
            <input
              type="text"
              className="block text-white w-full ps-2 py-2 bg-indigo-500 dark:bg-gray-800 border-gray-300 border rounded-xl placeholder:text-gray-200"
              placeholder="Search..."
              value={term}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>
          <ul className="font-medium flex flex-col items-center p-2 md:p-0 mt-4 border border-gray-300 rounded-xl md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li onClick={() => setIsMenuOpen(false)}>
              <NavLink to={URLS.home} className="block text-white py-2 px-3">
                Home
              </NavLink>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <NavLink
                to={URLS.createPost}
                className="block text-white py-2 px-3"
              >
                Create Post
              </NavLink>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <NavLink to={URLS.contact} className="block text-white py-2 px-3">
                Contact Us
              </NavLink>
            </li>

            {/* أزرار الموبايل (Login/Logout) */}
            <div className="md:hidden mt-4">
              {token ? (
                <li
                  onClick={onLogout}
                  className="bg-yellow-400 text-white px-4 py-2 rounded-md"
                >
                  Logout
                </li>
              ) : (
                <div className="flex gap-4">
                  <NavLink
                    to={URLS.login}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to={URLS.register}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
