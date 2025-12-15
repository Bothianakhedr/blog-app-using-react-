import {  useEffect, useState } from "react";
import Skeleton from "./Components/Skeleton";
import { PostCard } from "./Components/PostCard";
import type { PostType } from "./HomeTypes";
import { getAllPosts } from "../../services/postServices";
import type { GetAllPostsResponse } from "../../services/ServicesType";
export const LatestPosts = () => {
  const [posts, setPosts] = useState<GetAllPostsResponse>();

  useEffect(() => {
    getAllPosts({ setPosts });
  }, []);
  return (
    <div className="post-list  flex-9 mx-3 lg:mx-0 mt-13 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {posts?.blogs.length ? (
        posts?.blogs.map((post: PostType) => (
          <PostCard post={post} key={post._id} />
        ))
      ) : (
        <>
          {Array.from({ length: 6 }, (_, index) => (
            <Skeleton key={index} />
          ))}
        </>
      )}
    </div>
  );
};
