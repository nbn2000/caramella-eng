import { SmallUnderline } from "@/svg/view";
import Image from "next/image";
import BirthdayCake from "@/assets/what-we-offer/birthday-cake.jpg";
import biscuits from "@/assets/what-we-offer/biscuits.jpg";
import cookies from "@/assets/what-we-offer/cookies.jpg";
import styles from "@/styles/cards.module.css";

const WhatWeOffer = () => {
  return (
    <div className="container-p cont-y">
      <h2 className="h-237575 text-text232 text-center mb-10">
        What we{" "}
        <span className="h-237575 text-orange relative">
          offer <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </span>
      </h2>
      <div className={styles.body}>
        <div className="card card-compact w-[22rem] h-[22rem] bg-base-100 shadow-xl hover:scale-[0.99] hover:transition-all">
          <figure>
            <Image
              src={BirthdayCake}
              alt="birthday cake"
              width={384}
              height={254}
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black h-175063">Variety of Cakes</h2>
            <p className="text-text233 b-0875">
              We offer a variety of cakes for any party or wedding, made with
              high quality natural ingredients and without preservatives.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-compact w-[22rem] h-[22rem] bg-base-100 shadow-xl hover:scale-[0.99] hover:transition-all">
          <figure>
            <Image
              src={cookies}
              alt="cookies"
              width={384}
              height={254}
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black h-175063">
              Variety of Cookies
            </h2>
            <p className="text-text233 b-0875">
              Discover our wide range of biscuits sold by the kilo or by the
              tray. Options include "pesyochnyi", "baklava" and various other
              attractive varieties.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card card-compact w-[22rem] h-[22rem] bg-base-100 shadow-xl hover:scale-[0.99] hover:transition-all">
          <figure>
            <Image
              src={biscuits}
              alt="biscuits for cake"
              width={384}
              height={254}
              loading="lazy"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black h-175063">
              Helf Ready Products
            </h2>
            <p className="text-text233 b-0875">
              We prepare all the ingredients for you; just make your own
              decoration and voila, please your loved ones with a wonderful
              surprise.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
