import Image from "next/image";
import Hero from "./Hero";
import cupcakeBackground from "@/assets/header/cupcake-background.png";
import cupcake from "@/assets/header/cupcake.png";
import { SmallUnderline, BirthdayCake, Bread, Cookies } from "@/svg/view";

const Header = () => {
  return (
    <header className="container-p">
      <Hero />
      <div className="flex flex-row justify-between items-center gap-8 1xl:flex-col 1xl:justify-center cont-y">
        <div className="flex flex-row gap-9 items-center md:justify-center md:flex-col">
          <div className="relative max-w-fit min-h-fit">
            <Image
              src={cupcakeBackground}
              alt="cupcake background"
              width={160}
              height={191}
              loading="lazy"
            />
            <Image
              src={cupcake}
              alt="cupcake"
              height={289}
              width={246}
              className="absolute bottom-0 right-5"
              loading="lazy"
            />
          </div>
          <div className="max-w-[14.1875rem]">
            <h4 className="h-237575 text-black">Шоколад торт</h4>
            <SmallUnderline />
          </div>
        </div>
        <div className=" flex flex-row gap-[2.35rem] flex-wrap md:justify-center md:items-center md:text-center">
          <div className="flex flex-col justify-start items-start gap-[1.13rem] md:justify-center md:items-center md:gap-3">
            <BirthdayCake />
            <div className="flex flex-col gap-[0.5rem]">
              <h4 className="h-175063 text-black">Торт</h4>
              <p className="b-0875 text-text233 max-w-[10.125rem]">
                Момиқ, қаймоқли, қатламли, қониқарли
              </p>
            </div>
          </div>
          <hr className="h-[157px] w-[0.5px] rounded-[0.5px] bg-[#BBB] mt-[1.31rem] lg:hidden" />
          <div className="flex flex-col justify-start items-start gap-[1.13rem] md:justify-center md:items-center">
            <Cookies />
            <div className="flex flex-col gap-[0.5rem]">
              <h4 className="h-175063 text-black">Печёний</h4>
              <p className="b-0875 text-text233 max-w-[10.125rem]">
                Қирсилайдигон, лекин оғизда тез ерийди
              </p>
            </div>
          </div>
          <hr className="h-[157px] w-[0.5px] rounded-[0.5px] bg-[#BBB] mt-[1.31rem] lg:hidden" />

          <div className="flex flex-col justify-start items-start gap-[1.13rem] md:justify-center md:items-center">
            <Bread />
            <div className="flex flex-col gap-[0.5rem]">
              <h4 className="h-175063 text-black">Бисквит</h4>
              <p className="b-0875 text-text233 max-w-[10.125rem]">
                Енгил, юмшоқ, табиий, ярим таёр
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
