// import { VoidFunction } from "types/functionTypes";
import { onError } from "utils/onError";
import { useGetAll } from "./useGetAll";

export const useDownloadFile = (path: string, onSuccess?: VoidFunction) => {
  return useGetAll({
    key: path,
    select: (data: any) => data?.data,
    enabled: false,
    onSuccess: (data:any) => {
      let a = document.createElement("a");

      a.href = `${process.env.NEXT_PUBLIC_API_URL?.split("/api/v1")[0]}${
        data?.message
      }`;

      a.target = "_blank";
      a.download =
        data?.message.split("/")[data?.message.split("/")?.length - 1];
      a.click();
      onSuccess && onSuccess();
    },
    onError(err:Error) {
      onError(err);
    },
  });
};
