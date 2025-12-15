import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { Button, Input, Textarea } from "../Components/ui";

export const ContactUs = () => {
  return (
    <section className="my-20  pt-10 md:pt-0">
      <div className="container shadow-lg rounded-lg justify-center md:py-15 md:mt-32 mx-auto md:flex items-center  gap-16">
        <div className="content text-center md:text-left  ">
          <h3 className="text-4xl text-indigo-500 font-semibold">
            Get In Touch
          </h3>
          <span className="text-indigo-400 italic my-4 block">
            I'd like to hear from you!
          </span>
          <p className="text-sm text-gray-600 w-80 mb-5 mx-auto md:mx-0 ">
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
        <form className="form  mt-8 space-y-3 px-3 md:px-0">
          <div className="flex items-center gap-2 ">
            <Input placeholder="FirstName..." />
            <Input placeholder="LastName..." />
          </div>
          <Input placeholder="Email..." />
          <Textarea placeholder="Message..." />
          <Button>Send</Button>
        </form>
      </div>
    </section>
  );
};
