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
  { icon: "Catalog", title: "Courses", path: "/admin/courses" },
  {
    icon: "Catalog",
    title: "Courses Specialization",
    path: "/admin/course-spetalization",
  },
  // { icon: "Events", title: "Students", path: "/admin/students" },
  { icon: "Events", title: "Page Content", path: "/admin/page-content" },
  { icon: "Events", title: "Media", path: "/admin/media" },
  { icon: "Events", title: "Enquiries", path: "/admin/enquiries" },
  { icon: "Events", title: "FAQ's", path: "/admin/faq" },
  { icon: "Events", title: "Blog's", path: "/admin/blog" },
  {
    icon: "Events",
    title: "Blog's Catagories",
    path: "/admin/blog-catagories",
  },
  { icon: "Events", title: "Webinar's", path: "/admin/webinar" },
  { icon: "Events", title: "Event's", path: "/admin/event" },
  { icon: "Events", title: "Global Partners's", path: "/admin/global-partner" },
];
