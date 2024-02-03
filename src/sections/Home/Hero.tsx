import { Underline } from "@/svg/view";
import headerBackground from "@/assets/header/header-cake-background.png";
import headerCake from "@/assets/header/header-cake.png";
import headerCakeBlur from "@/assets/header/header-cake-blur.png";
import brownCakeSliced from "@/assets/header/brown-cake-sliced.png";
import yellowCakeSliced from "@/assets/header/yellow-cake-sliced.png";
import bowlOfChocolate from "@/assets/header/bowl-of-chocolate.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center 1xl:flex-col  1xl:justify-center 1xl:gap-8">
      <div className="flex flex-col gap-[2.81rem] z-30 md:justify-center md:items-center ">
        <div className="max-w-[42.042rem] flex flex-col gap-[1.48rem] md:text-center">
          <h1 className="h-42915 text-text232 md:text-[3rem]">
            Идеал{" "}
            <span className="relative h-42915 text-orange md:text-[3rem] ">
              тайёрланган
              <Underline className="absolute  -bottom-4 left-0 w-[100%]" />
            </span>
            торт мунтазам!
          </h1>
          <p className="b-125 max-w-[35rem] text-text233">
            Caramella да мукаммалликдан завқланинг. Бизнинг самовий тортлар ва
            оғизда эрийдиган печенеларимиз ширинликни қайта белгилайди. Ҳар бир
            ширинликдаги пиширилган ғайриоддий лаззатлар билан лаҳзаларингизни
            кўтаринг. Мукаммал лаззатланишга хуш келибсиз.
          </p>
        </div>
        <div className="flex flex-row items-center gap-[0.62rem] md:flex-col">
          <Link href="/about" className="btn-contained button-text text-white">
            Кўпроқ ўқиш
          </Link>
          <Link href="/menu" className="btn-outlined buttton-text text-text232">
            Заказ Беринг
          </Link>
        </div>
      </div>

      <div className="max-w-[482px] min-h-fit ">
        <div className="max-w-full relative">
          <Image
            src={headerBackground}
            alt="header cake background"
            width={492}
            height={564}
            loading="lazy"
            quality={10}
          />

          <div className="w-[110%] md:w-[90%] absolute top-[10%] right-[10%] md:right-[3%] md:top-[15%] z-10">
            <Image
              src={headerCake}
              alt="header cake"
              className=" object-cover"
              width={585}
              height={442}
              loading="lazy"
            />
          </div>
          <div className="w-[110%] md:w-[90%] absolute top-[10%] right-[10%] md:right-[3%] md:top-[15%]">
            <Image
              src={headerCakeBlur}
              alt="header cake"
              className=" object-cover"
              width={585}
              height={442}
              loading="lazy"
            />
          </div>
          <div className="absolute -top-[5%] right-[60%] w-[20%]">
            <Image
              src={brownCakeSliced}
              alt="brown cake sliced"
              width={97.613}
              height={94.266}
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-[2%] right-[85%] w-[20%] ">
            <Image
              src={yellowCakeSliced}
              alt="yellow cake sliced"
              width={97.613}
              height={94.266}
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-[12%] right-[8%] z-10 w-[20%]">
            <Image
              src={bowlOfChocolate}
              alt="bowl of chaocolate"
              width={97.613}
              height={94.266}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
