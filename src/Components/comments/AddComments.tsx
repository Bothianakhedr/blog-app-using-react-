import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button, Textarea } from "../ui";
import { toast } from "react-toastify";

export const AddComments = () => {
    const [comment, setComment] = useState("")

   const handleSubmit =(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!comment.trim()) return toast.warn("write a comment please")
     console.log(comment);
     

   }

    return (
    <form className="px-8 mt-8" onSubmit={handleSubmit}>
      <Textarea
      value={comment}
      onChange={(e :ChangeEvent<HTMLTextAreaElement> )=>{setComment(e.target.value)}}
        className="p-2 rounded-md border-2 w-full  border-gray-300   focus:outline-sky-300 focus:ring-1 focus:ring-sky-300 focus:border-sky-300   "
        placeholder="Write a Comment ...."
      />
      <Button width="w-fit">comment</Button>
    </form>
  );
};
