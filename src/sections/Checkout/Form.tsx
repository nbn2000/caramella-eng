"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import RHFPhone from "@/components/hook-form/RHFPhone";
import DateComponent from "@/components/hook-form/DateComponent";
import RHFTextarea from "@/components/hook-form/RHFTextarea";
import SelectTime from "@/components/hook-form/SelectTime";
import { useSendOrderMutation } from "@/api/order.api.req";
import SendModal from "./SendModal";

const Form = ({
  data,
  user,
  setIfNotPurchase,
}: {
  data: object;
  user: object;
  setIfNotPurchase: any;
}) => {
  const [selectedTime, setSelectedTime] = useState<any>();
  const [selectedDate, setSelectedDate] = useState(
    String(
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    )
  );
  const [sendOrder, { isLoading, data: resData }] = useSendOrderMutation();
  const [openModal, setOpenModal] = useState(false);
  const [isError, setIsError] = useState({ date: false, time: false });
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const methods = useForm({
    defaultValues: {
      additionalPhoneNumber: "",
      comment: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (event: any) => {
    if (!isDateOpen) {
      return setIsError({ date: true, time: isError.time });
    }

    if (!isTimeOpen) {
      return setIsError({ date: isError.date, time: true });
    }

    const submitObject = {
      ...event,
      date: selectedDate,
      time: selectedTime.value,
      ...data,
    };
    submitObject.user = user;
    delete submitObject._id;
    console.log(submitObject);
    await sendOrder(submitObject)
      .unwrap()
      .then((res: any) => {
        setOpenModal(true);
        setIfNotPurchase(false);
      });
  };

  return (
    <div>
      <SendModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        reference={resData?.orderNumber}
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RHFPhone
            name="additionalPhoneNumber"
            placeholder="Сизнинг телефон рақамингиз"
          />

          <div className="flex flex-row w-full justify-between items-center">
            <DateComponent
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              setIsDateOpen={setIsDateOpen}
              isError={isError}
              setIsError={setIsError}
            />
            <SelectTime
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
              setIsTimeOpen={setIsTimeOpen}
              isError={isError}
              setIsError={setIsError}
            />
          </div>
          <RHFTextarea name="comment" placeholder="Қўшимча илтимос" />
          <div className="flex flex-row justify-between gap-2 sm:flex-col sm:items-center">
            <button
              type="submit"
              className="button-text text-white btn-contained"
            >
              {isLoading ? (
                <span className="loading loading-spinner" />
              ) : (
                "Юбориш"
              )}
            </button>
            <Link href="/" className=" button-text btn-outlined">
              Бош Сахифага
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Form;
