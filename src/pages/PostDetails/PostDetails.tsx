import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import {
  PostDetailsDescription,
  PostDetailsImage,
  PostDetailsTitle,
} from "./index";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { AddComments, CommentList } from "../../Components/comments";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getSinglePost } from "../../services/postServices";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {Loading} from "../../Components/ui/Loading";

export const PostDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  useScrollToTop();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["PostDetails", id],
    queryFn: () => getSinglePost(id!),
  });
  

  if (isLoading) return <Loading/>;
  if (isError) return toast.error(error.message);
  const { title, image, content, author , createdAt } = data;


  return (
    <section className="py-20 px-8 md:px-16 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-8">
        <div className="md:grid md:grid-cols-12 gap-8 ">
          <PostDetailsImage image={image.url} title={title} />
          <PostDetailsTitle title={title} author={author} createdAt ={createdAt} />
        </div>
        <PostDetailsDescription description={content} />
      </div>

      {user && (
        <div className="md:flex justify-between mt-3 items-center px-8">
          <div className="likes-icon flex gap-3 items-center justify-center mt-5 ">
            <SlLike className="text-2xl cursor-pointer text-blue-700 hover:rotate-6 transition-transform" />
            {/* <small>{likes}</small> */}
            <SlDislike className="text-2xl cursor-pointer" />
          </div>
        </div>
      )}

      <hr className="mt-8 mb-2 border-gray-300" />
      <h3 className="text-3xl font-semibold px-8 mb-5">Comments:</h3>

      {user ? (
        <AddComments />
      ) : (
        <p className="px-8 font-medium">
          You must be logged in to add comments.{" "}
          <Link
            className="underline ms-1 text-indigo-600 font-bold"
            to="/login"
          >
            Login
          </Link>
        </p>
      )}
      <CommentList />
    </section>
  );
};
