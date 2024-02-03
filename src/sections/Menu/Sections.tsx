import Cards from "@/components/Cards";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useLazyGetPaginationCardQuery } from "@/api/card.api.req";
import Loader from "@/svg/Loader";

const Sections = () => {
  const router = useRouter();
  const query = router?.query?.query || "weddingCake";
  const [display, setDisplay] = useState(query);
  const [page, setPage] = useState("1");
  const [trigger, { data, isLoading }] = useLazyGetPaginationCardQuery();
  useEffect(() => {
    trigger({ category: display, page: page, limit: "10" });
  }, [trigger, display, page]);

  return (
    <div className="cont-y">
      <div className="container-p w-full bg-orange min-h-[5rem] py-[1rem] flex flex-row flex-wrap justify-center items-center gap-8">
        <button
          onClick={() => setDisplay("weddingCake")}
          className={`button-text text-white ${
            display === "weddingCake" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          wedding cakes
        </button>
        <button
          onClick={() => setDisplay("macarons")}
          className={`button-text text-white ${
            display === "macarons" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          macarons
        </button>
        <button
          onClick={() => setDisplay("biscuits")}
          className={`button-text text-white ${
            display === "biscuits" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          biscuits
        </button>
        <button
          onClick={() => setDisplay("customCake")}
          className={`button-text text-white ${
            display === "customCake" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          custom cakes
        </button>
        <button
          onClick={() => setDisplay("cupcake")}
          className={`button-text text-white ${
            display === "cupcake" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          cupcake
        </button>
        <button
          onClick={() => setDisplay("birthdayCake")}
          className={`button-text text-white ${
            display === "birthdayCake" && "bg-text233"
          } px-[1rem] py-[0.5rem] rounded-[10rem] hover:bg-text233 transition-all`}
        >
          birthday cakes
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
