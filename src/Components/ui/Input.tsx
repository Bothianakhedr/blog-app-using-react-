
type customInputProps = React.InputHTMLAttributes<HTMLInputElement> 


   export const Input = ({  ...rest}:customInputProps) => {
  return (
    <input className="border-2 text-[13px] border-gray-300 rounded-md w-full p-2 focus:outline-sky-500 focus:ring-1 focus:ring-sky-300 focus:border-sky-300  " {...rest} />
  )
}

