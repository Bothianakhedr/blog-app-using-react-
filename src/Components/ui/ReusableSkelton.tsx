import Skeleton from "../../pages/Home/Components/Skeleton"

const ReusableSkelton = () => {
  return (
     <div className=" gap-7 container mx-auto mt-9 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 6 }, (_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
  )
}

export default ReusableSkelton