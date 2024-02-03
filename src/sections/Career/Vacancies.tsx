import { Loader, SmallUnderline } from "@/svg/view";
import { useGetAllVacancyQuery } from "@/api/vacancy.api.req";
import Vacancy from "./Vacancy";
import { useEffect, useState } from "react";

const Vacancies = () => {
  const [vacancy, setVacancy] = useState(null);
  const { data, isLoading, isError } = useGetAllVacancyQuery({});

  useEffect(() => {
    if (!isLoading && !isError && data && data.length > 0) {
      setVacancy(data[0]);
    }
  }, [data, isLoading, isError]);

  if (isLoading) {
    return <Loader />;
  }

  if (data?.length === 0 || isError) {
    return (
      <div className="cont-y container-p flex justify-center items-center">
        <h3 className="h-175063 text-text232 mb-10 ">
          Узур сўраймиз хозирги вақтда вакансиямиз йўқ, илтимос кейинроқ
          текшириб кўринг
        </h3>
      </div>
    );
  }
  return (
    <div className="cont-y container-p">
      <h3 className="h-237575 text-text232 mb-10 ">
        Мавжуд{" "}
        <span className="h-237575 text-orange relative">
          Иш-Ўринлари
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </span>
      </h3>
      <div className="relative flex flex-row justify-between gap-4 items-start max-w-[80%] mx-auto xl:flex-col ">
        <div className="sticky top-5 xl:static flex flex-col w-[18rem] sm:w-full">
          {data?.map((i: any, idx: number) => (
            <button
              onClick={() => setVacancy(i)}
              key={idx}
              className="button-text border-b-2 border-solid border-[#848383] w-full py-4 px-2 text-left hover:bg-text233 hover:text-white"
            >
              {i?.vacancyName}
            </button>
          ))}
        </div>
        <Vacancy vacancy={vacancy} />
      </div>
    </div>
  );
};

export default Vacancies;
