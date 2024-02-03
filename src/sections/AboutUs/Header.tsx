import { Underline } from "@/svg/view";

const Header = () => {
  return (
    <header className="relative lg:!h-[300px] xl:h-[400px] h-[500px]">
      <div className="w-full px-[10px] h-full bg-[url('../assets/about-us/pastry-kitchen.jpg')] bg-center bg-no-repeat bg-cover flex items-center justify-center brightness-[110%] blur-[2px]"></div>
      <div className="absolute lg:w-[100%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-[10px] rounded-[5px] flex justify-center items-center flex-col gap-[20px] text-center sm:gap-[5px]">
        <h1 className="h-42915 text-text232 md:text-[3rem]">
          Биз{" "}
          <span className="relative h-42915 text-orange md:text-[3rem] ">
            Ҳақимизда
            <Underline className="absolute  -bottom-4 left-0 w-[100%]" />
          </span>
        </h1>
        <p className="b-125 w-full text-text233 sm:text-[1rem] sm:leading-[1.2rem]">
          Компаниямизнинг жозибали тарихини ўрганинг, иштиёқли жамоамиз
          муваффақияти билан танишинг ва маҳсулотларимизнинг ҳар бир жабҳасида
          тўқилган мислсиз сифатни ҳис этинг.
        </p>
      </div>
    </header>
  );
};

export default Header;
