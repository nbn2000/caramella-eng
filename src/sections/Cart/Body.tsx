import { BackArrow, Underline, Loader } from "@/svg/view";
import Link from "next/link";
import { useState } from "react";
import Cards from "./Cards";
import { useGetCartQuery } from "@/api/cart.api.req";
import LoginModal from "@/components/loginModal";
import { useRouter } from "next/router";

const Body = () => {
  const [open, setOpen] = useState(false);
  const id = JSON.parse(localStorage.getItem("device_id") || "");
  const router = useRouter();
  const user = localStorage.getItem("user") || "";
  const { data, isLoading, isError } = useGetCartQuery(id);
  if (isError) {
    return (
      <div className="cont-y container-p flex flex-col justify-center items-center gap-4">
        <h1 className="h-175063 text-text233">
          Хозирда сизнинг саватчангизда махсулот йўқ
        </h1>
        <h3 className="b-145475 text-orange">
          Саватчани тўлдириш учун меню га ўтинг
        </h3>
        <Link
          href="/menu"
          className="flex flex-row items-center gap-4 button-text btn-contained !w-max p-2 text-white"
        >
          <BackArrow /> <span>Менюга ўтиш</span>
        </Link>
      </div>
    );
  }
  const totalAmount = data?.cart?.reduce(
    (sum: any, item: any) => sum + item.amount,
    0
  );

  if (isLoading) {
    return <Loader />;
  }

  const handleCheckout = () => {
    if (user === "") {
      setOpen(true);
    } else {
      router.push("/checkout");
    }
  };
  return (
    <div className="cont-y container-p flex flex-row items-center justify-between gap-1 l:flex-col l:gap-6 ">
      <div className="w-[50%] 1xl:w-[57%]  l:w-[90%] md:w-full flex flex-col justify-center gap-5">
        <Link
          href="/menu"
          className="flex flex-row items-center gap-4 button-text btn-contained !w-max p-2 text-white"
        >
          <BackArrow /> <span>Харидни Давом Этиш</span>
        </Link>
        <hr className="w-full h-[2px] bg-gray-500 rounded-md" />
        <div>
          <h3 className="h-237575 text-text232 md:text-[3rem]">
            Харид
            <span className="relative h-237575 text-orange md:text-[3rem] ">
              {" "}
              Саватчаси
              <Underline className="absolute  -bottom-4 left-0 w-[100%]" />
            </span>
          </h3>
          <p className="text-gray-500 mt-4">{`Хозир сизда ${data?.cart?.length} та махсулот бор`}</p>
        </div>
        <div className="flex flex-col gap-4">
          {data?.cart?.map((i: any, idx: number) => (
            <div key={idx}>
              <Cards
                img={i.file}
                description={i.description}
                price={i.price}
                name={i.name}
                amount={i.amount}
                device_id={id}
                product_id={i._id}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[400px] md:!w-[95%] l:!w-[80%]  xl:!w-[320px] 1xl:w-[370px]  p-4 flex flex-col justify-center gap-6 sm:gap-3 sticky top-4 xl:static rounded-2xl border-[#232] border-[2px] border-solid">
        <div className="flex justify-between flex-row items-center">
          <span className="h-175063 md:text-base text-dark opacity-60">
            Жами Нархи:
          </span>
          <span className="h-175063 md:text-[1.3rem] whitespace-nowrap text-text232">{`${data?.total_price} сўм`}</span>
        </div>
        <div>
          <span className="h-175063  md:text-[1.3rem] text-text232">
            <small className="opacity-60 h-175063 md:text-base">
              Махсулот Сони:{" "}
            </small>
            {totalAmount}
          </span>
        </div>
        <hr className="w-full h-[2px] bg-gray-500" />
        <button
          onClick={() => handleCheckout()}
          className="button-text text-white text-gr-white h-12 w-full bg-orange rounded-xl px-6"
        >
          КАССА
        </button>
        <hr className="w-full h-[2px] bg-gray-500" />
        <p className="text-sm font-normal leading-5 text-dark opacity-80 w-full">
          Хозирда бизда йетказ бериш хизмати йоқдиги туфайли, агар сиз Наманган
          шахрида болмасангиз заказ бериш хақида ўйлаб кўришингизни маслахат
          берамиз чунки махсулотни олип кетиш учун ишлаб чиқариш жойига
          келишингиз керак
        </p>
      </div>
      <LoginModal setOpen={setOpen} open={open} checkout={true} />
    </div>
  );
};

export default Body;
