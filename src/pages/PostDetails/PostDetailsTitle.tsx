import { motion } from "framer-motion";
import { formateDate } from "../Home/helpers/formateDate";

type PostDetailsTitleType = {
  title: string;
  createdAt:string,
  author: {
    name: string;
  };
};
export const PostDetailsTitle = ({ title, author , createdAt }: PostDetailsTitleType) => {
   const formattedDate = formateDate(createdAt);
 
  return (
    <motion.div
      className="text-center md:text-left mt-3 col-span-7"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <h2 className="font-semibold tracking-wider my-1 text-5xl">{title}</h2>
      <h5 className="font-semibold md:font-medium text-[14px] my-2">
        created By:{" "}
        <span className="text-indigo-600  md:text-[15px]">{author?.name}</span>
      </h5>
     <span className="text-gray-500 text-sm font-medium md:text-[15px]">{formattedDate}</span>
    
    </motion.div>
  );
};
