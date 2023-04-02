---
title: About Us
author: Zaw Nay Lin
---

# About Us APIs

For About Us Page, these are available endpoint functions:

## getAllCounts

### Description

Get members count, courses count and students count.

### Return Type

```ts
declare const getAllCounts: () => Promise<{
  membersCount: number;
  coursesCount: number;
  studentsCount: number;
}>;
```

### Example

```ts
import { Home } from 'lte-web-backend';
const { membersCount, coursesCount, studentsCount } = await Home.getAllCounts();
```

### getInfographicTimelines

### Description

Get the Infographic Timeline with date and description of each event.
If it is _one time event_, only `startDate` will be available, and `endDate` will be `null`.
If the event occurs through specific range of days, `startDate` and `endDate` will be available.

### Return Type

```ts
interface InfographicTimeline {
  startDate: Date;
  endDate?: Date;
  description: string;
}

declare const getInfographicTimelines = () => Promise<InfographicTimeline[]>;
```

### Example

```ts
import { AboutUs } from 'lte-web-backend';

const { startDate, endDate, description } = await getInfographicTimelines();
```
