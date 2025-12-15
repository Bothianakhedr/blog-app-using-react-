import { SlDislike } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import {
  PostDetailsDescription,
  PostDetailsImage,
  PostDetailsTitle,
} from "./index";
import { useEffect, useState } from "react";
import { UpdatePostModal } from "./UpdatePostModal";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { AddComments, CommentList } from "../../Components/comments";
import { useParams } from "react-router-dom";
import type { PostType } from "../Home/HomeTypes";
import { getSinglePost } from "../../services/postServices";

export const PostDetails = () => {
  const [isOpenEditPostModal, setIsOpenEditPostModal] = useState(false);
  const [post, setPost] = useState<PostType | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    getSinglePost({ slug, setPost });
  }, []);

  useScrollToTop();
  if (!post) {
    return <h2> not posts yet !</h2>;
  }

  const { title, author, content, image, _id } = post;
  
  // handler
  const onOpenEditPostModal = () => {
    setIsOpenEditPostModal(true);
  };
  const onCloseEditPostModal = () => {
    setIsOpenEditPostModal(false);
  };
  return (
    <section className="my-20 px-8 md:px-16">
      <div className="container mx-auto px-8">
        <div className="md:grid md:grid-cols-12 gap-8 ">
          <PostDetailsImage image={image} title={title} />
          <PostDetailsTitle
            onOpenEditPostModal={onOpenEditPostModal}
            title={title}
            author={author}
            id={_id}
          />
        </div>
        <PostDetailsDescription description={content} />
      </div>

      <div className="md:flex justify-between mt-3 items-center px-8  ">
        <div className="likes-icon flex gap-3 items-center justify-center mt-5 ">
          <SlLike className="text-2xl cursor-pointer text-blue-700 hover:rotate-6 transition-transform" />
          {/* <small>{likes}</small> */}
          <SlDislike className="text-2xl cursor-pointer" />
        </div>
      </div>

      <hr className="mt-8 mb-2 border-gray-300" />
      <h3 className="text-3xl font-semibold px-8 mb-5">Comments:</h3>

      <AddComments />
      <CommentList />

      {/* update Modal */}
      <UpdatePostModal
      post={post}
        isOpenEditPostModal={isOpenEditPostModal}
        onCloseEditPostModal={onCloseEditPostModal}
      />
    </section>
  );
};
