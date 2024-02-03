import Body from "../Body";
import Page404 from "@/pages/404";

const SectionCheckout = () => {
  const user = JSON.parse(localStorage.getItem("user") || "");
  if (user === "") {
    return <Page404 />;
  }
  return (
    <>
      <Body user={user} />
    </>
  );
};

export default SectionCheckout;
