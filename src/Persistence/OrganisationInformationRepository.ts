import { sendGraphQl } from '@helpers/ContentfulServices';

import { EntryId } from './Data/Constraints';
import { OrganisationInformation, SingleResponse } from './Data/OrganisationInformation';

export const getPartnershipFormLink = async (): Promise<string> => {
  const query = `
  query ($id: String!) {
    organisationInformation(id: $id) {
      partnershipFormLink    
    }
  }`;

  const queryVariable = {
    id: EntryId.OrganisationInformation,
  };

  const { organisationInformation } = await sendGraphQl<SingleResponse>(query, queryVariable);
  return organisationInformation.partnershipFormLink;
};

export const getRecruitmentFormLink = async (): Promise<string> => {
  const query = `
  query ($id: String!) {
    organisationInformation(id: $id) {
      recruitmentFormLink    
    }
  }`;

  const queryVariable = {
    id: EntryId.OrganisationInformation,
  };

  const { organisationInformation } = await sendGraphQl<SingleResponse>(query, queryVariable);
  return organisationInformation.recruitmentFormLink;
};

export const getAboutUs = async (): Promise<string> => {
  const query = `
  query ($id: String!) {
    organisationInformation(id: $id) {
      aboutUs
    }
  }`;

  const queryVariable = {
    id: EntryId.OrganisationInformation,
  };

  const { organisationInformation } = await sendGraphQl<SingleResponse>(query, queryVariable);
  return organisationInformation.aboutUs;
};

export const getMissionVision = async (): Promise<OrganisationInformation> => {
  const query = `
  query ($id: String!) {
    organisationInformation(id: $id) {
      mission
      missionImage {
        url
        title
      }
      vision
      visionImage {
        url
        title
      }
    }
  }`;

  const queryVariable = {
    id: EntryId.OrganisationInformation,
  };

  const { organisationInformation } = await sendGraphQl<SingleResponse>(query, queryVariable);
  return organisationInformation;
};

export const getCountInformation = async (): Promise<OrganisationInformation> => {
  const query = `
  query ($id: String!) {
    organisationInformation(id: $id) {
      coursesCountMessage
      membersCount
      membersCountMessage
      studentsCountMessage
    }
  }`;

  const queryVariable = {
    id: EntryId.OrganisationInformation,
  };

  const { organisationInformation } = await sendGraphQl<SingleResponse>(query, queryVariable);
  return organisationInformation;
};
