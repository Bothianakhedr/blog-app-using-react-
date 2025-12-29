import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import { useGetLatestPosts } from "./hooks/useGetLatestPosts";
import ReusableSkeleton from "../../Components/ui/ReusableSkelton";
import { toast } from "react-toastify";
import { PostCard } from "./Components/PostCard";
import type { PostResponse } from "./HomeTypes";

export const LatestPosts = () => {
  const { term } = useContext(SearchContext);
  const { data, isLoading, isError, error } = useGetLatestPosts();

  

  if (isLoading) return <ReusableSkeleton />;

  if (isError) {
    toast.error(error?.message || "Something went wrong!");
    return (
      <div className="text-red-500 text-center mt-10">Error loading posts.</div>
    );
  }

  // فلترة البيانات بناءً على النص
  const filteredPosts = term
    ? data?.filter(
        (post: PostResponse) =>
          post.title.toLowerCase().includes(term.toLowerCase()) ||
          post.content.toLowerCase().includes(term.toLowerCase())
      )
    : data;

  return (
    <div className="container mx-auto py-10">
      <div className="post-list flex-9 mx-3 lg:mx-0 mt-13 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredPosts && filteredPosts.length > 0 ? (
          filteredPosts.map((post: PostResponse) => (
            <PostCard key={post._id} post={post} />
          ))
        ) : (
          <div className="text-center text-gray-500 col-span-full py-20">
            <p className="text-xl"> No posts found on this page.</p>
          </div>
        )}
      </div>
    </div>
  );
};
