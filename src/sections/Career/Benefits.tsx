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
        <h2 className="h-175063 text-orange">Benefits</h2>
        <h3 className="h-237575 text-text232">
          Why you should join to our{" "}
          <span className="h-237575 text-orange relative">
            Awesome
            <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
          </span>{" "}
          team
        </h3>
        <p className="b-0875  text-[#848383]">
          We want you to feel right at home when you work at Caramella, and to
          do that, we've put together a great package of benefits for you. It
          all starts with a free lunch!
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
            Clients
          </h3>
          <p className="b-0875  text-[#848383] ">
            Our first priority is our customers, but we also take care of each
            other
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
            Production
          </h3>
          <p className="b-0875  text-[#848383] ">
            By working together, we achieve our goals together, where each
            contribution is important to our overall success
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
            We are Familiy
          </h3>
          <p className="b-0875  text-[#848383] ">
            Although we are colleagues by title, we are more than just
            colleagues, embodying a sense of family that strengthens our bonds
            and fosters a supportive work community.
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
            Our Product
          </h3>
          <p className="b-0875  text-[#848383] ">
            Advance your career at the heart of our company. Contribute to the
            creation of exquisite cakes and cookies, adding sweetness to every
            moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
