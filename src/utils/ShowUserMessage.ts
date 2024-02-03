import { enqueueSnackbar } from "notistack";

export const ShowUserMessage = (response: any) => {
  if (response) {
    const { message, variant } = response;
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
