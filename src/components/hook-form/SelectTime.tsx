import React from "react";
import Select from "react-select";
import { Info } from "@/svg/view";

const options = [
  { value: "09:00", label: "09:00" },
  { value: "09:30", label: "09:30" },
  { value: "10:00", label: "10:00" },
  { value: "10:30", label: "10:30" },
  { value: "11:00", label: "11:00" },
  { value: "11:30", label: "11:30" },
  { value: "12:00", label: "12:00" },
  { value: "12:30", label: "12:30" },
  { value: "13:00", label: "13:00" },
  { value: "13:30", label: "13:30" },
  { value: "14:00", label: "14:00" },
  { value: "14:30", label: "14:30" },
  { value: "15:00", label: "15:00" },
  { value: "15:30", label: "15:30" },
  { value: "16:00", label: "16:00" },
  { value: "16:30", label: "16:30" },
  { value: "17:00", label: "17:00" },
  { value: "17:30", label: "17:30" },
  { value: "18:00", label: "18:00" },
];

const SelectTime = ({
  selectedTime,
  setSelectedTime,
  setIsTimeOpen,
  setIsError,
  isError,
}: {
  selectedTime: any;
  setSelectedTime: any;
  isError: { date: boolean; time: boolean };
  setIsError: any;
  setIsTimeOpen: any;
}) => {
  const handleTime = (e: { value: string; lebel: string }) => {
    setSelectedTime(e);
    setIsTimeOpen(true);
    setIsError({ date: isError.date, time: false });
  };
  return (
    <div className="relative z-20 w-[40%] mb-5 group">
      <Select
        value={selectedTime}
        onChange={(e) => handleTime(e)}
        options={options}
        isSearchable={false}
        placeholder="Вақтни танланг"
        styles={{
          control: (baseStyles: any, state: any) => ({
            ...baseStyles,
            boxShadow: "none",
            borderColor:
              state.isFocused || isError.time
                ? "red !important"
                : "grey !important",
          }),
        }}
      />
      {isError.time && (
        <span className="text-[red] mt-[5px] text-sm flex flex-row gap-2 justify-start items-center">
          <Info /> Илтимос вақтни танланг
        </span>
      )}
    </div>
  );
};

export default SelectTime;
