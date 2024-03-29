import { ContentfulAsset } from './Contentful/CommonTypes';

export type ClassCategory = 'Junior' | 'Youth' | 'Everyone' | 'IGCSE';

export type Asset = string;

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

export interface ContentfulAppAdvertisement extends MobileApps {
  featureImage?: ContentfulAsset;
  title: string;
  body: string;
}

export interface AppAdvertisement extends MobileApps {
  featureImage?: Asset;
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

export interface ContentfulMission {
  mission: string;
  missionImage: ContentfulAsset;
}

export interface ContentfulVision {
  vision: string;
  visionImage: ContentfulAsset;
}

export interface Mission {
  mission: string;
  missionImage: Asset;
}

export interface Vision {
  vision: string;
  visionImage: Asset;
}

export interface FooterContent extends AboutUs, Omit<ContactInfo, 'address'>, SocialMediaLinks, MobileApps {}

export interface CountCard {
  name: string;
  count: number;
  message: string;
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

export interface BaseActivityEvent {
  id: string;
  thumbnail: Asset;
}

export interface ContentfulInfographicTimeline {
  event: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface InfographicTimeline {
  title: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export enum EntryId {
  OrganisationInformation = '2ImII347rPAsMUUHNSwI5I',
  HomeTopBanner = '1xZieuqvmgBKHYAS2ybbFT',
  LteLogo = '2K04oXuq2Kef4qmDuehDrD',
  AppAdvertisement = '3oTRGQsj725PiMneMQ9sdE',
  ContactInfo = '6MPF8dS07lOoQ3uGLlLveF',
  SocialMedia = '2tYVPMEDeWxZi8ND7oCCo8',
  CoursesPageSettings = '6rJCqJaB8nqKywavmxgEc9',
}

export enum ContentTypeId {
  ContactFormSubmission = 'contactFormSubmission',
}

export const DatePattern = 'dd LLL yyyy';
export const TimePattern = 'pppp (z) ';
