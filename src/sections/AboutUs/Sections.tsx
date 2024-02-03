import { SmallUnderline } from "@/svg/view";
import WhyChooseUs from "./WhyChooseUs";
import { writings } from "./writings";
import EachSection from "./EachSection";

const Sections = () => {
  return (
    <section className="container-p cont-y ">
      <div className="cont-y ">
        <h2 className="h-237575 text-text232 text-center mb-10 md:text-center">
          Биз Ҳақимизда{" "}
          <span className="h-237575 text-orange relative md:text-center whitespace-nowrap">
            Танишинг
            <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
          </span>
        </h2>
      </div>
      <div className="flex flex-col justify-center  gap-24">
        {writings.map((i, idx) => (
          <EachSection
            key={idx}
            header={i.header}
            showedText={i.showedText}
            hiddenText={i.hiddenText}
            img={i.img}
            sectionId={i.section}
            reverse={i.reverse}
          />
        ))}
      </div>
      <WhyChooseUs />
    </section>
  );
};

export default Sections;
