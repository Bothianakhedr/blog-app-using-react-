import { Link } from "react-router-dom";
import bg from "../../../assets/image/bg.jpg";
import { Button, ErrorMessage, Input } from "../../../Components/ui/index";
import { useLogin } from "../hooks/useLogin";
import { login_Form } from "../data";


export const Login = () => {
  const { handleSubmit, errors, register, onSubmit, isLoading } = useLogin();
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" bg-center bg-cover h-screen"
    >
      <div className="bg-black/50 h-full flex items-center justify-center ">
        <div className=" border-15 border-gray-300/15 w-full max-w-[500px] rounded-xl">
          <form
            className="bg-white rounded-md  p-10   "
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-center mb-6 font-semibold text-xl ">
              Login To Get Access !
            </h1>
            {login_Form.map(({ label, name, placeholder, type, id }) => (
              <div key={id} className="mb-2">
                <label className="text-[11px]  font-medium " htmlFor={id}>
                  {label}
                </label>
                <Input
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  {...register(name)}
                />
                {errors[name] && <ErrorMessage msg={errors[name].message} />}
                {type === "password" && (
                  <div className=" text-sky-500 hover:text-sky-600  transition underline text-end my-1   text-[13px]">
                    <Link to={"/forgotPassword"}>forgotPassword?</Link>
                  </div>
                )}
              </div>
            ))}
            <Button isLoading={isLoading}>Login</Button>
            <p className="text-[13px] text-center mt-2 font-medium">
              Don't have an account?
              <Link
                className="text-sky-500 ms-1 font-semibold underline"
                to="/register"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
