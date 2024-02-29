export const logoPath = "/media/images/zunoks_logo.png";

export interface menuType {
  title: string;
  path: string | null;
  icon?: string;

  children?: menuType[];
}

export const menuItems: menuType[] = [
  { icon: "DashboardReference", title: "Dashboard", path: "/" },
  // { icon: "Settings", title: "Components", path: "/components" },
  { icon: "ChatLaunch", title: "Universities", path: "/admin/universities" },
  // { icon: "Events", title: "Faculties", path: "/admin/faculty" },
  // { icon: "Catalog", title: "Courses", path: "/admin/courses" },
  // { icon: "Events", title: "Students", path: "/admin/students" },
  { icon: "Events", title: "Page Content", path: "/admin/page-content" },
  { icon: "Events", title: "Media", path: "/admin/media" },
  { icon: "Events", title: "Enquiries", path: "/admin/enquiries" },
  { icon: "Events", title: "FAQ's", path: "/admin/faq" },

];
