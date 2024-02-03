import { Underline } from "@/svg/view";

const Header = () => {
  return (
    <header className="relative lg:!h-[200px] xl:h-[250px] h-[350px]">
      <div className="w-full px-[10px] h-full bg-[url('../assets/contact/caramella.png')] bg-center bg-no-repeat bg-cover flex items-center justify-center brightness-[120%] blur-[3px]"></div>
      <div className="absolute bg-[rgba(255,255,255,0.5)] sm:w-[90%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-[20px] py-[15px] rounded-[5px] flex justify-center items-center flex-col gap-[20px] text-center sm:gap-[5px]">
        <h1 className="h-42915 text-text232 md:text-[3rem]">
          <span className="relative h-42915 text-orange md:text-[3rem] ">
            Contact{" "}
            <Underline className="absolute  -bottom-4 left-0 w-[100%]" />
          </span>
          Information
        </h1>
      </div>
    </header>
  );
};

export default Header;
