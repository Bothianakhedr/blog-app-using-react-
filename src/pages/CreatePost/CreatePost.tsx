import Img from "../../assets/image/bg.jpg";
import { Button, ErrorMessage, Input, Textarea } from "../../Components/ui";
import { useCreatePost } from "./hooks/useCreatePost";

export const CreatePost = () => {
  const {
    register,
    onSubmit,
    isLoading,
    handlePreviewImage,
    handleSubmit,
    errors,
    previewImage,
  } = useCreatePost();

  return (
    <section className="mt-20">
      <div className="container mx-auto px-4 ">
        <h2 className="font-semibold text-7xl">
          Add <span className="text-sky-600 ">Post</span>
        </h2>

        <div className="grid lg:grid-cols-2 my-10 gap-12 ">
          <div className="image md:mt-7 lg:mt-3">
            <img
              src={previewImage === "" ? Img : previewImage}
              alt="preview"
              className=" w-full lg:w-[600px] shadow-xl rounded-xl object-cover "
            />
          </div>

          <div className="form  md:mt-3">
            <form className="space-y-2.5" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2">
                <label className="text-[13px]" htmlFor="cover">
                  Cover photo
                </label>
                <input
                  {...register("image")}
                  id="cover"
                  type="file"
                  onChange={handlePreviewImage}
                  className="p-4 rounded-md border-2 border-dashed border-indigo-300 focus:border-sky-400 focus:ring-0 text-gray-500 text-sm cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-sky-100 file:text-sky-700 hover:file:bg-sky-200"
                />
                {errors.image && <ErrorMessage msg={errors.image.message} />}
              </div>

              <div>
                <label className="text-[13px]" htmlFor="title">
                  Title
                </label>
                <Input placeholder="title" {...register("title")} />
                {errors.title && <ErrorMessage msg={errors.title.message} />}
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px]" htmlFor="content">
                  content
                </label>

                <Textarea
                  className="p-2 rounded-md border-2  border-gray-300   focus:outline-sky-300 focus:ring-1 focus:ring-sky-300 focus:border-sky-300   "
                  placeholder="Type content"
                  {...register("content")}
                />
                {errors.content && (
                  <ErrorMessage msg={errors.content.message} />
                )}
              </div>

              <Button width="w-fit" isLoading={isLoading}>
                Add Post
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
