import Header from "../Header";
import Body from "../Body";

const SectionProduct = ({ data }: { data: any }) => {
  return (
    <>
      <Header data={data?.name} />
      <Body data={data} />
    </>
  );
};

export default SectionProduct;
