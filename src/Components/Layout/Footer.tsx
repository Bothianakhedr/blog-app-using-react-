import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className=" rounded-lg shadow-sm   bg-linear-to-r from-indigo-50 to-white  ">
      <div className="w-full  mx-auto p-4 md:py-8">
        <ul className="flex justify-center gap-4 mb-4 text-sm text-gray-600">
          <li>
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/createPost" className="hover:text-indigo-600">
              Add Post
            </Link>
          </li>
        </ul>

        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center ">
          © 2025{" "}
          <Link to="/" className="hover:underline text-indigo-600">
            MyBlog{" "}
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
