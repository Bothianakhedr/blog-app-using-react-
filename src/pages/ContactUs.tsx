import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Button, ErrorMessage, Input, Textarea } from "../Components/ui";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactUsSchema } from "../validation/validation";

type ContactUsInputsType = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};
export const ContactUs = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactUsInputsType>({
    resolver: yupResolver(ContactUsSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ContactUsInputsType> = (data) => {
    console.log(data);
  };

  return (
    <section className="py-20 pt-10 md:pt-0 dark:bg-gray-900 dark:text-white">
      <div className="container shadow-lg rounded-lg justify-center md:py-15 md:pt-32 mx-auto md:flex items-center  gap-16">
        <div className="content text-center md:text-left  ">
          <h3 className="text-4xl text-indigo-500 font-semibold">
            Get In Touch
          </h3>
          <span className="text-indigo-400 italic my-4 block">
            I'd like to hear from you!
          </span>
          <p className="text-sm text-gray-600 w-80 mb-5 mx-auto md:mx-0  dark:text-white">
            If you have any inquiries or just want to say hi , please use the
            contact form !
          </p>
          <div>
            <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
              <MdMarkEmailUnread />
              <a href="https://mail.google.com/" className="underline">
                bothianakhedr198@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start ">
              <div className="space-x-2 flex items-center ">
                <a href="https://www.linkedin.com/">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/">
                  <FaInstagramSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
        <form
          className="form  mt-8 space-y-3 px-3 md:px-0"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1">
              <Input placeholder="FirstName..." {...register("firstName")} />
              {errors.firstName && (
                <ErrorMessage msg={errors.firstName.message} />
              )}
            </div>
            <div className="flex-1">
              <Input placeholder="LastName..." {...register("lastName")} />
              {errors.lastName && (
                <ErrorMessage msg={errors.lastName.message} />
              )}
            </div>
          </div>
          <div>
            <Input placeholder="Email..." {...register("email")} />
            {errors.email && <ErrorMessage msg={errors.email.message} />}
          </div>

          <div>
            <Textarea placeholder="Message..." {...register("message")} />
            {errors.message && <ErrorMessage msg={errors.message.message} />}
          </div>
          <Button>Send</Button>
        </form>
      </div>
    </section>
  );
};
