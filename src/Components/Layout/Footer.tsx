import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className=" shadow-md  bg-gray-200 dark:bg-gray-800  ">
      <div className="w-full  mx-auto p-4 md:py-8">
        <ul className="flex justify-center gap-4 mb-4 text-sm ">
          <li>
            <Link to="/" className="text-indigo-500 hover:text-indigo-700  transition-colors font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/createPost" className="text-indigo-500 hover:text-indigo-700 transition-colors font-medium">
              Create Post
            </Link>
          </li> 
        </ul>

        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-gray-500 text-center ">
          © 2025{" "}
          <Link to="/" className="hover:underline font-medium text-indigo-600">
            MyBlog{" "}
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
