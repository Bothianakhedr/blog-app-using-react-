import { axiosInstance } from "../../../config/axiosConfig";
import type { LoginFormInputs, RegisterFormInputs } from "../authTypes/authTypes";

 export const registerServices = async (data: RegisterFormInputs) => {
  const { data: ResponseData } = await axiosInstance.post(
    "api/auth/register",
    data
  );
  return ResponseData;
};
 export const loginServices = async (data: LoginFormInputs) => {
  const { data: ResponseData } = await axiosInstance.post(
    "api/auth/login",
    data
  );
  return ResponseData;
};

