import RHFPhone from "@/components/hook-form/RHFPhone";
import RHFTextarea from "@/components/hook-form/RHFTextarea";
import RHFTextfield from "@/components/hook-form/RHFTextfield";
import { useForm, FormProvider } from "react-hook-form";
import { Cancel } from "@/svg/view";
import { useApplyVacancyMutation } from "@/api/vacancy.api.req";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendRequestSchema } from "@/utils/schema";

const ModalSubmit = ({
  setOpen,
  open,
  vacancy,
}: {
  setOpen: any;
  open: boolean;
  vacancy: any;
}) => {
  const [applyVacancy, { isLoading }] = useApplyVacancyMutation();
  const modalClass = open ? "fixed" : "hidden";
  const methods = useForm({
    defaultValues: {
      fullName: "",
      description: "",
      tel: "",
    },
    resolver: yupResolver(sendRequestSchema),
  });

  const { handleSubmit } = methods;
  const onSubmit = async (event: any) => {
    await applyVacancy({ vacancyId: `${vacancy._id}`, ...event })
      .unwrap()
      .then(() => setOpen(false));
  };
  return (
    <div
      id="modal"
      className={`modal-box z-20 py-8 px-16 boxShadow bg-white rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${modalClass}`}
    >
      <button
        onClick={() => setOpen(false)}
        className="absolute text-orange right-[2%] top-[2%]"
      >
        <Cancel />
      </button>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h4 className="h-175063 text-text232 md:text-base">
              Биз билан ишлашни ҳоҳлайсизми ?
            </h4>
            <h4 className="b-145475 text-orange md:text-sm">
              Илтимос, қуйидаги шаклни тўлдиринг
            </h4>
          </div>
          <RHFTextfield name="fullName" placeholder="Тўлиқ Исм Шарифингиз" />
          <RHFPhone name="tel" placeholder="Телефон Рақамингиз" />
          <RHFTextarea
            name="description"
            placeholder="Ўзингиз ҳақингизда бир оз"
          />
          <button
            type="submit"
            className="button-text text-white btn-contained w-full"
          >
            Топшириш
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default ModalSubmit;
