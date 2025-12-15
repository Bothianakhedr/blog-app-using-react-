import { Link } from "react-router-dom";
import Img from "../../../assets/image/photo-1488190211105-8b0e65b80b4e.avif";
import { URLS } from "../../../Components/Layout/Url";
import { formateDate } from "../helpers/formateDate";
import type { PostCardData } from "../HomeTypes";

export const PostCard = ({ post }: PostCardData) => {
  const { title, slug, author, _id, createdAt, excerpt, image } = post;
  const formattedDate = formateDate(createdAt);
  return (
    <article className="post-card h-full  flex flex-col overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow ">
      <div>
        <img
          src={image || Img}
          alt={title}
          className="w-full h-50 object-cover "
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2 border-b border-indigo-100 pb-2">
          <p className="text-indigo-600 font-semibold text-sm">
            Author:{" "}
            <Link to={`/profile/${_id}`} className="text-black hover:underline">
              {author}
            </Link>
          </p>
          <span className="text-indigo-600 text-xs">
            {createdAt ? formattedDate : "Unknown date"}
          </span>
        </div>

        <div className="mb-3">
          <h3 className="font-semibold text-lg leading-snug">{title}</h3>
          <p className="mt-2 text-sm text-gray-500 line-clamp-3">{excerpt}</p>
        </div>

        <div className="mt-auto">
          <Link
            to={URLS.viewPost(slug)}
            className="inline-block bg-indigo-600 hover:bg-indigo-500 transition-colors text-white rounded-md px-4 py-2 text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};
