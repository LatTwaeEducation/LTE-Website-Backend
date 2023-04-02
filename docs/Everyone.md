---
title: Everyone
author: Zaw Nay Lin
---

# For Everyone Page APIs

For Everyone Page, these are available endpoint functions:

## getEveryoneCourses

### Description

Get all the For Everyone courses.

### Return Type

```ts
interface CourseCard {
  id: string;
  name: string;
  duration: number;
  students: number;
  classCategory: 'Everyone';
}

declare const getEveryoneCourses: () => Promise<CourseCard[]>;
```

### Example

```ts
import { Everyone } from 'lte-web-backend';
const { id, name, duration, students, classCategory } = await getEveryoneCourses();
```
