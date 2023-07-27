export interface INavItemCms {
  title: string;
  path: string;
  icon: string;
}
export type INavList = INavItemCms[];

export const NavListCms: INavList = [
  {
    title: "content management",
    path: "/cms/content",
    icon: "/navbar/content_management.svg",
  },
  {
    title: "calendar management",
    path: "/cms/calendar",
    icon: "/navbar/calendar_management.svg",
  },
  {
    title: "gallery management",
    path: "/cms/gallery_management",
    icon: "/navbar/gallery_management.svg",
  },
  {
    title: "donation management",
    path: "/cms/donation_management",
    icon: "/navbar/donation_management.svg",
  },
];
