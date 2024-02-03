import SectionMenu from "@/sections/Menu/view/SectionMenu";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Menu</title>
        <meta
          name="description"
          content="Explore the delectable menu at Caramella. Browse through our handcrafted cakes, cookies, and ready-made treats. Choose from a variety of categories, each offering a delightful selection of sweet creations. Discover the perfect indulgence for any occasion. Sweeten your moments with Caramella's artisanal delights."
        />
      </Head>
      <SectionMenu />
    </>
  );
}
