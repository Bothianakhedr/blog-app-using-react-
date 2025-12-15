import type { NavigateFunction } from "react-router-dom";
import type { PostDataType } from "../types";
import type { PostType } from "../pages/Home/HomeTypes";

export type CreatePostParams = {
  formData: PostDataType | FormData;
  token: string | null;
  navigate: NavigateFunction;
  setIsLoading: (val: boolean) => void;
};

export type GetAllPostsParams = {
setPosts?: React.Dispatch<React.SetStateAction<GetAllPostsResponse | undefined>>;
pageNumber?:number
};

 export type GetAllPostsResponse = {
  blogs: PostType[];
  pagination: {
    blogsPerPage: number;
    currentPage: number ;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    nextPage: number | null;
    prevPage: number | null;
    totalBlogs: number;
    totalPages: number;
  };
  
}

export type getSinglePostParams = {
  setPost: React.Dispatch<React.SetStateAction<PostType | null>>;
  slug: string | undefined;
};
export type deletePostParams = {
  id:string
  navigate :NavigateFunction
 
};
