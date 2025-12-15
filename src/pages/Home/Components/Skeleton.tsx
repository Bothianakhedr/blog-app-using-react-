import defaultImage from "../../../assets/image/istockphoto-2173059563-612x612.jpg";

const Skeleton = () => {
  return (
    <div
      role="status"
      className="max-w-sm p-4 border border-gray-200 rounded-md shadow-xs animate-pulse md:p-6"
    >
      <div
        role="status"
        className="flex items-center justify-center h-48 max-w-sm bg-neutral-quaternary rounded-base animate-pulse mb-4 sm:mb-6"
      >
        <img
          src={defaultImage}
          alt="defaultImage"
          className="w-52  text-fg-disabled"
        />
      </div>
      <div className="h-2.5 bg-neutral-quaternary rounded-full w-48 mb-4" />
      <div className="flex justify-between items-center  ">
        <div className="h-5 w-15  rounded-md mb-2.5 bg-gray-300" />
        <div className="h-5 w-15 rounded-md mb-2.5 bg-gray-300" />
      </div>
      <hr className="my-2 text-gray-300" />
      <div className="h-4  rounded-md mb-2.5 bg-gray-300" />
      <div className="h-4  rounded-md bg-gray-300" />
      <button className="h-4  rounded-md bg-gray-300 w-20 mt-2 "></button>
    </div>
  );
};

export default Skeleton;
