import Cards from "./Cards";
import dynamic from "next/dynamic";
import { useGetCartQuery } from "@/api/cart.api.req";
import Loader from "@/svg/Loader";
import Custom404 from "@/pages/404";
import { useState } from "react";
const Form = dynamic(() => import("./Form"), { ssr: false });

const Body = ({ user }: { user: object }) => {
  const id = JSON.parse(localStorage.getItem("device_id") || "");
  const [ifNotPurchase, setIfNotPurchase] = useState(true);
  const { data, isLoading, isError } = useGetCartQuery(id);

  if (isLoading) {
    return <Loader />;
  }
  if (ifNotPurchase) {
    if (isError) {
      return <Custom404 />;
    }
  }
  return (
    <div className="cont-y relative container-p flex flex-row gap-6 xl:flex-col xl:justify-center xl:items-center justify-between items-start">
      <div className="flex flex-col gap-4 w-[40%] md:!px-0 lg:!w-full lg:px-[10%] xl:w-[55%] ">
        <h3 className="h-237575 text-text232 md:text-[3rem]">Ма'лумот</h3>
        <div className="flex flex-col max-w-[500px] gap-2">
          <span className="b-0875 text-gray-500 ">
            Агар телеграмда рўйхатдан ўтган телефон рақамингиз қўнғироқлар учун
            мобил рақамингиз бўлмаса, илтимос рақамингизни Йозинг!{" "}
          </span>
          <span className="b-0875 text-orange">
            Диққат! Бу телефон номерингизни биз сизга буюртмангизни тасдиқлаш
            қўнғироғи учун ишлатамиз агар қўнғироқ тасдиқисиз сизнинг
            буюртмангизни бошлай ололмаймиз{" "}
          </span>
        </div>
        <Form data={data} user={user} setIfNotPurchase={setIfNotPurchase} />
      </div>
      <div className="flex flex-col gap-6 w-[45%] lg:!w-[80%] xl:w-[65%]">
        <h3 className="h-237575 text-text232 md:text-[2rem]">Буюртмалар:</h3>
        <div className="flex flex-col gap-4">
          {data?.cart?.map((i: any, idx: number) => (
            <div key={idx}>
              <Cards
                img={i.file}
                description={i.describtion}
                price={i.price}
                name={i.name}
              />
            </div>
          ))}
        </div>
        <h3 className="h-175063 text-text232 md:text-[2rem] sm:!text-[1.5rem]">
          Хаммаси Бўлиб:{" "}
          <span className="h-237575 text-orange md:text-[2.2rem] sm:!text-[1.7rem]">
            {data?.total_price}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default Body;
