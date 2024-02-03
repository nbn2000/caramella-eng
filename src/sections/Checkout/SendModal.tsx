import React from "react";
import copy from "clipboard-copy";
import { useRouter } from "next/router";
import { enqueueSnackbar } from "notistack";

const SendModal = ({
  openModal,
  setOpenModal,
  reference,
}: {
  openModal: boolean;
  setOpenModal: any;
  reference?: string;
}) => {
  const router = useRouter();
  const hidden = openModal ? "absolute" : "hidden";
  const onCopy = () => {
    copy(reference || "");
    enqueueSnackbar("Номерингиз копия бўлди", { variant: "success" });
  };

  const handleClick = () => {
    router.push("/");
    setOpenModal(false);
  };
  return (
    <div
      className={`${hidden} z-50 opacity-100 p-4 w-full h-full bg-gray-300 rounded-md top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}
    >
      <div className="flex flex-col justify-center items-center gap-4 w-full h-full">
        <h3 className="font-bold text-lg text-text233 text-center">
          Биздан харид қилганингиз учун рахмат!
        </h3>
        <h4 className="text-base text-text232 text-center">
          Сизнинг Харид Рақамингиз{" "}
          <button className="font-extrabold cursor-pointer" onClick={onCopy}>
            {reference}
          </button>
        </h4>
        <p className="text-base text-text232 text-center">
          Сизга тез орада алоқага чиқишади
        </p>
        <button
          className="button-text text-white btn-contained"
          onClick={handleClick}
        >
          Бош Сахифага Қайтиш
        </button>
      </div>
    </div>
  );
};

export default SendModal;
