import Image from "next/image";
import Chef from "@/assets/connect-us/connect-photo.jpg";
import { SmallUnderline } from "@/svg/view";
import RHFTextfield from "@/components/hook-form/RHFTextfield";
import RHFTextarea from "@/components/hook-form/RHFTextarea";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContactUsMutation } from "@/api/contact.api.req";
import RHFPhone from "@/components/hook-form/RHFPhone";
import { contactUsSchema } from "@/utils/schema";

const ConnectUs = () => {
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
    <div className="container-p cont-y">
      <h2 className="h-237575 text-text232 text-center mb-10">
        <span className="h-237575 text-orange relative">
          Contact{" "}
          <SmallUnderline className="absolute -bottom-2 left-0 w-full" />
          with Us
        </span>
      </h2>
      <div className="flex flex-row justify-between items-center lg:flex-col lg:justify-center lg:gap-6">
        <div className="w-[45%] lg:w-[90%] md:w-[100%]">
          <Image
            src={Chef}
            alt="chef"
            width={300}
            height={300}
            className="w-[100%] h-[100%]"
            loading="lazy"
          />
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[40%] mx-auto lg:w-[80%] md:w-[100%]"
          >
            <RHFTextfield name="name" placeholder="Your Name" />
            <RHFPhone name="tel" placeholder="Your Phone" />
            <RHFTextarea name="description" placeholder="Description" />
            <button
              type="submit"
              className="button-text text-white btn-contained w-full"
            >
              {isLoading ? (
                <span className="loading loading-spinner" />
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ConnectUs;
