import { motion } from "framer-motion";

type PostDetailsImageType = {
  image: string;
  title: string;
};
export const PostDetailsImage = ({ image, title }: PostDetailsImageType) => {
  return (
    <div className="image col-span-5">
      <motion.img
        src={image}
        alt={title}
        className="rounded-md shadow-lg w-full"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};
