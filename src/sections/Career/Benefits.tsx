import React from "react";
import Image from "next/image";
import ClientLogo from "@/assets/careers/client-logo.png";
import FamilyLogo from "@/assets/careers/family-logo.png";
import ProductLogo from "@/assets/careers/product-logo.png";
import ProductionLogo from "@/assets/careers/production-logo.png";
import { SmallUnderline } from "@/svg/view";

const Benefits = () => {
  return (
    <div className="container-p cont-y flex flex-row justify-between items-start gap-6 xl:flex-col ">
      <div className="flex flex-col justify-start items-start gap-4 max-w-[27rem] 1xl:max-w-[23rem] xl:max-w-[27rem]">
        <h2 className="h-175063 text-orange">Афзалликлар</h2>
        <h3 className="h-237575 text-text232">
          Нима учун бизнинг{" "}
          <span className="h-237575 text-orange relative">
            Aжойиб
            <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
          </span>{" "}
          жамоамизга қўшилишингиз керак
        </h3>
        <p className="b-0875  text-[#848383]">
          Биз сизни Caramella да ишлаётганингизда ўзингизни уйдагидек ҳис
          қилишингизни хоҳлаймиз ва бунинг учун биз сиз учун ажойиб имтиёзлар
          тўпламини тайёрлаганмиз. Ҳаммаси бепул тушликдан бошланади!
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-5">
        <div className="flex flex-col justify-start items-start gap-2 max-w-[250px]">
          <div className="max-w-[80px] max-h-[80px]">
            <Image
              src={ClientLogo}
              alt="halal logo"
              width={80}
              height={80}
              className="object-cover w-[80px] h-[80px] "
            />
          </div>
          <h3 className="b-145475 text-[1.2rem] text-orange max-w-[200px] uppercase">
            Мижозлар
          </h3>
          <p className="b-0875  text-[#848383] ">
            Бизнинг биринчи устуворлигимиз мижозларимиздир, лекин биз
            бир-биримизга ғамхўрлик қиламиз
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-2 max-w-[250px]">
          <div className="max-w-[80px] max-h-[80px] ">
            <Image
              src={ProductionLogo}
              alt="halal logo"
              width={80}
              height={80}
              className="object-cover w-[80px] h-[80px]"
            />
          </div>
          <h3 className="b-145475 text-orange max-w-[200px] uppercase whitespace-nowrap">
            Ишлаб Чиқариш
          </h3>
          <p className="b-0875  text-[#848383] ">
            Биргаликда ишлаш орқали биз мақсадларимизга биргаликда эришамиз,
            бунда ҳар бир ҳисса бизнинг умумий муваффақиятимизга муҳимдир
          </p>
        </div>{" "}
        <div className="flex flex-col justify-start items-start gap-2 max-w-[250px]">
          <div className="max-w-[80px] max-h-[80px] ">
            <Image
              src={FamilyLogo}
              alt="halal logo"
              width={80}
              height={80}
              className="object-cover w-[80px] h-[80px]"
            />
          </div>
          <h3 className="b-145475 text-orange max-w-[200px] uppercase">
            Биз Оиламиз
          </h3>
          <p className="b-0875  text-[#848383] ">
            Биз унвон бўйича ҳамкасблар бўлсак-да, биз оддий ҳамкасблардан устун
            турамиз, бу бизнинг ришталаримизни мустаҳкамлайдиган ва
            қўллаб-қувватловчи меҳнат жамоасини ривожлантирадиган оила туйғусини
            ўзида мужассам этган.
          </p>
        </div>{" "}
        <div className="flex flex-col justify-start items-start gap-2 max-w-[250px]">
          <div className="max-w-[80px] max-h-[80px] ">
            <Image
              src={ProductLogo}
              alt="halal logo"
              width={80}
              height={80}
              className="object-cover w-[80px] h-[80px]"
            />
          </div>
          <h3 className="b-145475 text-orange max-w-[200px] uppercase">
            Маҳсулотимиз
          </h3>
          <p className="b-0875  text-[#848383] ">
            Бизнинг cомпаниямизнинг марказида мартабангизни кўтаринг. Ҳар бир
            лаҳзага ширинлик қўшиб, нафис торт ва печене тайёрлашга ҳисса
            қўшинг.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
