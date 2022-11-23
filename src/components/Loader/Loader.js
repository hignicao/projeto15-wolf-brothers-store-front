import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#000f21"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#000f21"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};

export default Loader;