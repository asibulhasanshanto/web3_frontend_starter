import { useSnackbar } from "notistack";

const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar();

  return (message, variant) =>
    enqueueSnackbar(message, {
      variant,
      anchorOrigin: { vertical: "bottom", horizontal: "left" },
    });
};

export default useNotification;
