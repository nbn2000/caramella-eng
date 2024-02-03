import { Underline } from "@/svg/view";

const Header = ({ data }: { data: string }) => {
  return (
    <header className="relative lg:!h-[200px] xl:h-[250px] h-[350px]">
      <div className="w-full px-[10px] h-full bg-[url('../assets/product-page/header-bg.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center brightness-[120%] "></div>
      <div className="absolute bg-[rgba(255,255,255,0.5)] sm:w-[90%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] px-[20px] py-[15px] rounded-[5px] flex justify-center items-center flex-col gap-[20px] text-center sm:gap-[5px]">
        <h1 className="h-42915 text-text232 md:text-[3rem]">{data}</h1>
      </div>
    </header>
  );
};

export default Header;
