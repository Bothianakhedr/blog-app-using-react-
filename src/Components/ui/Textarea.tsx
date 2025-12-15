
type CustomTextarea =React.TextareaHTMLAttributes<HTMLTextAreaElement>


 export const Textarea = ({...rest} : CustomTextarea) => {
  return (
  
  <textarea rows={5}  className="p-2 w-full  text-[15px] rounded-xl border-2  border-gray-300   focus:outline-sky-300 focus:ring-1 focus:ring-sky-300 focus:border-sky-300   " {...rest}>
    </textarea>
  );
};

