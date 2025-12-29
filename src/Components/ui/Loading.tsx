import { FallingLines } from "react-loader-spinner";
export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <FallingLines
      color="#4127d4"
      width="100"
      visible={true}
      ariaLabel="falling-circles-loading"
    />

    </div>
  );
};
