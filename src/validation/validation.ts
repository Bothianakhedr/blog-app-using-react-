import * as yup from "yup";

// create post

export const PostValidation = yup.object({
  image: yup.mixed<FileList>().required("image is required!"),

  title: yup
    .string()
    .required("title is required")
    .min(2, "title must be at least 2 characters").trim(),

  content: yup
    .string()
    .required("content is required").trim()
    .min(10, "content must be at least 10 characters"),
});

export const ContactUsSchema = yup.object({
  firstName: yup
    .string()
    .required("FirstName is required!")
    .min(3, "firstName must be at least 3 characters"),
  lastName: yup
    .string()
    .required("LastName is required!")
    .min(3, "lastName must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required!").email("Email must be a valid email"),
  message: yup
    .string()
    .required("Message is required!")
    .min(3, "message must be at least 3 characters"),
});
