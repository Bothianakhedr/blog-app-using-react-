
const Skeleton = () => {
  return (
    <div
      role="status"
      className="max-w-sm p-4 border border-gray-200 rounded-md shadow-xs animate-pulse md:p-6"
    >
      <div
        role="status"
        className="w-full h-52 bg-gray-300 dark:bg-gray-700 rounded-md"
      ></div>
      <div className="h-2.5 bg-neutral-quaternary rounded-full w-48 mb-4" />
      <div className="flex justify-between items-center  ">
        <div className="h-5 w-20  rounded-md mb-2.5 bg-gray-300" />
        <div className="h-5 w-20 rounded-md mb-2.5 bg-gray-300" />
      </div>
      <hr className="my-2 text-gray-300" />
      <div className="h-4  rounded-md mb-2.5 bg-gray-300" />
      <div className="h-3  rounded-md mb-1 bg-gray-300" />
      <div className="h-3  rounded-md bg-gray-300" />
      <div className="flex items-center justify-between">
        <button className="h-7  rounded-md bg-gray-300 w-20 mt-2 "></button>
        <span className="text-gray-400 text-2xl">...</span>
      </div>
    </div>
  );
};

export default Skeleton;
