import SectionContact from "@/sections/Contact/view/SectionContact";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Connect with Caramella. Reach our friendly team through our contact page. Whether you have questions, feedback, or inquiries, we're here to assist you. Experience exceptional customer service and sweeten your interaction with us today."
        />
      </Head>
      <SectionContact />
    </>
  );
}
