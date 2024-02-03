import { useEffect } from "react";
import { useLazyDeviceSingupQuery } from "@/api/singup.api.req";
import { Loader } from "@/svg/view";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/view/Navbar";

const Error = () => {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <div className="flex flex-col justify-center items-center">
        <h1>Нимадур хато бўлди!</h1>
        <h5>илтимос сахифага қайтадан кириб кўринг</h5>
      </div>
    </div>
  );
};

const SignupOperation = ({ children }: any) => {
  const [deviceSingup, { isLoading, isError }] = useLazyDeviceSingupQuery();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const device = localStorage.getItem("device_id");
    if (token === null && device === null) {
      console.log(token);
      deviceSingup({});
    }
  }, []);

  return isLoading ? (
    <Loader />
  ) : !isError ? (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  ) : (
    <Error />
  );
};

export default SignupOperation;
