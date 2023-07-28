declare module "*.jpg";
declare module "*.jpeg";

// Use type safe message keys with `next-intl`
type Messages = typeof import("./messages/en.json");
declare interface IntlMessages extends Messages {}
