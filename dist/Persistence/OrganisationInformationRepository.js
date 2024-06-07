import { sendGraphQl } from "../Helpers/ContentfulServices";
import { EntryId } from './Data/Constraints';
export const getPartnershipFormLink = async () => {
    const query = `
  query ($id: String!) {
    organisationInformation(id: $id) {
      partnershipFormLink    
    }
  }`;
    const queryVariable = {
        id: EntryId.OrganisationInformation,
    };
    const { organisationInformation } = await sendGraphQl(query, queryVariable);
    return organisationInformation.partnershipFormLink;
};
export const getRecruitmentFormLink = async () => {
    const query = `
  query ($id: String!) {
    organisationInformation(id: $id) {
      recruitmentFormLink    
    }
  }`;
    const queryVariable = {
        id: EntryId.OrganisationInformation,
    };
    const { organisationInformation } = await sendGraphQl(query, queryVariable);
    return organisationInformation.recruitmentFormLink;
};
export const getAboutUs = async () => {
    const query = `
  query ($id: String!) {
    organisationInformation(id: $id) {
      aboutUs
    }
  }`;
    const queryVariable = {
        id: EntryId.OrganisationInformation,
    };
    const { organisationInformation } = await sendGraphQl(query, queryVariable);
    return organisationInformation.aboutUs;
};
export const getMissionVision = async () => {
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
    const { organisationInformation } = await sendGraphQl(query, queryVariable);
    return organisationInformation;
};
export const getCountInformation = async () => {
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
    const { organisationInformation } = await sendGraphQl(query, queryVariable);
    return organisationInformation;
};
