import { Suspense } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";
import dynamic from "next/dynamic";
import Head from "next/head";
import Logo from "@/assets/caramella-logo/caramella-logo2.png";

const SignupOperation = dynamic(() => import("./SignupOperation"), {
  ssr: false,
});

const CloseButton = ({ snackbarKey }: { snackbarKey: any }) => {
  const { closeSnackbar } = useSnackbar();

  return <button onClick={() => closeSnackbar(snackbarKey)}>X</button>;
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SnackbarProvider
      autoHideDuration={5000}
      action={(snackbarKey) => <CloseButton snackbarKey={snackbarKey} />}
    >
      <Head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Indulge in a delightful experience with our handcrafted cakes, cookies, and ready-made treats. Order your favorite desserts for any occasion, choose a convenient delivery date and time, and we'll confirm your order with a personal touch. Discover a world of sweetness at Caramella."
        />
        <meta property="og:title" content="Caramella sweets order website" />
        <meta
          property="og:description"
          content="Indulge in a delightful experience with our handcrafted cakes, cookies, and ready-made treats. Order your favorite desserts for any occasion, choose a convenient delivery date and time, and we'll confirm your order with a personal touch. Discover a world of sweetness at Caramella."
        />
        <meta property="og:url" content="https://caramella-nam.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={Logo.src} />
      </Head>
      <Suspense
        fallback={
          <span className="loading loading-ring loading-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"></span>
        }
      >
        <SignupOperation children={children} />
      </Suspense>
    </SnackbarProvider>
  );
}
