import { Badge } from "@/svg/view";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/cards.module.css";

type typeObj = {
  _id: string;
  createdAt: string;
  name: string;
  description: string;
  category: string;
  price: string;
  file: string;
  files: string[];
  property: Array<{ value: string }>;
};

type typeArray = typeObj[];

const Cards = ({ data }: { data: typeArray | undefined }) => {
  return (
    <div className={styles.body}>
      {data !== undefined &&
        data.map((i: typeObj, idx: number) => {
          const badge =
            new Date(i.createdAt) >= new Date(Date.now() - 604800000);
          return (
            <Link
              href={`/${i.category}/${i._id}`}
              key={idx}
              className="card card-compact w-[22rem] h-[22rem]  bg-base-100 shadow-xl hover:scale-[0.99] hover:transition-all"
            >
              <figure className="static">
                <Image
                  src={i.file}
                  alt="Shoes"
                  width={384}
                  height={254}
                  loading="lazy"
                  quality={80}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-black h-175063">
                  {i.name}
                  {badge && (
                    <div className="relative ">
                      <Badge className="w-10 h-10" />
                      <span className=" text-[0.7rem] text-[#F0F0F0] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                        Янги
                      </span>
                    </div>
                  )}
                </h2>
                <p className="text-text233 b-0875">{i.description}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline btn-border py-3 px-5 text-text232">
                    {i.price} сўм
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Cards;
