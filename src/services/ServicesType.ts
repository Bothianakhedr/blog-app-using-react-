import type { NavigateFunction } from "react-router-dom";
import type { PostDataType } from "../types";

export type CreatePostParams = {
  formData: PostDataType | FormData;
  token: string | null;
  navigate: NavigateFunction;
  setIsLoading: (val: boolean) => void;
};

export type deletePostParams = {
  id: string;
  navigate: NavigateFunction;
};
