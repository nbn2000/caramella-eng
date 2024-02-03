const Pagination = ({
  active,
  pageCount,
  setActive,
}: {
  active: any;
  pageCount: any;
  setActive: any;
}) => {
  const activeClass =
    "w-[5rem] h-full text-white hover:bg-orange bg-orange sm:!w-[2rem] lg:w-[4rem] md:w-[3rem] ";
  const notActiveClass =
    "w-[5rem] h-full text-white hover:bg-orange bg-text233 sm:!w-[2rem] lg:w-[4rem] md:w-[3rem] ";
  return (
    <div className="flex flex-row h-[5rem] sm:!h-[2rem] lg:h-[4rem] md:h-[3rem] ">
      {[...Array(pageCount)].map((_, idx) => {
        const id = idx + 1;
        return (
          <button
            key={id}
            onClick={() => {
              setActive(id);
            }}
            className={active === id ? activeClass : notActiveClass}
          >
            {id}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
