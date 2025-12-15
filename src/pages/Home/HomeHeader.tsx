import homeBg from "../../assets/image/blog.avif";

export const HomeHeader = () => {
  return (
    <header
      style={{ backgroundImage: `url(${homeBg})` }}
      className="bg-no-repeat bg-center bg-cover h-[600px] relative"
    >
      <div className="layer bg-black/50 absolute inset-0"></div>
    </header>
  );
};
