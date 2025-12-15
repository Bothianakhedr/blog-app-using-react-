import { Button, Input } from "../../Components/ui";
import bg from "../../assets/image/bg.jpg";

export const ForgotPassword = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" bg-center bg-cover h-screen"
    >
      <div className="bg-black/50 h-full flex items-center justify-center ">
        <div className=" border-15 border-gray-300/15 w-full max-w-[500px] rounded-xl">
          <form className="bg-white rounded-md  p-10   ">
            <h1 className="text-center mb-6 font-semibold text-xl ">
              Forgot password
            </h1>
            <Input
              name="email"
              type="email"
              id="email"
              placeholder="Email..."
            />
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
