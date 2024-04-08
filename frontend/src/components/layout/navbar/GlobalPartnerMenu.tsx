"use client";
import React from "react";
import { DropDown } from "../dropdown/index";
import { MenuItem } from "@mui/material";
import Link from "next/link";
import { GlobalPartnerInterface } from "interfaces/globalPartner";
import { useGetAll } from "hooks";

const GlobalPartnerMenu = () => {
  const { data } = useGetAll({
    key: `/configurations/global-partner`,
  });

  return (
    <>
      <DropDown
        buttonText="Global Partner"
        buttonProps={{ className: "laptop:!text-xs desktop:!text-lg" }}
      >
        {data &&
          data.rows.map((item: GlobalPartnerInterface) => (
            <MenuItem className="w-full min-w-full" key={item.id}>
              <Link
                href={"/global-partner/" + item.slug}
                className=" text-blue-900 uppercase font-semibold w-full"
              >
                {item.name}
              </Link>
            </MenuItem>
          ))}
      </DropDown>
    </>
  );
};

export default GlobalPartnerMenu;
