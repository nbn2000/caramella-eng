import { SmallUnderline } from "@/svg/view";
import Cards from "@/components/Cards";
import { useGetNewThreeCardQuery } from "@/api/card.api.req";
import CardsSkeleton from "@/components/CardsSkeleton";

const NewProducts = () => {
  const { data, isLoading, isFetching, isError } = useGetNewThreeCardQuery({});
  const loading = isLoading || isFetching;
  if (data?.length === 0 || isError) return;
  return (
    <div className="cont-y container-p">
      <h2 className="h-237575 text-text232 text-center mb-10">
        New{" "}
        <span className="h-237575 text-orange relative">
          Products
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </span>
      </h2>
      {loading && <CardsSkeleton length={3} />}{" "}
      {!isError && <Cards data={data} />}
    </div>
  );
};

export default NewProducts;
