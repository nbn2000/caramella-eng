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
        Биз Нима{" "}
        <span className="h-237575 text-orange relative">
          Таклиф Қиламиз{" "}
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
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
            <h2 className="card-title text-black h-175063">
              Турли хил тортлар
            </h2>
            <p className="text-text233 b-0875">
              Биз ҳар қандай зиёфат ёки тўй учун юқори сифатли табиий
              ингредиентлар ва консервантларсиз тайёрланган турли хил тортларни
              тақдим этамиз.
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
              Турли Хил Печёнийлар
            </h2>
            <p className="text-text233 b-0875">
              Килограмм ёки лаганда сотиладиган печёнийлар кенг ассортиментини
              кашф этинг. Вариантлар орасида "песёчнийлар", "пахлавалар" ва
              бошқа турли хил жозибали навлар мавжуд.
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
              Ярим тайёр маҳсулотлар
            </h2>
            <p className="text-text233 b-0875">
              Биз барча ингредиентларни сиз учун тайёрлаймиз; шунчаки шахсий
              декорациянгизни қилинг ва волия, яқинларингизни ажойиб сюрприз
              билан хурсанд қилинг.
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
