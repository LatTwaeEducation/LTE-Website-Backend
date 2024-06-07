import { AppAdvertisement as DbObjectAppAds } from '@data/ApplicationAdvertisement';
import { HomeTopBanner as DbObjectBanner } from '@data/HomeTopBanner';
import { Partnership as DbObjectPartnership } from '@data/Partnership';
import { Testimonial as DbObjectTestimonial } from '@data/Testimonial';
import { Partnership as DomainPartnership, Testimonial as DomainTestimonial } from '@domain/Common';
import { AppAdvertisement as DomainAppAds, HomeTopBanner as DomainBanner } from '@domain/Home';

export const mapHomeTopBanner = (src: DbObjectBanner): DomainBanner => ({
  title: src.title,
  body: src.body,
  learnMoreLink: src.learnMoreLink,
});

export const mapPartnership = (src: DbObjectPartnership): DomainPartnership => ({
  company: src.company,
  logo: src.logo.url,
});

export const mapTestimonial = (src: DbObjectTestimonial): DomainTestimonial => ({
  name: src.name,
  occupation: src.occupation,
  feedback: src.feedback,
});

export const mapAppAds = (src: DbObjectAppAds): DomainAppAds => ({
  googlePlayLink: src.googlePlayLink,
  appStoreLink: src.appStoreLink,
  body: src.body,
  featureImage: src.featureImage?.url,
  title: src.title,
});
