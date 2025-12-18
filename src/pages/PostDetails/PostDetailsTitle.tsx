import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

type PostDetailsTitleType = {
  title: string;
};
export const PostDetailsTitle = ({ title }: PostDetailsTitleType) => {
  const { user } = useContext(AuthContext);

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
        <span className="text-indigo-600  md:text-[15px]">{user?.name}</span>
      </h5>
    </motion.div>
  );
};
