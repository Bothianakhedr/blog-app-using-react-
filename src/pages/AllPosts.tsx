import { PostCard } from "../Components/ui";
import { Link } from "react-router-dom";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useContext, useEffect, useState } from "react";
import { getAllPosts } from "../services/postServices";
import type { PostType } from "./Home/HomeTypes";
import Skeleton from "./Home/Components/Skeleton";
import type { GetAllPostsResponse } from "../services/ServicesType";
import ReactPaginate from "react-paginate";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { SearchContext } from "../context/SearchContext";

export const Posts = () => {
  const [posts, setPosts] = useState<GetAllPostsResponse>();
  const { term } = useContext(SearchContext);

  const filteredPosts = posts?.blogs.filter(
    (post) =>
      post.title.toLowerCase().includes(term.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(term.toLowerCase())
  );

  const onPageChange = ({ selected }: { selected: number }) => {
    getAllPosts({pageNumber : selected+1})
  };

  useScrollToTop();
  useEffect(() => {
    getAllPosts({ setPosts  });
  }, []);

  return (
    <section className="mt-20">
      <div className="container mx-auto px-4 lg:px-0 ">
        <div className="flex justify-between items-center my-10  ">
          <h2 className="border-b-2 border-indigo-300 font-semibold text-3xl  w-fit">
            All Posts
          </h2>
          <Link
            to="/allPosts"
            className="rounded-md outline-2 p-2 text-sm outline-indigo-300 hover:outline-indigo-600 transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {term === "" ? (
            posts?.blogs.length ? (
              posts.blogs.map((post: PostType) => (
                <PostCard post={post} key={post._id} />
              ))
            ) : (
              <>
                {Array.from({ length: 6 }, (_, index) => (
                  <Skeleton key={index} />
                ))}
              </>
            )
          ) : (
            filteredPosts?.map((post: PostType) => (
              <PostCard post={post} key={post._id} />
            ))
          )}
        </div>

        <ReactPaginate
          className="flex items-center gap-2 justify-center my-7   "
          previousLabel={<MdOutlineKeyboardDoubleArrowLeft />}
          nextLabel={<MdOutlineKeyboardDoubleArrowRight />}
          previousClassName="text-indigo-600 text-3xl cursor-pointer "
          nextClassName="text-indigo-600 text-3xl cursor-pointer"
          pageCount={2}
          activeClassName="bg-indigo-500 text-white p-2 rounded-full w-6 h-6 flex items-center  justify-center "
          disabledClassName="opacity-30 pointer-events-none"
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
};
