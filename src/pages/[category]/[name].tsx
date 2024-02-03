import { useRouter } from "next/router";
import Custom404 from "@/pages/404";
import Head from "next/head";
import SectionProduct from "@/sections/Product/view/SectionProduct";
import { Loader } from "@/svg/view";
import { useLazyGetSingleCardQuery } from "@/api/card.api.req";
import { useEffect } from "react";

const Product = () => {
  const router = useRouter();
  const id = router.query.name;
  const [getSingleCard, { data, isLoading, isError }] =
    useLazyGetSingleCardQuery();

  useEffect(() => {
    if (id !== undefined) {
      getSingleCard(String(id));
    }
  }, [id, getSingleCard]);
  if (isLoading || id === undefined) {
    return <Loader />;
  } else {
    if (isError) {
      return <Custom404 />;
    } else {
      return (
        <div>
          <Head>
            <title>Product page</title>
            <meta
              name="description"
              content="Indulge in our exquisite Product, a masterpiece of flavor and craftsmanship. Discover the perfect blend of high-quality ingredients meticulously curated to create a delightful treat. Explore our product's unique features. Order now and experience the epitome of sweetness with Caramella's artisanal creations."
            />
          </Head>
          <SectionProduct data={data} />
        </div>
      );
    }
  }
};

export default Product;
