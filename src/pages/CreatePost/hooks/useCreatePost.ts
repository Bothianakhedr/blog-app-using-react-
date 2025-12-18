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
  const { user, token } = useContext(AuthContext);
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
    const { title, content, image } = data;
    const formData = new FormData();
    const dataToSend = {
      title,
      content,
      image: image[0],
      author: user?.name,
    };

    Object.entries(dataToSend).forEach(([key, value]) =>
      formData.append(key, value)
    );

    createPost({ formData, token, navigate, setIsLoading });
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
