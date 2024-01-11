export const applicationAdvertisementMapper = (src) => {
    var _a;
    return {
        body: src.body,
        appStoreLink: src.appStoreLink,
        featureImage: (_a = src.featureImage) === null || _a === void 0 ? void 0 : _a.url,
        title: src.title,
        googlePlayLink: src.googlePlayLink,
    };
};
