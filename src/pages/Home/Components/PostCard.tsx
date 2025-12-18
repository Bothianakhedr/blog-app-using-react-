import { Link } from "react-router-dom";
import Img from "../../../assets/image/photo-1488190211105-8b0e65b80b4e.avif";
import { URLS } from "../../../Components/Layout/Url";
import { formateDate } from "../helpers/formateDate";
import type { PostCardData } from "../HomeTypes";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { deletePost } from "../../../services/postServices";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";

export const PostCard = ({ post }: PostCardData) => {
  const [isOpen, setIsOpen] = useState(false);

  const { title, author, _id, createdAt, content, image } = post;
  const formattedDate = formateDate(createdAt);
  const queryClient = useQueryClient();

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
        setIsOpen(false);
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

  return (
    <article  className="post-card  h-full  flex flex-col overflow-hidden rounded-xl shadow dark:shadow-none hover:shadow-lg  hover:-translate-y-1 transition-all  duration-300  dark:bg-slate-800
">
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
          <h3 className="font-semibold text-lg leading-snug dark:text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-600 line-clamp-2 dark:text-slate-400">{content}</p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <Link
            to={URLS.viewPost(_id)}
            className="inline-block bg-indigo-600 hover:bg-indigo-500 transition-colors text-white rounded-md px-4 py-2 text-sm"
          >
            Read More
          </Link>

          <div className="relative">
            <BsThreeDots
              className="text-gray-500 text-2xl hover:text-black transition-colors dark:text-white dark:hover:text-white"
              onClick={() => setIsOpen((prev) => !prev)}
            />
            {isOpen ? (
              <ul className="absolute space-y-1 -right-3.5 shadow -top-16  bg-gray-50 rounded-md px-3 py-2">
                <li>
                  {" "}
                  <button className=" text-indigo-500 cursor-pointer font-semibold text-[15px] italic">
                    Edit
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleDeletePost}
                    className="text-red-500 cursor-pointer font-semibold text-[15px] italic"
                  >
                    delete
                  </button>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};
