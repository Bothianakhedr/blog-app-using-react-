export type PostDataType = {
  title: string;
  content: string;
  image: FileList | undefined;
  author?: string;
};
export type ErrorResponseType = {
  message: string;
};
