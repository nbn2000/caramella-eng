import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ImageSlider = ({ files }: { files: string[] }) => {
  return (
    <div className="sticky mx-auto top-20 1xl:static max-w-[600px] h-[400px] sm:!max-w-[300px] sm:!h-[200px] md:max-w-[400px] md:h-[266.6px] ">
      <Swiper
        navigation
        modules={[Navigation]}
        className="h-full w-full rounded-lg "
      >
        {Array.isArray(files) &&
          files.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden flex h-full w-full items-center justify-center">
                <Image
                  src={image}
                  alt={String(index)}
                  className="rounded-lg w-full h-full"
                  width={0}
                  height={0}
                  loading="lazy"
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
