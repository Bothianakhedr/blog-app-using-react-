import { useForm, type SubmitHandler } from "react-hook-form";
import type { LoginFormInputs } from "../authTypes/authTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidation } from "../authValidation/validation";
import { useState } from "react";
import { loginServices } from "../authServices/registerServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginFormValidation),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setIsLoading(true);
    try {
      const responseData = await loginServices(data);
      console.log(responseData);
      
      toast.success(responseData.message);
      localStorage.setItem("token" , JSON.stringify(responseData.data.token))
      localStorage.setItem("user" , JSON.stringify(responseData.data.user))
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
        const errorObj = error as AxiosError
        toast.error(errorObj.message)
    } finally {
      setIsLoading(false);
    }
  };
  return { register, handleSubmit, errors, onSubmit, isLoading };
};
