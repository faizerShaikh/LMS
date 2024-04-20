import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <div className="w-[350px] rounded-3xl">
      <Stack spacing={1}>
        {/* <Skeleton
        variant="text"
        sx={{ fontSize: "1rem" }}
        width={210}
        height={40}
      />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />  */}
        <Skeleton
          variant="rounded"
          width={350}
          height={180}
          className="rounded-t-2xl"
        />

        <Skeleton variant="rounded" width={350} height={58} />

        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem" }}
          width={350}
          height={40}
        />
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem" }}
          width={350}
          height={40}
        />
        <Skeleton
          variant="text"
          sx={{ fontSize: "1rem" }}
          width={350}
          height={40}
        />
        <div className="flex gap-3">
          <Skeleton
            variant="rounded"
            width={175}
            height={48}
            className="rounded-xl"
          />
          <Skeleton
            variant="rounded"
            width={175}
            height={48}
            className="rounded-xl"
          />
        </div>
      </Stack>
    </div>
  );
}
