---
title: Home
author: Zaw Nay Lin
---

# Home APIs

For Home Page, these are available endpoint functions:

## getHomeTopBanner

### Description

Get the structure for home top banner.

### Return Type

```ts
declare const getHomeTopBanner: () => Promise<{
  title: string;
  body: string;
  learnMoreLink: string;
}>;
```

### Example

```ts
import { Home as HomeBackend } from "lte-web-backend";

const { title, body, learnMoreLink } = await HomeBackend.getHomeTopBanner();
```

## getAllCounts

### Description

Get the counts and its messages of courses, members, and students in an array.

### Return Type

```ts
interface CountCard {
  name: string;
  count: number;
  message: string;
}

declare const getAllCounts: () => Promise<CountCard[]>;
```

### Example

```ts
import { Home as HomeBackend } from "lte-web-backend";

(await HomeBackend.getAllCounts()).forEach(({ name, count, message }) => {
  console.log(name);
  console.log(count);
  console.log(message);
});
```

## getMissionVision

### Description

Get the Mission and Vision of LTE

### Return Type

```ts
interface MissionVision {
  mission: string;
  vision: string;
}

declare const getMissionVision: () => Promise<MissionVision>;
```

### Example

```ts
import { Home as HomeBackend } from "lte-web-backend";

const { mission, vision } = await HomeBackend.getMissionVision();
```

## getCourses

### Description

Get the courses names for each category.

### Return Type

```ts
declare const getCourses: () => Promise<{
  juniorCourses: string[];
  youthCourses: string[];
  everyoneCourses: string[];
  igcseCourses: string[];
}>;
```

### Example

```ts
import { Home as HomeBackend } from 'lte-web-backend';

const { juniorCourses, youthCourses, everyoneCourses, igcseCourses } = await HomeBackend.getCourses();
```

## getActivitiesEvents

### Description

Get the Activities and Events, limited to 3.

### Return Type

```ts
interface BaseActivityEvent {
  thumbnail: Asset;
  id: string;
}

declare const getActivitiesEvents: () => Promise<BaseActivityEvent[]>;
```

### Example

```ts
import { Home as HomeBackend } from 'lte-web-backend';

const { thumbnail, id } = await HomeBackend.getActivitiesEvents();
```

## getTestimonials

### Description

Get the testimonials.

### Return Type

```ts
interface Testimonial {
  feedback: string;
  name: string;
  occupation: string;
}

declare const getTestimonials: () => Promise<Testimonial[]>;
```

### Example

```ts
import { Home as HomeBackend } from 'lte-web-backend';

const { feedback, name, occupation } = await HomeBackend.getTestimonials();
```

## getPartnerships

### Description

Get the partnerships company and respective logos.

### Return Type

```ts
interface Partnership {
  logo: Asset;
  company: string;
}

declare const getPartnerships: () => Promise<Partnership[]>;
```

### Example

```ts
import { Home as HomeBackend } from 'lte-web-backend';

const { logo, company } = await HomeBackend.getPartnerships();
```

## getAppAdvertisement

### Description

Get the mobile applications advertisement.

### Return Type

```ts
interface AppAdvertisement {
  featureImage: Asset;
  title: string;
  body: string;
  googlePlayLink?: string;
  appStoreLink?: string;
}

declare const getAppAdvertisement: () => Promise<AppAdvertisement>;
```

### Example

```tsx
import { Home } from "lte-web-backend";
import { useQuery } from "react-query";

export const AppAdvertisementBanner = () => {
  const { data } = useQuery("AppAdvertisement", Home.getAppAdvertisement);

  return (
    <div>
      <img src={data.featureImage.url} alt={data.featureImage.title} />
      <h6>{data.title}</h6>
      <p>{data.body}</p>
      <a href={data.googlePlayLink}>Google Playstore</a>
      <a href={data.appStoreLink}>Apple Appstore</a>
    </div>
  );
};
```

## getBlogs

### Description

Get the blog cards for Home page, limited to 3.

### Return Type

```ts
interface BlogCard {
  id: string;
  thumbnail: Asset;
  title: string;
  publishedAt: Date;
  description: string;
}

declare const getBlogs: () => Promise<BlogCard[]>;
```

### Example

```ts
import { Home as HomeBackend } from "lte-web-backend";

const blogs = await HomeBackend.getBlogs();
```

# Other endpoints

The following are the endpoints for logo, footer, etc.

## getFooterContent

Get the footer contents for the footer of every page.

## Return Type

```ts
export interface FooterContent {
  aboutUs: string;
  phoneNumbers?: string[];
  emailAddresses?: string[];
  facebookLink?: string;
  facebookGroupLink?: string;
  instagramLink?: string;
  youtubeLink?: string;
  telegramLink?: string;
  twitterLink?: string;
  linkedinLink?: string;
  googlePlayLink?: string;
  appStoreLink?: string;
}

declare const getFooterContent: () => Promise<FooterContent>;
```

## Example

```ts
import { getFooterContent } from "lte-web-backend";

const footerContent = await getFooterContent();
```

## getLteLogo

Get the logo of LTE.

## Return Type

```ts
declare const getLteLogo: () => Promise<{
  title: string;
  url: string;
}>
```

## Example

```tsx
import { getLteLogo } from "lte-web-backend";

const { title, url } = await getLteLogo();

return (
  <img src={url} alt={title} />
);
```