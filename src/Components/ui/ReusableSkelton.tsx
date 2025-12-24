import Skeleton from "../../pages/Home/Components/Skeleton";

const ReusableSkeleton = () => {
  return (
    <div className=" gap-7 container mx-auto mt-12 grid   lg:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }, (_, index) => (
        <Skeleton key={index} />
      ))}
    </div>
  );
};

export default ReusableSkeleton;
