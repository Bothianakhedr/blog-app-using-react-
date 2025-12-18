import { useForm, type SubmitHandler } from "react-hook-form";
import type { RegisterFormInputs } from "../authTypes/authTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormValidation } from "../authValidation/validation";
import { useState } from "react";
import { registerServices } from "../authServices/registerServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(registerFormValidation),
    mode: "onBlur",
  });

  console.log(watch("password"));
  
  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    setIsLoading(true);
    try {
      const responseData = await registerServices(data);
      toast.success(responseData.message);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      const errorObj = error as AxiosError;
      toast.error(errorObj.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { register, handleSubmit, errors, onSubmit, isLoading };
};
