---
title: Home
author: Zaw Nay Lin
---

# Home APIs

For Home Page, these are available endpoint functions:

## getWhereYourJourneyBegins

### Description

Get the main message of **Where your journey begins**.

### Return Type

```ts
declare const getWhereYourJourneyBegins: () => Promise<string>;
```

### Example

```ts
import { getWhereYourJourneyBegins } from "lte-web-backend/Home";

const whereYourJourneyBegins = await getWhereYourJourneyBegins();
```

## getAllCounts

### Description

Get the counts and its messages of courses, members, and students respectively.

### Return Type

```ts
interface CountCard {
  count: number;
  message: string;
}

declare const getAllCounts: () => Promise<{
  members: CountCard;
  courses: CountCard;
  students: CountCard;
}>;
```

### Example

```ts
import { getAllCounts } from "lte-web-backend/Home";

const { members, courses, students } = await getAllCounts();
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
import { getMissionVision } from "lte-web-backend/Home";

const { mission, vision } = await getMissionVision();
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
import { getCourses } from 'lte-web-backend/Home';

const { juniorCourses, youthCourses, everyoneCourses, igcseCourses } = await getCourses();
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
import { Home } from 'lte-web-backend';

const { thumbnail, id } = await Home.getActivitiesEvents();
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
import { Home } from 'lte-web-backend';

const { feedback, name, occupation } = await Home.getTestimonials();
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
import { Home } from 'lte-web-backend';

const { logo, company } = await Home.getPartnerships();
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
import { getBlogs } from "lte-web-backend/Home";

const blogs = await getBlogs();
```
