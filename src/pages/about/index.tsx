import SectionAboutUs from "@/sections/AboutUs/view/SectionAboutUs";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Discover the essence of our company – a trusted source for artisanal confections. Explore our rich history, unwavering commitment to quality, and the passion that fuels our delightful creations. Learn more about the values, expertise, and dedication that define us. Welcome to a journey through the heart of Caramella, where every detail reflects our pursuit of sweetness and excellence."
        />
      </Head>

      <SectionAboutUs />
    </>
  );
}
