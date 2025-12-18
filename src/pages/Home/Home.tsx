import { Link } from "react-router-dom";
import {  HomeHeader, LatestPosts } from "./";

export const Home = () => {
 
  return (
    <section className="mt-12">
      <HomeHeader />
      <main className="latest-post-section md:px-15 py-16  dark:bg-gray-900 ">
        <div className="container mx-auto ">
          <div className="flex justify-between items-center px-3 md:px-0">
            <h2 className="border-b-2 border-indigo-400 font-semibold text-3xl w-fit dark:text-gray-100 dark:border-indigo-500">
              Latest Posts
            </h2>
            <Link
              to="/allPosts"
              className="rounded-md outline-2 p-2 text-sm outline-indigo-400 hover:outline-indigo-600 transition-colors dark:text-white"
            >
              view all posts ➡
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <LatestPosts />
          </div>
        </div>
      </main>
    </section>
  );
};
