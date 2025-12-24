import { toast } from "react-toastify";
import { PostCard } from "./Components/PostCard";
import { useGetLatestPosts } from "./hooks/useGetLatestPosts";
import type { PostResponse } from "./HomeTypes";
import ReusableSkelton from "../../Components/ui/ReusableSkelton";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";

export const LatestPosts = () => {
    const {term}= useContext(SearchContext)
  
  const { data, isLoading, isError, error } = useGetLatestPosts();
  console.log(data);
  
  if (isLoading) return <ReusableSkelton />;
  if (isError) return toast.error(error.message);

   const filteredPosts = data?.filter((post: PostResponse) =>
  post.title.toLowerCase().includes(term.toLowerCase()) ||
  post.content.toLowerCase().includes(term.toLowerCase())
);
  return (
    <div className="post-list  flex-9 mx-3  lg:mx-0 mt-13 grid gap-6  lg:grid-cols-2 xl:grid-cols-3 ">
      {filteredPosts?.map((post: PostResponse) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};
