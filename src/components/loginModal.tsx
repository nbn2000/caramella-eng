import { useUserSignupMutation } from "@/api/singup.api.req";
import { Cancel, Logo } from "@/svg/view";
import Link from "next/link";
import { useRouter } from "next/router";
import PinInput from "react-pin-input";
const LoginModal = ({
  setOpen,
  open,
  checkout,
}: {
  setOpen: any;
  open: boolean;
  checkout?: boolean;
}) => {
  const modalClass = open ? "fixed" : "hidden";
  const [userSignup, { isLoading }] = useUserSignupMutation();
  const opacity = isLoading ? "opacity-70" : "";
  const router = useRouter();
  const handleSubmit = async (value: any, index: any) => {
    await userSignup({ passCode: value })
      .unwrap()
      .then((data: object) => {
        localStorage.setItem("user", JSON.stringify(data));
        if (checkout) router.push("/checkout");
        setOpen(false);
      });
  };

  return (
    <div
      id="modal"
      className={`modal-box ${opacity} z-50 md:p-4 sm:p-4 py-8 px-16 boxShadow bg-white rounded-xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${modalClass}`}
    >
      <button
        onClick={() => setOpen(false)}
        className="absolute text-orange right-[2%] top-[2%]"
      >
        <Cancel />
      </button>
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <Logo />
        <div className="flex flex-col justify-center items-center text-center">
          <h4 className="h-175063 text-orange whitespace-nowrap">
            Кодни Киритинг
          </h4>
          <p className="b-0875">
            <Link
              href="https://t.me/register_caramella_bot"
              className="text-orange b-0875"
              target="_blank"
            >
              @register_caramella_bot
            </Link>{" "}
            телеграм ботига киринг ва 1 дақиқалик кодингизни олинг
          </p>
        </div>
        <form className="w-max">
          <PinInput
            length={6}
            initialValue=""
            secret
            secretDelay={100}
            onChange={(value, index) => {}}
            type="numeric"
            inputMode="number"
            style={{ padding: "1px" }}
            inputStyle={{
              borderColor: "#ccc",
              borderRadius: "1rem",
              width: 40,
            }}
            inputFocusStyle={{ borderColor: "#f2360a" }}
            onComplete={(value, index) => handleSubmit(value, index)}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
