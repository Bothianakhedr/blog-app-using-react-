import * as yup from "yup";

// create post

export const PostValidation = yup.object({
  image: yup.mixed<FileList>().required("image is required!"),

  title: yup
    .string()
    .required("title is required")
    .min(6, "title must be at least 6 characters"),

  content: yup
    .string()
    .required("content is required")
    .min(10, "content must be at least 10 characters"),
});
