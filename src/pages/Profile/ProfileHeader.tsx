import Swal from "sweetalert2";
import img from "../../assets/image/download.jpg";
import { useState, type ChangeEvent } from "react";
import { Button, Input, Modal } from "../../Components/ui";
import { useForm, type SubmitHandler } from "react-hook-form";


type UpdateProfile = {
  userName: string
  bio: string
}
export const ProfileHeader = () => {
  const [image, setImage] = useState<null | File>(null);
const [isOpenUpdateProfileModal, setIsOpenUpdateProfileModal] = useState(false);

const {register , handleSubmit ,reset} =useForm <UpdateProfile>({
  
   })
     const onSubmit: SubmitHandler<UpdateProfile> = (data) => console.log(data)


  // &handler
  const onDeleteProfileImage = () => {
    Swal.fire({
      title: "Are you sure you want to delete your profile Image ?",
      text: "You won't be able to revert this profile Image!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
   const onOpenUpdateProfile = () => {
      setIsOpenUpdateProfileModal(true);
      reset({
      userName: "Bothiana",
      bio: "frontend developer",
    });
    };

  return (
    <>
    <header className=" text-white md:flex gap-6 md:text-left p-5 text-center rounded-md bg-linear-to-r from-pink-400 via-indigo-500 to-teal-400">
      <div className="image-wrapper relative   ">
        <img
          src={image ? URL.createObjectURL(image) :img}
          alt="profileImage"
          className="w-28 h-28 md:mx-0 mx-auto  object-center rounded-full"
        />
        {/* edit profile Image */}
        <div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-black bg-white relative -top-5  font-medium rounded px-2 py-1 text-sm   text-center inline-flex items-center "
            type="button"
          >
            edit
          </button>
          {/* Dropdown menu */}
          <div
            id="dropdown"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 "
          >
            <ul
              className=" text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <label
                  htmlFor="file"
                  className="block px-4 py-2 hover:bg-gray-100 "
                >
                  upload a photo..
                </label>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onDeleteProfileImage}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  remove a photo..
                </button>
              </li>
            </ul>
          </div>
        </div>
        <input
          type="file"
          className="hidden"
          id="file"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (!e.target.files) return;
            setImage(e.target.files[0]);
          }}
        />
      </div>

      <div>
        <h1 className="name text-xl mt-2 font-semibold">Bothiana</h1>
        <p className="title my-2">frontend developer</p>
        <button onClick={onOpenUpdateProfile} className="bg-indigo-400 text-base rounded-md p-2 cursor-pointer hover:bg-indigo-300 transition-colors">
          update profile
        </button>
      </div>
    </header>
       <Modal
        isOpen={isOpenUpdateProfileModal}
        title="update Profile"
        closeModal={() => {
          setIsOpenUpdateProfileModal(false);
        }}
      >
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("userName")} placeholder="userName..." />
          <Input {...register("bio")} placeholder="bio..." />
          <Button type="submit">update</Button>
        </form>
      </Modal>
    </>
    
  );
};
