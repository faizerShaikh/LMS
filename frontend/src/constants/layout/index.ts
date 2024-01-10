export const logoPath = "/media/images/zunoks_logo.png";

export interface menuType {
  title: string;
  path: string | null;
  icon?: string;

  children?: menuType[];
}

export const menuItems: menuType[] = [
  { icon: "DashboardReference", title: "Dashboard", path: "/" },
  { icon: "Settings", title: "Components", path: "/components" },
];
