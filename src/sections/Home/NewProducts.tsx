import { SmallUnderline } from "@/svg/view";
import Cards from "@/components/Cards";
import { useGetNewThreeCardQuery } from "@/api/card.api.req";
import CardsSkeleton from "@/components/CardsSkeleton";

const NewProducts = () => {
  const { data, isLoading, isError } = useGetNewThreeCardQuery({});
  if (data?.length === 0 || isError) return;
  return (
    <div className="cont-y container-p">
      <h2 className="h-237575 text-text232 text-center mb-10">
        Янги{" "}
        <span className="h-237575 text-orange relative">
          Махсулотлар
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </span>
      </h2>
      {isLoading ? (
        <CardsSkeleton length={3} />
      ) : (
        !isError && <Cards data={data} />
      )}
    </div>
  );
};

export default NewProducts;
