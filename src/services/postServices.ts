import { toast } from "react-toastify";
import { axiosInstance } from "../config/axiosConfig";
import type { AxiosError } from "axios";
import type { ErrorResponseType, PostDataType } from "../types";
import type { CreatePostParams } from "./ServicesType";
import type { PostResponse } from "../pages/Home/HomeTypes";

export const createPost = async ({
  formData,
  navigate,
  setIsLoading,
}: CreatePostParams) => {
  try {
    const { data } = await axiosInstance.post("api/posts", formData);
    console.log(data);

    toast.success(data.message, {
      autoClose: 500,
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  } catch (error) {
    const errorObj = error as AxiosError<ErrorResponseType>;
    toast.error(errorObj.response?.data.message);
  } finally {
    setIsLoading(false);
  }
};

export const getAllPosts = async (page: number) => {
  const { data } = await axiosInstance.get(`api/posts?limit=3&page=${page}`);
  console.log(data);
  return data;
};
export const getLatestPosts = async () => {
  const { data } = await axiosInstance.get("api/posts/latest");
  console.log(data);
  return data.data;
};

export const getSinglePost = async (id: string) => {
  const { data } = await axiosInstance.get(`api/posts/${id}`);

  return data.data;
};

export const deletePost = async (id: string) => {
  const { data } = await axiosInstance.delete(`api/posts/${id}`);
  return data;
};

export type UpdatePostParams = {
  formData: PostDataType | FormData;
  setIsLoading: (val: boolean) => void;
  onCloseUpdateModal: () => void;
  post: PostResponse;
};

export const updatePost = async ({
  post,
  formData,
  onCloseUpdateModal,
  setIsLoading,
}: UpdatePostParams) => {
  try {
    const { data } = await axiosInstance.put(`api/posts/${post._id}`, formData);
      toast.success(data.message, {
        autoClose: 500,
      });
      onCloseUpdateModal();
     
    }
   catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
