type ErrorMessageProps = {
  msg?: string;
}

export const ErrorMessage = ({ msg }: ErrorMessageProps) => {
  return  msg? <span className="text-[13px] text-red-700 font-semibold">{msg}</span> : null;
};
