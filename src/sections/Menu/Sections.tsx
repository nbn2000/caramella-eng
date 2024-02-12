import Cards from "@/components/Cards";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useLazyGetPaginationCardQuery } from "@/api/card.api.req";
import Loader from "@/svg/Loader";

const Sections = () => {
  const router = useRouter();
  const query = router?.query?.query || "biscuit-type";
  const [display, setDisplay] = useState(query);
  const [page, setPage] = useState("1");
  const [trigger, { data, isLoading }] = useLazyGetPaginationCardQuery();
  useEffect(() => {
    trigger({ category: display, page: page, limit: "10" });
  }, [trigger, display, page]);
  const handleClickMenu = (event: string) => {
    setDisplay(event);
    setPage("1");
  };
  return (
    <div className="cont-y">
      <div className="container-p w-full bg-orange min-h-[5rem] py-[1rem] flex flex-row flex-wrap justify-center items-center gap-8">
        <button
          onClick={() => handleClickMenu("biscuit-type")}
          className={`button-text text-white ${
            display === "biscuit-type" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          Biscuit Type
        </button>
        <button
          onClick={() => handleClickMenu("half-ready")}
          className={`button-text text-white ${
            display === "half-ready" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          Half Ready
        </button>
        <button
          onClick={() => handleClickMenu("cookie")}
          className={`button-text text-white ${
            display === "cookie" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          Cookie
        </button>
        <button
          onClick={() => handleClickMenu("layer-type")}
          className={`button-text text-white ${
            display === "layer-type" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          Layer Type
        </button>
        <button
          onClick={() => handleClickMenu("salad")}
          className={`button-text text-white ${
            display === "salad" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          Salad
        </button>
        <button
          onClick={() => handleClickMenu("mousse")}
          className={`button-text text-white ${
            display === "mousse" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          Mousse
        </button>
      </div>
      <div className="cont-y">
        {isLoading ? <Loader /> : <Cards data={data?.items || []} />}
      </div>
      <div className="w-full flex justify-center items-center">
        <Pagination
          pageCount={data?.totalPages || 1}
          active={page}
          setActive={setPage}
        />
      </div>
    </div>
  );
};

export default Sections;
