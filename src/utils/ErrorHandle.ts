import { enqueueSnackbar } from "notistack";

export const ErrorHandle = (error: any) => {
  if (error?.data !== undefined) {
    const { message, variant } = error?.data;
    enqueueSnackbar(message, { variant });
  } else {
    enqueueSnackbar(
      "something went wrong please refresh the page and try again",
      {
        variant: "error",
      }
    );
  }
};
