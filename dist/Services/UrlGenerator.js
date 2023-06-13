export var URL;
(function (URL) {
    URL["GraphQL"] = "https://graphql.contentful.com/content/v1";
    URL["Management"] = "https://api.contentful.com";
    URL["CDN"] = "https://cdn.contentful.com";
})(URL || (URL = {}));
const SpaceId = 'gxxheul7hh8o';
const Environment = 'master';
export const generateUrl = (urlKind) => `${urlKind}/spaces/${SpaceId}/environments/${Environment}`;
