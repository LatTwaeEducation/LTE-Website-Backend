import { Asset } from './Asset';

export interface OrganisationInformation {
  coursesCountMessage: string;
  description: string;
  membersCount: number;
  membersCountMessage: string;
  mission: string;
  missionImage?: Asset;
  recruitmentFormLink: string;
  aboutUs: string;
  partnershipFormLink: string;
  studentsCountMessage: string;
  vision: string;
  visionImage?: Asset;
}

export type SingleResponse = {
  organisationInformation: OrganisationInformation;
};
