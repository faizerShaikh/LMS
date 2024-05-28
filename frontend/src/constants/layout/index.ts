export const logoPath = "/media/images/zunoks_logo.png";

export interface menuType {
  title: string;
  path: string | null;
  icon?: string;
  children?: menuType[];
}

// salesTeamMenuItems.map((j) => j.path)

// !["/", "/admin/leads"].includes(req.url); return 404

// create diffrent menu items for seals team and admin  sealse team will have only tow pagess access dashbord and leads assigns
export const adminMenuItems: menuType[] = [
  { icon: "DashboardReference", title: "Dashboard", path: "/admin" },
  // { icon: "Settings", title: "Components", path: "/components" },
  { icon: "ChatLaunch", title: "Universities", path: "/admin/universities" },
  // { icon: "Events", title: "Faculties", path: "/admin/faculty" },
  { icon: "Catalog", title: "Courses", path: "/admin/courses" },
  {
    icon: "Catalog",
    title: "University Courses Specialization",
    path: "/admin/course-spetalization",
  },
  {
    icon: "Catalog",
    title: "Custom Courses Specialization",
    path: "/admin/custom-course-specialization",
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
  {
    icon: "Events",
    title: "Application's",
    path: "/admin/applicationForms",
  },
  {
    icon: "ShareKnowledge",
    title: "Users's",
    path: "/admin/users",
  },
  {
    icon: "ShareKnowledge",
    title: "Sales Team Users's",
    path: "/admin/salesTeam",
  },
  {
    icon: "ShareKnowledge",
    title: "Leads",
    path: "/admin/leads",
  },
];

export const salesTeamMenuItems: menuType[] = [
  { icon: "DashboardReference", title: "Dashboard", path: "/admin" },
  {
    icon: "ShareKnowledge",
    title: "Leads",
    path: "/admin/leads",
  },
];

export const salesTeamMenuItemsList = salesTeamMenuItems.map(
  (item) => item.path
);

export const adminMenuItemsList = adminMenuItems.map((item) => item.path);
