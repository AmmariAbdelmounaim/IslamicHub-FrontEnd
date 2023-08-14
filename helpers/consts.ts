export interface INavItemCms {
  title: string;
  path: string;
  icon: string;
}
export type INavList = INavItemCms[];

export const NavListCms: INavList = [
  {
    title: "content management",
    path: `/cms/content`,
    icon: "/navbar/content_management.svg",
  },
  {
    title: "calendar management",
    path: `/cms/calendar`,
    icon: "/navbar/calendar_management.svg",
  },
  {
    title: "gallery management",
    path: `/cms/gallery`,
    icon: "/navbar/gallery_management.svg",
  },
  {
    title: "donation management",
    path: `/cms/donation`,
    icon: "/navbar/donation_management.svg",
  },
  {
    title: "other sections",
    path: `/cms/other`,
    icon: "/navbar/other_sections.svg",
  },
  {
    title: "messages",
    path: "/cms/messages",
    icon: "/navbar/messages.svg",
  },
];
