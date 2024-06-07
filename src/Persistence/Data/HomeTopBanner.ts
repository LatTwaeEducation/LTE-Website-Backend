export interface HomeTopBanner {
  title: string;
  body: string;
  learnMoreLink?: string;
}

export type SingleResponse = {
  homeTopBanner: HomeTopBanner;
};
