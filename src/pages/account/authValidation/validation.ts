import * as yup from "yup";


export const registerFormValidation = yup.object({
  name: yup
    .string()
    .required("name is required!")
    .min(6, "userName must be at least 6 character"),
  email: yup.string().required("email is required!").email("invalid email"),
  password: yup
    .string()
    .required("password is required!")
    .min(6, "password must be at least 6 character"),
});
export const loginFormValidation = yup.object({
  email: yup.string().required("email is required!").email("invalid email"),
  password: yup
    .string()
    .required("password is required!")
    .min(6, "password must be at least 6 character"),
});