import type { LoginInputData, RegisterInputData } from "../authTypes/authTypes";

export const register_Form: RegisterInputData[] = [
  {
    label: "Name",
    placeholder: "Name...",
    type: "text",
    name: "name",
    id: "userName",
  },
  {
    label: "Email",
    placeholder: "Email...",
    type: "email",
    name: "email",
    id: "email",
  },
  {
    label: "Password",
    placeholder: "Password",
    type: "password",
    name: "password",
    id: "password",
  },
];
export const login_Form: LoginInputData[] = [
  {
    label: "Email",
    placeholder: "Email...",
    type: "email",
    name: "email",
    id: "email",
  },
  {
    label: "Password",
    placeholder: "Password",
    type: "password",
    name: "password",
    id: "password",
  },
];
