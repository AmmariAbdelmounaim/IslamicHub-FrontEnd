export interface User {
  id: number;
  firstname: string;
  lastname?: string;
  email: string;
  password: string;
  country: string;
  address: string;
  phoneNumber: string;
  token: string;
  centerDTO: Center;
  role: string;
}
export interface Center {
  id: number;
  name: string;
  address: string;
  ownerId: number;
  description: string;
  themeDTO: Theme;
  headerFooterDTO: HeaderFooter;
}

export interface Theme {
  id: number;
  titleColor: string;
  textColor: string;
  backgroundColor: string;
  primaryColor: string;
  centerId: number;
}
export interface HeaderFooter {
  id: number;
  headerBGColor: string;
  headerTextColor: string;
  headerAboutUs: boolean;
  headerOurServices: boolean;
  headerOurEvents: boolean;
  headerPrayerTime: boolean;
  headerTestimonials: boolean;
  headerContanctUs: boolean;
  largeLogo: string;
  smallLogo: string;
  footerBGColor: string;
  footerTextColor: string;
  footerFacebook: string;
  footerInsta: string;
  footerTwitter: string;
  footerThreads: string;
  footerEmail: string;
  footerPhoneNumber: string;
  footerAddress: string;
  footerwtp: string;
  centerId: number;
}
