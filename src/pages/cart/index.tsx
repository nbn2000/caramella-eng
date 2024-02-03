import SectionCart from "@/sections/Cart/view/SectionCart";
import Head from "next/head";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Саватча</title>
        <meta
          name="description"
          content="Review and edit your shopping cart at Caramella. Add, remove, or modify items before completing your order. Ensure a delightful and seamless shopping experience with our handcrafted treats."
        />
      </Head>
      <SectionCart />
    </>
  );
};

export default Cart;
