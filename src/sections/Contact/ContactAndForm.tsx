import React from "react";
import { SmallUnderline, Facebook, Instagram, Telegram } from "@/svg/view";
import Link from "next/link";
import RHFTextfield from "@/components/hook-form/RHFTextfield";
import RHFTextarea from "@/components/hook-form/RHFTextarea";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContactUsMutation } from "@/api/contact.api.req";
import RHFPhone from "@/components/hook-form/RHFPhone";
import { contactUsSchema } from "@/utils/schema";

const ContactAndForm = () => {
  const [contactUs, { isLoading }] = useContactUsMutation();
  const methods = useForm({
    defaultValues: {
      name: "",
      tel: "",
      description: "",
    },
    resolver: yupResolver(contactUsSchema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = async (event: any) => {
    await contactUs(event)
      .unwrap()
      .then(() => reset());
  };
  return (
    <div className="cont-y container-p flex flex-row justify-between items-start gap-6 lg:flex-col lg:items-center">
      <div>
        <h3 className="h-237575 text-text232">Саволларингиз борми ?</h3>
        <h5 className="b-145475 text-gray-500 mb-7">Бизга Хабар Юборинг</h5>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <RHFTextfield name="name" placeholder="Сизнинг Исмингиз" />
            <RHFPhone name="tel" placeholder="Сизнинг телефонингиз" />
            <RHFTextarea name="description" placeholder="Тавсиф" />
            <button
              type="submit"
              className="button-text text-white btn-contained w-full"
            >
              {isLoading ? (
                <span className="loading loading-spinner" />
              ) : (
                "Жўнатиш"
              )}
            </button>
          </form>
        </FormProvider>
      </div>
      <div className="flex flex-col justify-start items-start gap-[3rem]">
        <h3 className="h-237575 text-orange relative">
          Caramella
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
        </h3>
        <div className="flex flex-col justify-start items-start gap-[2rem]">
          <div>
            <h5 className="b-145475  text-text233">Бизнинг Манзил:</h5>
            <p className="b-0875 text-gray-500">
              Ўзбекистон &#10093; Наманган &#10093; Бобуршох кўча &#10093;
              Боссмилк кафеси ёнида
            </p>
          </div>
          <hr className="w-full h-[2px] bg-gray-300" />
          <div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <h5 className="text-lg text-text233">Телефон Рақам:</h5>
              <p className="b-0875 text-gray-500">+998 91 352 44 74</p>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <h5 className="text-lg text-text233">Телефон Рақам:</h5>
              <p className="b-0875 text-gray-500">+998 33 052 44 74</p>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <h5 className="text-lg text-text233">Электрон почта:</h5>
              <p className="b-0875 text-gray-500">caramella@gmail.com</p>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center">
              <h5 className="text-lg text-text233">Иш Вақти:</h5>
              <p className="b-0875 text-gray-500">
                <strong>Душ-Боз:</strong> 9:00-18:00
              </p>
            </div>
          </div>
          <hr className="w-full h-[2px] bg-gray-300" />
          <div className="flex flex-row justify-center items-center gap-12 w-full bg-orange p-4 rounded-lg">
            <Link href="/">
              <Instagram />
            </Link>
            <Link href="/">
              <Telegram />
            </Link>
            <Link href="/">
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAndForm;
