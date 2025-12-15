import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";



export const CommentList = () => {
 

  return (
    <div className="mt-5 px-10 space-y-6">
      <div className="bg-gray-50 rounded-md p-4">
          <h3 className="userName font-semibold ">Bothiana</h3>
        <p className="hover:text-blue-500 transition-colors">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
          asperiores.{" "}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex gap-4 mt-2">
            <AiOutlineLike className="cursor-pointer text-xl" />
            <FaRegComment className="cursor-pointer text-xl" />
            <span className="text-sm">2 hours</span>
          </div>

         
        </div>
      </div>
    </div>
  );
};
