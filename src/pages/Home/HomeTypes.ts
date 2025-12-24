export type PostResponse = {
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
    _id:string
  };
  _id: string;
  image: {
    url: string;
  };
};

export type PostCardData = {
  post: PostResponse;
};
