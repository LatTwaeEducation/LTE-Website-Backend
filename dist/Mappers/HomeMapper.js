export const mapHomeTopBanner = (src) => ({
    title: src.title,
    body: src.body,
    learnMoreLink: src.learnMoreLink,
});
export const mapPartnership = (src) => ({
    company: src.company,
    logo: src.logo.url,
});
export const mapTestimonial = (src) => ({
    name: src.name,
    occupation: src.occupation,
    feedback: src.feedback,
});
export const mapAppAds = (src) => ({
    googlePlayLink: src.googlePlayLink,
    appStoreLink: src.appStoreLink,
    body: src.body,
    featureImage: src.featureImage?.url,
    title: src.title,
});
