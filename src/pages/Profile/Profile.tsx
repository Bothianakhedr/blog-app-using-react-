import { Posts } from "../AllPosts/AllPosts";
import Swal from "sweetalert2";
import { ProfileHeader } from "./ProfileHeader";

export const Profile = () => {
  //  *handler

  const onDeleteAccount = () => {
    Swal.fire({
      title: "Are you sure you want to delete your profile?",
      text: "You won't be able to revert this profile!",
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

  return (
    <section className="my-20">
      <div className="container mx-auto px-4">
        <ProfileHeader />

        <Posts />
        <button
          type="button"
          onClick={onDeleteAccount}
          className="w-fit p-2 border rounded-md text-red-600 cursor-pointer border-red-500"
        >
          delete your Account
        </button>
      </div>
    </section>
  );
};
