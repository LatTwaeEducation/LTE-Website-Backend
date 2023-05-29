export type ClassCategory = 'Junior' | 'Youth' | 'Everyone' | 'IGCSE';

export interface Asset {
  title: string;
  url: string;
}

export interface Sys {
  id: string;
}

export interface SysWithTime extends Sys {
  publishedAt: string;
}

export interface SocialMediaLinks {
  facebookLink?: string;
  facebookGroupLink?: string;
  instagramLink?: string;
  youtubeLink?: string;
  telegramLink?: string;
  twitterLink?: string;
  linkedinLink?: string;
}

export interface MobileApps {
  googlePlayLink?: string;
  appStoreLink?: string;
}

export interface AppAdvertisement extends MobileApps {
  featureImage: Asset;
  title: string;
  body: string;
}

export interface ContactInfo {
  name: string;
  content: string;
  phoneNumbers?: string[];
  emailAddresses?: string[];
  address?: string;
  btnContent?: string;
}

export interface HomeTopBanner {
  title: string;
  body: string;
  learnMoreLink: string;
}

export interface AboutUs {
  aboutUs: string;
}

export interface Mission {
  mission: string;
}

export interface Vision {
  vision: string;
}

export interface FooterContent extends AboutUs, Omit<ContactInfo, 'address'>, SocialMediaLinks, MobileApps {}

export interface CountCard {
  name: string;
  count: number;
  message: string;
}

export interface CourseCard {
  id: string;
  name: string;
  duration: number;
  students: number;
  classCategory: ClassCategory;
  thumbnail: Asset;
}

export interface Course extends Omit<CourseCard, 'thumbnail'> {
  featureImage?: Asset;
  price: number;
  requirements?: string[];
  learningPlatforms: string[];
  skills: string[];
  whatYouLearn: string;
  whatWeTeach: string;
  furtherLearning: string;
}

export interface Testimonial {
  feedback: string;
  name: string;
  occupation: string;
}

export interface Partnership {
  logo: Asset;
  company: string;
}

export type BlogsQueryOptions = {
  limit?: number;
  tagIds?: string[];
};

export interface BlogTag {
  id: string;
  name: string;
}

export interface BlogCard {
  tags?: BlogTag[];
  id: string;
  thumbnail: Asset;
  title: string;
  createdAt: string;
  description: string;
}

export interface Blog extends Omit<BlogCard, 'description'> {
  body: string;
}

export interface BaseActivityEvent {
  id: string;
  thumbnail: Asset;
}

export interface InfographicTimeline {
  startDate: string;
  endDate?: string;
  description: string;
}

export interface ContactMessage {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}

export enum EntryId {
  OrganisationInformation = '2ImII347rPAsMUUHNSwI5I',
  HomeTopBanner = '1xZieuqvmgBKHYAS2ybbFT',
  LteLogo = '2K04oXuq2Kef4qmDuehDrD',
  AppAdvertisement = '3oTRGQsj725PiMneMQ9sdE',
  ContactInfo = '6MPF8dS07lOoQ3uGLlLveF',
  SocialMedia = '2tYVPMEDeWxZi8ND7oCCo8',
}

export enum ContentTypeId {
  ContactFormSubmission = 'contactFormSubmission',
}
