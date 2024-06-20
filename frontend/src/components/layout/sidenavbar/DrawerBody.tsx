"use client";

import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { colors } from "constants/theme";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Catalog,
  ChatLaunch,
  ChevronDown,
  ChevronUp,
  CollapseCategories,
  DashboardReference,
  Events,
  Settings,
  ShareKnowledge,
  TaskComplete,
  UserData,
} from "@carbon/icons-react";
import cookie from "cookie";
import {
  adminMenuItems,
  facultyMenuItems,
  salesTeamMenuItems,
} from "constants/layout";
import { getCookies } from "lib/handel-cookies";

const activeMenuStyles = {
  background: colors.primary.light,
  borderLeft: `4px solid ${colors.primary.dark}`,
};

const activeSubMenuStyles = {
  background: colors.secondary.light,
  boxShadow: `-5px 0px 0px 0px ${colors.secondary.dark}`,
};

let Icons: { [key: string]: () => React.ReactNode } = {
  DashboardReference: () => (
    <DashboardReference fill={colors.primary.dark} size={24} />
  ),
  CollapseCategories: () => (
    <CollapseCategories fill={colors.primary.dark} size={24} />
  ),
  Catalog: () => <Catalog fill={colors.primary.dark} size={24} />,
  Events: () => <Events fill={colors.primary.dark} size={24} />,
  ChatLaunch: () => <ChatLaunch fill={colors.primary.dark} size={24} />,
  Settings: () => <Settings fill={colors.primary.dark} size={24} />,
  TaskComplete: () => <TaskComplete fill={colors.primary.dark} size={24} />,
  ShareKnowledge: () => <ShareKnowledge fill={colors.primary.dark} size={24} />,
};

/// get the user data using cookies and then compare it if the user role is admin then admin menu items or if its seals team then show seals team menu items
const DrawerBody = () => {
  const pathname = usePathname();
  const [menus, setMenus] = useState(adminMenuItems);

  const [selectedPath, setSelectedMenu] = useState("");

  useEffect(() => {
    setSelectedMenu(pathname);
    // const userData = getCookies("userData");
    // console.log(userData, "<<<<<<<userData");
    // if (role === "admin") {
    //   setMenus(adminMenuItems);
    // } else if (role === "SalesTeam") {
    //   setMenus(salesTeamMenuItems);
    // }
    const fetchData = async () => {
      try {
        const userDataString = await getCookies("userData");
        const userData = JSON.parse(userDataString);
        // console.log("Parsed user data:", userData);
        const role = userData.role;
        if (role === "admin") {
          setMenus(adminMenuItems);
        } else if (role === "SalesTeam") {
          setMenus(salesTeamMenuItems);
        } else if (role === "Faculty") {
          setMenus(facultyMenuItems);
        }
      } catch (error) {
        console.error("Error getting user data:", error);
      }
    };
    fetchData();
  }, [pathname]);

  return (
    <div>
      <Box height="66px" className="flex items-center justify-center">
        <h3 className="font-semibold text-4xl text-center text-primary">LMS</h3>
      </Box>
      <Divider color={colors.secondary.dark} className="w-10/12 mx-auto" />
      <List className="pt-4">
        {menus?.length > 0 &&
          menus?.map((item: any, index: number) =>
            item?.children ? (
              <Box key={item.title + index}>
                <ListItem
                  disablePadding
                  style={
                    selectedPath.startsWith(item.path) ? activeMenuStyles : {}
                  }
                  onClick={() =>
                    setSelectedMenu((prev) =>
                      prev !== item.path ? item.path : ""
                    )
                  }
                >
                  <ListItemButton className="pl-8">
                    <ListItemIcon sx={{ minWidth: "40px" }} className="pr-3">
                      {item.icon &&
                        (Icons[item.icon] ? Icons[item.icon]() : "")}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        className:
                          "font-aller font-medium xl:text-sm 2xl:text-base",
                        color: "#4D4D4F",
                      }}
                    />
                    {selectedPath.startsWith(item.path) ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </ListItemButton>
                </ListItem>
                <Collapse
                  in={selectedPath.startsWith(item.path)}
                  timeout="auto"
                  unmountOnExit
                  component="div"
                >
                  <List
                    component="div"
                    className={`border-start border-3 ps-3 py-0 ml-8`}
                  >
                    {item.children.map((subItem: any) => (
                      <Link key={subItem.title} href={subItem.path} passHref>
                        <ListItem
                          disablePadding
                          style={
                            subItem.path === pathname ? activeSubMenuStyles : {}
                          }
                        >
                          <ListItemButton className="pl-8">
                            <ListItemText
                              primary={subItem.title}
                              primaryTypographyProps={{
                                className:
                                  "font-aller font-medium xl:text-sm 2xl:text-base",
                                color: "#4D4D4F",
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ) : (
              <Link href={item.path || "#"} passHref key={item.title + index}>
                <ListItem
                  onClick={() => setSelectedMenu(item.path)}
                  disablePadding
                  style={
                    item.path === "/" && item.path === selectedPath
                      ? activeMenuStyles
                      : item.path !== "/" && item.path === selectedPath
                      ? activeMenuStyles
                      : item.path !== "/" && selectedPath.startsWith(item.path)
                      ? activeMenuStyles
                      : {}
                  }
                >
                  <ListItemButton className="pl-8">
                    <ListItemIcon sx={{ minWidth: "40px" }} className="pr-3">
                      {item.icon &&
                        (Icons[item.icon] ? Icons[item.icon]() : "")}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        className:
                          "font-aller font-medium    xl:text-sm 2xl:text-base",
                        color: "#4D4D4F",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            )
          )}
      </List>
    </div>
  );
};

export default DrawerBody;
