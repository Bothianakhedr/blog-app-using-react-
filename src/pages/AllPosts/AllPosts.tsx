import {  Pagination, PostCard } from "../../Components/ui";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { toast } from "react-toastify";
import type { PostResponse } from "../Home/HomeTypes";
import { useGetAllPosts } from "./hooks/useGetAllPosts";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import ReusableSkeleton from "../../Components/ui/ReusableSkelton";
import { useSearchParams } from "react-router-dom";

export const Posts = () => {
  const [page, setPage] = useState(1);
  const { term ,setTerm } = useContext(SearchContext);
    const [searchParams, setSearchParams] = useSearchParams();
  
  useScrollToTop();

  const { data, isError, error, isLoading } = useGetAllPosts(page);


  useEffect(() => {
      const queryInUrl = searchParams.get("q");
      if (queryInUrl && queryInUrl !== term) {
        setTerm(queryInUrl);
      }
    }, []);
  
    useEffect(() => {
      if (term) {
        setSearchParams({ q: term }, { replace: true });
  
        const timeoutId = setTimeout(() => {
          window.find(term, false, false, true);
        }, 150);
  
        return () => clearTimeout(timeoutId);
      } else {
        setSearchParams({});
      }
    }, [term, setSearchParams]);
  if (isLoading) return <ReusableSkeleton/>;
  if (isError) return toast.error(error.message);


  
  function onClickPrev() {
    setPage((prev) => prev - 1);
  }
  function onClickNext() {
    setPage((prev) => prev + 1);
  }
  const filteredPosts = term
  ? data?.data?.filter(
      (post: PostResponse) =>
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.content.toLowerCase().includes(term.toLowerCase())
    )
  : data?.data;


  return (
    <section className="pt-20 md:px-15 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-0 ">
        <h2 className="border-b-2 border-indigo-300 font-semibold text-3xl  w-fit dark:text-white">
          All Posts
        </h2>

      <div className="post-list flex-9 mx-3 lg:mx-0 mt-13 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredPosts && filteredPosts.length > 0 ? (
  filteredPosts.map((post: PostResponse) => <PostCard key={post._id} post={post} />)
) : (
  <p className="text-center text-gray-500 col-span-full">
    No posts found on this page.
  </p>
)}
       </div>

      </div>

      <Pagination
        page={page}
        pages={data?.paginationInfo.pages}
        total={data?.paginationInfo.total}
        onClickPrev={onClickPrev}
        onClickNext={onClickNext}
      />
    </section>
  );
};
