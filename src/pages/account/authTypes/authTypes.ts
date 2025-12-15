// related to register
export type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
};

export type RegisterInputData = {
  placeholder: string;
  type: string;
  label: string;
  name: keyof RegisterFormInputs;
  id: string;
};
export type ErrorResponseType = {
  message: string;
};

// related to login
export type LoginFormInputs = {
  email: string;
  password: string;
};

export type LoginInputData = {
  placeholder: string;
  type: string;
  label: string;
  name: keyof LoginFormInputs;
  id: string;
};
