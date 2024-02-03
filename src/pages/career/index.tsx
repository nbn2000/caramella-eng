import SectionCareer from "@/sections/Career/view/SectionCareer";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Careers</title>
        <meta
          name="description"
          content="Explore exciting career opportunities with Caramella. Join our team and contribute to the sweet success of our growing company. Discover open job positions that match your skills and aspirations. At Caramella, we value talent, innovation, and a passion for creating delightful experiences. Begin your rewarding journey with us today."
        />
      </Head>
      <SectionCareer />
    </>
  );
}
