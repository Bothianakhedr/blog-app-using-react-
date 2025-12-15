import { useForm, type SubmitHandler } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  Input,
  Modal,
  Textarea,
} from "../../Components/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { PostValidation } from "../../validation/validation";
import type { PostType } from "../Home/HomeTypes";
import type { PostDataType } from "../../types";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { updatePost } from "../../services/postServices";

type UpdatePostModalType = {
  isOpenEditPostModal: boolean;
  onCloseEditPostModal: () => void;
  post: PostType;
};
export const UpdatePostModal = ({
  isOpenEditPostModal,
  onCloseEditPostModal,
  post,
}: UpdatePostModalType) => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostDataType>({
    resolver: yupResolver(PostValidation),
  });

  useEffect(() => {
    reset({
      title: post.title,
      content: post.content,
    });
  }, [post.content, post.title, reset]);
  const onSubmit: SubmitHandler<PostDataType> = async (data) => {

    const { title, content, image } = data;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image[0]);
    formData.append("published", "true");
    formData.append("author", user.name);
      setIsLoading(true)

    updatePost({
      post,
      onCloseEditPostModal,
      navigate,
      formData,
      setIsLoading,
    });
  };

  return (
    <Modal
      isOpen={isOpenEditPostModal}
      closeModal={onCloseEditPostModal}
      title="update Post"
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700" htmlFor="cover">
            Cover photo
          </label>
          <input
            {...register("image")}
            id="cover"
            type="file"
            className="p-4 rounded-md border-2 border-dashed border-indigo-300 focus:border-sky-400 focus:ring-0 text-gray-500 text-sm cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200"
          />
          {errors?.image && <ErrorMessage msg={errors.image.message} />}
        </div>
        <div>
          <label className="text-[13px]" htmlFor="title">
            Title
          </label>
          <Input {...register("title")} />
          {errors?.title && <ErrorMessage msg={errors.title.message} />}
        </div>
        <div>
          <label className="text-[13px]" htmlFor="content">
            content
          </label>
          <Textarea {...register("content")} />
          {errors?.content && <ErrorMessage msg={errors.content.message} />}
        </div>
        <div className="flex gap-2  items-center">
          <Button
          width="w-fit"
            isLoading={isLoading}
            type="submit"
          >
            update
          </Button>
          <Button
            onClick={onCloseEditPostModal}
            className="bg-gray-500 p-1.5 rounded-md mt-2.5 text-white cursor-pointer focus:outline-none  hover:bg-gray-300  font-semibold"
          >
            cancel
          </Button>
        </div>
      </form>
    </Modal>
  );
};
