import { PostCard } from "../../Components/ui";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { toast } from "react-toastify";
import type { PostResponse } from "../Home/HomeTypes";
import { useGetAllPosts } from "./hooks/useGetAllPosts";
import ReusableSkelton from "../../Components/ui/ReusableSkelton";
import {Pagination} from "../../Components/ui/Paginator";
import { useState } from "react";

export const Posts = () => {
  const [page, setPage] = useState(1);
  useScrollToTop();
  
  const { data, isError, error, isLoading } = useGetAllPosts(page);
 
  
  if (isLoading) return <ReusableSkelton />;

  if (isError) return toast.error(error.message);
 
  function onClickPrev() {
    setPage((prev) => prev - 1);
  }
  function onClickNext() {
    setPage((prev) => prev + 1);
  }

  return (
    <section className="mt-20">
      <div className="container mx-auto px-4 lg:px-0 ">
        <h2 className="border-b-2 border-indigo-300 font-semibold text-3xl  w-fit">
          All Posts
        </h2>

        <div className=" md:my-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data?.data?.map((post: PostResponse) => (
            <PostCard key={post._id} post={post} />
          ))}
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
