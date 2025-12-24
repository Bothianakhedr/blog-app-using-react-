import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import type { PostDataType } from "../../../types";
import { PostValidation } from "../../../validation/validation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPost } from "../../../services/postServices";

export const useCreatePost = () => {
  const [previewImage, setPreviewImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostDataType>({
    resolver: yupResolver(PostValidation),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<PostDataType> = (data) => {
    setIsLoading(true);

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("content", data.content);

    if (data.image && data.image[0]) {
      formData.append("image", data.image[0]);
    }

    if (user?.name) {
      formData.append("author", user.name);
    }

    createPost({ formData, navigate, setIsLoading });
  };

  const handlePreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    console.log(url);

    setPreviewImage(url);
  };
  return {
    handlePreviewImage,
    onSubmit,
    register,
    errors,
    handleSubmit,
    isLoading,
    previewImage,
  };
};
