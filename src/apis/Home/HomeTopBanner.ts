import queryData from '../../services/graphql';

export default async () => {
  type Response = {
    organisationInformation: {
      whereYourJourneyBegins: string;
    };
  };

  const queryString = `
    query WhereYourJourneyBegins {
      organisationInformation(id: "2ImII347rPAsMUUHNSwI5I") {
        whereYourJourneyBegins
    }
  }`;

  return (await queryData<Response>(queryString)).organisationInformation.whereYourJourneyBegins;
};
