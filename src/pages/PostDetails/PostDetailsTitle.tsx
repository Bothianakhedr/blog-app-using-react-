import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../services/postServices";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

type PostDetailsTitleType = {
  id: string;
  title: string;
  author: string;
  onOpenEditPostModal: () => void;
};
export const PostDetailsTitle = ({
  title,
  author,
  onOpenEditPostModal,
  id,
}: PostDetailsTitleType) => {
  const navigate = useNavigate();
  const {user} = useContext(AuthContext)
  // handlers
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
        deletePost({ id  , navigate});
        Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <motion.div
      className="text-center md:text-left mt-3 col-span-7"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <h2 className="font-bold my-1 text-2xl">{title}</h2>
      <h5 className="font-semibold md:font-medium text-[14px] my-2">
        created By:{" "}
        <span className="text-indigo-600  md:text-[15px]">{author}</span>
      </h5>
     {user &&  <div className="flex mt-4  gap-2 items-center ">
        <button
          onClick={() => onOpenEditPostModal()}
          className=" bg-blue-700  font-medium text-white rounded-md px-2 py-1 cursor-pointer focus:outline-0 "
        >
          Edit
        </button>
        <button
          onClick={handleDeletePost}
          className=" bg-red-800 font-medium text-white rounded-md px-2 py-1 cursor-pointer focus:outline-0 "
        >
          Delete
        </button>{" "}
      </div>}
    </motion.div>
  );
};
