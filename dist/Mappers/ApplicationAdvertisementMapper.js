export const applicationAdvertisementMapper = (src) => {
    return {
        body: src.body,
        appStoreLink: src.appStoreLink,
        featureImage: src.featureImage?.url,
        title: src.title,
        googlePlayLink: src.googlePlayLink,
    };
};
