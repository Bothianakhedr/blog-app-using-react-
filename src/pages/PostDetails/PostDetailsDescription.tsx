import { motion } from "framer-motion";

type PostDetailsDescriptionType={
    description:string
}
 export const PostDetailsDescription = ({description}:PostDetailsDescriptionType) => {
  return (
 <motion.p
          className="text-[15px] leading-8  text-center md:text-left md:mt-5"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          {description}

        </motion.p>  )
}

