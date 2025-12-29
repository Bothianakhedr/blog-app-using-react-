
type CustomTextarea =React.TextareaHTMLAttributes<HTMLTextAreaElement>


 export const Textarea = ({...rest} : CustomTextarea) => {
  return (
  
  <textarea rows={5}  className="p-2 w-full  text-[15px] rounded-xl border-2  border-gray-300   focus:outline-sky-500 focus:ring-1 focus:ring-sky-300 focus:border-sky-300 dark:focus:outline-0 dark:focus:ring-0  " {...rest}>
    </textarea>
  );
};

