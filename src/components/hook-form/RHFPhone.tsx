import { useState } from "react";
import { PatternFormat } from "react-number-format";
import { Controller, useFormContext } from "react-hook-form";
import { Info } from "@/svg/view";

const RHFPhone = ({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) => {
  const [onFocus, setOnFocus] = useState<boolean>(false);
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, name, value } }) => (
        <div className="relative z-0 w-full mb-5 group">
          {onFocus ? (
            <PatternFormat
              format="+998 ## ### ####"
              allowEmptyFormatting
              mask="_"
              name={name}
              value={value}
              onChange={onChange}
              autoComplete="off"
              className="block py-2.5 px-0 w-full border-solid text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
              id={name}
              onBlur={() => setOnFocus(false)}
            />
          ) : (
            <input
              type="text"
              id="tel"
              name={name}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-solid border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#f2360a] peer"
              placeholder=" "
              onFocus={() => setOnFocus(true)}
            />
          )}

          <label
            htmlFor={name}
            className="peer-focus:font-medium absolute text-sm sm:text-xs text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#f2360a] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {placeholder}
          </label>
          {errors[name] && (
            <span className="text-[red] mt-[5px] text-sm flex flex-row gap-2 justify-start items-center">
              <Info /> {`${errors[name]?.message}`}
            </span>
          )}
        </div>
      )}
    />
  );
};

export default RHFPhone;
