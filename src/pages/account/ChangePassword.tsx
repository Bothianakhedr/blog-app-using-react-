import { Button } from "../../Components/ui/Button";
import { Input } from "../../Components/ui/Input";
import bg from "../../assets/image/bg.jpg";

export const ChangePassword = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className=" bg-center bg-cover h-screen"
    >
      <div className="bg-black/50 h-full flex items-center justify-center ">
        <div className=" border-15 border-gray-300/15 w-full max-w-[500px] rounded-xl">
          <form className="bg-white rounded-md  p-10   ">
            <h1 className="text-center mb-6 font-semibold text-xl ">change password</h1>
            <div className="mb-2">
              <Input
                name="currentPassword"
                type="password"
                placeholder="current password"
              />
            </div>
            <div className="mb-2">
              <Input
                name="NewPassword"
                type="password"
                placeholder="New password"
              />
            </div>
            <div className="mb-2">
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm New Password "
              />
            </div>
            <Button>change password</Button>
          </form>
        </div>
      </div>
    </div>
  );
};
