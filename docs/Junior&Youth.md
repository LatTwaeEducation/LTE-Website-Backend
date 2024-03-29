---
title: Junior & Youth
author: Zaw Nay Lin
---

# Junior & Youth APIs

For Junior & Youth Page, these are available endpoint functions:

## getJuniorCourses

### Description

Get all the For Junior courses.

### Return Type

```ts
interface CourseCard {
  id: string;
  name: string;
  duration: number;
  students: number;
  classCategory: 'Junior';
}

declare const getJuniorCourses: () => Promise<CourseCard[]>;
```

### Example

```ts
import { JuniorYouth } from 'lte-web-backend';
const { id, name, duration, students, classCategory } = await getJuniorCourses();
```

## getYouthCourses

### Description

Get all the For Youth courses.

### Return Type

```ts
interface CourseCard {
  id: string;
  name: string;
  duration: number;
  students: number;
  classCategory: 'Youth';
}

declare const getJuniorCourses: () => Promise<CourseCard[]>;
```

### Example

```ts
import { JuniorYouth } from 'lte-web-backend';
const { id, name, duration, students, classCategory } = await getYouthCourses();
```
