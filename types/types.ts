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
  homePageDTO: HomePage;
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

export interface HomePage {
  id: number;
  eventAdditionalInfoColor: string;
  eventBgColor: string;
  eventBorderColor: string;
  eventDTOList: Event[];
  iconSlidesColor: string;
  slideDTOList: Slide[];
  serviceDTOList: Service[];
  testimonialDTOList: Testimonial[];
  aboutUsDTOList: AboutUs[];
  prayerDTO: Prayer;
  centerId: number;
}

export interface Event {
  id?: number;
  name: string;
  description: string;
  location: string;
  startAt: string;
  endAt: string;
  homPageId?: number;
}

export interface Testimonial {
  id?: number;
  image: Slide[];
  userName: string;
  comment: string;
  homePageId?: number;
}

export interface AboutUs {
  id?: number;
  title: string;
  paragraph: string;
  homePageId?: number;
}
export interface Service {
  id?: number;
  name: string;
  description: string;
  homPageId?: number;
}
export interface Slide {
  id?: number;
  image: string;
  homePageId?: number;
}
export interface Prayer {
  id?: number;
  country: string;
  city: string;
  state?: string;
  highLatitude: number;
  prayer: number; //method
  asar: number; //school
  prayerTimeDTO: PrayerTime;
  homePageId?: number;
}
export interface PrayerTime {
  id?: number;
  fajr: string;
  shuruq: string;
  zohar: string;
  asar: string;
  maghrib: string;
  isha: string;
  day: string;
  month: string;
  year: string;
  prayerId?: number;
}
