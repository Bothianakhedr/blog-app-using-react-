import {  Link } from "react-router-dom";
import Img from "../../../assets/image/photo-1488190211105-8b0e65b80b4e.avif";
import { URLS } from "../../../Components/Layout/Url";
import { formateDate } from "../helpers/formateDate";
import type { PostCardData, PostResponse } from "../HomeTypes";
import { BsThreeDots } from "react-icons/bs";
import { useContext, useState } from "react";
import { deletePost, updatePost } from "../../../services/postServices";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthContext";
import { Button, Input, Modal, Textarea } from "../../../Components/ui";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { PostDataType } from "../../../types";

export const PostCard = ({ post }: PostCardData) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenUPdateModal, setIsOpenUpdateModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const { title, author, _id, createdAt, content, image } = post;
  const formattedDate = formateDate(createdAt);
  const queryClient = useQueryClient();

  const currentUserId = user?.id 
  const authorId = author?._id 
  const isOwner = !!(currentUserId && authorId && currentUserId === authorId);

  const handleDeletePost = () => {
    Swal.fire({
      title: "Are you sure you want to delete this post?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsOpenDropDown(false);
        deletePost(_id);
        queryClient.invalidateQueries({ queryKey: ["latestPosts"] });

        Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success",
        });
      }
    });
  };
  const onOpenUpdateModal = (post: PostResponse) => {
    console.log(post);
    setIsOpenDropDown(false);

    setIsOpenUpdateModal(true);
    reset({
      title: post.title,
      content: post.content,
    });
  };
  const onCloseUpdateModal = () => {
    setIsOpenUpdateModal(false);
  };

  const { register, handleSubmit, reset } = useForm<PostDataType>({
    defaultValues: {
      title: "",
      content: "",
      image: undefined,
    },
  });

  const onSubmit: SubmitHandler<PostDataType> = (data) => {
    setIsLoading(true);
    const { title, content, image } = data;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image?.length) formData.append("image", image[0]);

    updatePost({ post, formData, onCloseUpdateModal, setIsLoading });
    queryClient.invalidateQueries({ queryKey: ["latestPosts"] });
    queryClient.invalidateQueries({ queryKey: ["allPosts"] });
  };

  return (
    <article className="post-card h-full flex flex-col overflow-hidden rounded-xl shadow dark:shadow-none hover:shadow-lg  hover:-translate-y-1 transition-all  duration-300  dark:bg-slate-800">
      <div>
        <img
          src={image?.url || Img}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2 border-b border-indigo-100 pb-2">
          <p className="text-indigo-600 font-semibold text-[13px]  dark:text-indigo-300">
            Author:{" "}
            <Link to="" className="text-black hover:underline dark:text-white">
              {author?.name}
            </Link>
          </p>
          <span className="text-indigo-600 text-xs dark:text-indigo-300">
            {createdAt ? formattedDate : "Unknown date"}
          </span>
        </div>

        <div className="mb-3">
          <h3 className="font-semibold text-lg leading-snug dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 line-clamp-2 dark:text-slate-400">
            {content}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <Link
            to={URLS.viewPost(_id)}
            className="inline-block bg-indigo-600 hover:bg-indigo-500 transition-colors text-white rounded-md px-4 py-2 text-sm"
          >
            Read More
          </Link>

          {isOwner && (
            <div className="relative">
              <BsThreeDots
                className="text-gray-500 cursor-pointer text-2xl hover:text-black transition-colors dark:text-white dark:hover:text-white"
                onClick={() => setIsOpenDropDown((prev) => !prev)}
              />
              {isOpenDropDown ? (
                <ul className="absolute space-y-1 -right-3.5 shadow -top-16  bg-gray-50 rounded-md px-3 py-2">
                  <li>
                    {" "}
                    <button
                      onClick={() => {
                        onOpenUpdateModal(post);
                      }}
                      className=" text-indigo-700 cursor-pointer font-semibold text-[15px] "
                    >
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleDeletePost}
                      className="text-red-700 cursor-pointer font-semibold text-[15px] "
                    >
                      delete
                    </button>
                  </li>
                </ul>
              ) : null}
            </div>
          )}

          <Modal
            isOpen={isOpenUPdateModal}
            title="updateModal"
            closeModal={() => {
              setIsOpenUpdateModal(false);
            }}
          >
            <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <Input
                {...register("image")}
                type="file"
                className="p-4 rounded-md w-full border-2 border-dashed border-indigo-300 focus:border-sky-400 focus:ring-0 text-gray-500 text-sm cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200"
              />
              <Input {...register("title")} />
              <Textarea {...register("content")} />
              <div className="flex justify-between ">
                <Button width="w-fit" isLoading={isLoading}>
                  Update
                </Button>{" "}
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </article>
  );
};
