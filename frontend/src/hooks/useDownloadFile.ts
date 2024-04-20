// import { VoidFunction } from "types/functionTypes";
import { onError } from "utils/onError";
import { useGetAll } from "./useGetAll";

export const useDownloadFile = (path: string, onSuccess?: VoidFunction) => {
  return useGetAll({
    key: path,
    select: (data: any) => data?.data,
    enabled: false,
    onSuccess: (data: any) => {
      let a = document.createElement("a");

      a.href = `${process.env.NEXT_PUBLIC_BASE_MEDIA_URL}/${data?.data?.filePath}`;

      a.target = "_blank";
      a.download =
        data?.data?.filePath.split("/")[
          data?.data?.filePath.split("/")?.length - 1
        ];
      a.click();
      onSuccess && onSuccess();
    },
    onError(err: Error) {
      onError(err);
    },
  });
};
