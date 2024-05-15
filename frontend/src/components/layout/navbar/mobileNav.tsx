"use client";
import { ChevronDown, CloseLarge, Menu } from "@carbon/icons-react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "..";
import GlobalPartnerMenu from "./GlobalPartnerMenu";
import { usePathname } from "next/navigation";
import { useGetAll } from "hooks";

const MobileNav = ({ values }: any) => {
  const pathnameHave = usePathname();
  const isActive = (pathname: any) => {
    return pathnameHave === pathname
      ? "bg-white text-blue-900"
      : "text-white hover:text-blue-900 hover:bg-white ";
  };
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => {
    console.log(newOpen, "toggleDrawer");

    setOpen(newOpen);
  };

  const [globalOpen, setGlobalOpen] = React.useState(false);

  const globalToggleDrawer = (newOpen: boolean) => {
    setGlobalOpen(newOpen);
  };
  let globalPartner = [];
  let response = useGetAll({ key: "/configurations/global-partner" });
  globalPartner = response?.data?.rows;
  const DrawerList = (
    <>
      <Box
        sx={{ width: 320 }}
        role="presentation"
        onClick={() => toggleDrawer(false)}
      >
        <div className="flex justify-start px-3 items-center gap-5 border-b border-solid">
          <IconButton onClick={() => toggleDrawer(false)}>
            <CloseLarge size={28} />
          </IconButton>
          <Link href={"/"}>
            <Image
              alt="img"
              height={70}
              width={160}
              src="/img2/Riseback logo.png"
            />
          </Link>
        </div>
        <List className="border-b-2 border-grey !font-semibold">
          <ListItem
            disablePadding
            className="flex flex-col justify-start items-start pl-2"
          >
            <ListItemButton>
              <Link href={"/for-organization"} className="text-black font-bold">
                <ListItemText primary={"For Organizartions"} />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link href={"/for-government"} className="text-black font-bold">
                <ListItemText primary={"For Government"} />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link href={"/for-partnership"} className="text-black font-bold">
                <ListItemText primary={"For Partnership"} />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link href={"/for-universities"} className="text-black font-bold">
                <ListItemText primary={"For Universities"} />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link href={"/for-placement"} className="text-black font-bold">
                <ListItemText primary={"For Placement"} />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
        <List className=" !font-semibold">
          <ListItem
            disablePadding
            className="flex flex-col justify-start items-start pl-2"
          >
            <ListItemButton>
              <Link href={"/about"} className="text-black font-bold">
                <ListItemText primary={"About Us"} />
              </Link>
            </ListItemButton>
            {/* <ListItemButton>
            <GlobalPartnerMenu />
          </ListItemButton> */}

            <ListItemButton>
              <Link href={"/event"} className="text-black font-bold">
                <ListItemText primary={"Events"} />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link href={"/blogs"} className="text-black font-bold">
                <ListItemText primary={"Blog"} />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link href={"/media"} className="text-black font-bold">
                <ListItemText primary={"Media"} />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link href={"/career"} className="text-black font-bold">
                <ListItemText primary={"Career"} />
              </Link>
            </ListItemButton>
            <ListItemButton>
              <Link href={"/contact-us"} className="text-black font-bold">
                <ListItemText primary={"Contact"} />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box>
        <ListItem
          disablePadding
          className="flex flex-col justify-start items-start pl-2"
        >
          <ListItemButton
            onClick={() => globalToggleDrawer(true)}
            className="w-full "
          >
            <div className="w-full flex justify-between items-center">
              <ListItemText
                primary={"Global Partner"}
                className="font-bold"
              ></ListItemText>
              <ChevronDown />
            </div>
          </ListItemButton>
          {globalOpen &&
            globalPartner?.map((item: any) => (
              <ListItemButton
                className="w-full "
                key={item.id}
                onClick={() => {
                  toggleDrawer(false);
                  globalToggleDrawer(false);
                }}
              >
                <Link
                  href={"/global-partner/" + item.slug}
                  className="text-black font-bold w-full h-full"
                >
                  <ListItemText
                    primary={item.name}
                    // onClick={() => ()=>toggleDrawer(false)}
                  />
                </Link>
              </ListItemButton>
            ))}
        </ListItem>
        <div className="bg-gray-100 p-4">
          <Button className="w-full">
            <Link href="/login" className=" text-white uppercase ">
              {values ? "Admin" : "log in"}
            </Link>
          </Button>
        </div>
      </Box>
    </>
  );

  const container = React.useRef<Element | null>(null);

  React.useEffect(() => {
    container.current = document.getElementById("LMS");
  }, []);

  return (
    <nav className="flex laptop:hidden justify-between items-center gap-5 py-[1px] px-4 overflow-hidden">
      <div className="flex justify-start items-center gap-5">
        <IconButton onClick={() => toggleDrawer(true)}>
          <Menu size={28} />
        </IconButton>
        <Link href={"/"}>
          <Image
            alt="img"
            height={70}
            width={160}
            src="/img2/Riseback logo.png"
          />
        </Link>
      </div>
      <Button>
        <Link href="/courses" className=" text-white uppercase ">
          Courses
        </Link>
      </Button>
      <Drawer
        container={container.current}
        open={open}
        onClose={() => toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </nav>
  );
};

export default MobileNav;
