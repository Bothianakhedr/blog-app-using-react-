import { toast } from "react-toastify";
import { axiosInstance } from "../config/axiosConfig";
import type { AxiosError } from "axios";
import type { ErrorResponseType, PostDataType } from "../types";
import type {
  CreatePostParams,
  deletePostParams,
  GetAllPostsParams,
  getSinglePostParams,
} from "./ServicesType";
import type { PostType } from "../pages/Home/HomeTypes";
import type { NavigateFunction } from "react-router-dom";

export const createPost = async ({
  formData,
  navigate,
  setIsLoading,
}: CreatePostParams) => {
  try {
    const { data } = await axiosInstance.post("/api/v1/blogs", formData);
    if (data.status == "success") {
      toast.success(data.message, {
        autoClose: 1000,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  } catch (error) {
    const errorObj = error as AxiosError<ErrorResponseType>;
    toast.error(errorObj.response?.data.message);
  } finally {
    setIsLoading(false);
  }
};

export const getAllPosts = async ({ setPosts , pageNumber =1 }: GetAllPostsParams) => {
  try {
    const { data } = await axiosInstance.get(`api/v1/blogs?totalPages=${pageNumber}`);
    setPosts(data.data);
    console.log(data.data);
  } catch (error) {
    const errorObj = error as AxiosError<ErrorResponseType>;
    toast.error(errorObj.response?.data.message);
  }
};

export const getSinglePost = async ({ setPost, slug }: getSinglePostParams) => {
  try {
    const { data } = await axiosInstance.get(`/api/v1/blogs/${slug}`);
    setPost(data.data.blog);
  } catch (error) {
    const errorObj = error as AxiosError<ErrorResponseType>;
    toast.error(errorObj.response?.data.message);
  }
};

export const deletePost = async ({ id, navigate }: deletePostParams) => {
  try {
    const { data } = await axiosInstance.delete(`/api/v1/blogs/${id}`);

    if (data.status == "success") {
      navigate("/");
    }
  } catch (error) {
    const errorObj = error as AxiosError<ErrorResponseType>;
    toast.error(errorObj.response?.data.message);
  }
};

export type UpdatePostParams = {
  formData: PostDataType | FormData;
  navigate: NavigateFunction;
  setIsLoading: (val: boolean) => void;
  onCloseEditPostModal: () => void;
  post: PostType;
};

export const updatePost = async ({
  post,
  formData,
  onCloseEditPostModal,
  navigate,
  setIsLoading
}: UpdatePostParams) => {
  try {
    const { data } = await axiosInstance.put(
      `/api/v1/blogs/${post._id}`,
      formData
    );
    if (data.status === "success") {
      toast.success(data.message, {
        autoClose: 1000,
      });
      onCloseEditPostModal();
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    console.log(data);
  } catch (error) {
    console.log(error);
  }finally{
    setIsLoading(false)
  }
};
