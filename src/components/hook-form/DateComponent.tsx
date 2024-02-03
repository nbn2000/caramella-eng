import { useState, useEffect, useRef } from "react";
import { Info } from "@/svg/view";
import { Calendar } from "react-date-range";
import { uzCyrl } from "date-fns/locale";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const dateOption = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
} as const;

const DateComponent = ({
  selectedDate,
  setSelectedDate,
  setIsDateOpen,
  isError,
  setIsError,
}: {
  selectedDate: any;
  setSelectedDate: any;
  setIsDateOpen: any;
  isError: { date: boolean; time: boolean };
  setIsError: any;
}) => {
  const [openCloseDate, setOpenCloseDate] = useState(false);
  const border = isError.date
    ? "border-[red] text-[red]"
    : "border-gray-300 text-gray-900";

  const currentDate = new Date();

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleSelectDate = (date: Date) => {
    const dateLocale = String(
      new Date(date).toLocaleDateString("en-GB", dateOption)
    );
    if (isMounted.current) {
      setSelectedDate(dateLocale);
      setOpenCloseDate(false);
    }
  };

  return (
    <div className="relative  w-[50%] mb-5 group">
      {openCloseDate && (
        <div className="absolute bottom-0 z-30">
          <Calendar
            date={currentDate}
            onChange={(newDate: Date) => handleSelectDate(newDate)}
            locale={uzCyrl}
            color="#f2360a"
            editableDateInputs={true}
            minDate={currentDate}
          />
        </div>
      )}
      <input
        type="text"
        name="date"
        id="date"
        value={selectedDate}
        readOnly
        onClick={() => {
          setOpenCloseDate(true);
          setIsDateOpen(true);
          setIsError({ date: false, time: isError.time });
        }}
        className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-solid border-b-2 ${border}  appearance-none focus:outline-none focus:ring-0 focus:border-[#f2360a] peer`}
      />
      <label
        htmlFor="date"
        className="peer-focus:font-medium absolute text-sm sm:text-xs text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#f2360a]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Сана-ни танланг
      </label>
      {isError.date && (
        <span className="text-[red] mt-[5px] text-sm flex flex-row gap-2 justify-start items-center">
          <Info /> Илтимос кунни танланг
        </span>
      )}
    </div>
  );
};

export default DateComponent;
