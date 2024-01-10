import { useRouter } from "next/navigation";

export const RedirectUsers = (paths: string[], pathname: string) => {
  if (!paths.includes(pathname)) {
    const { push } = useRouter();
    return push(paths[0]);
  }
};
