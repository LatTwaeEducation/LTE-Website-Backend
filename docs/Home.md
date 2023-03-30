---
title: Home
author: Zaw Nay Lin
---
# Home APIs
For Home Page, these are available endpoint functions:
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
import { Home } from 'lte-web-backend'; 
const { juniorCourses, youthCourses, everyoneCourses, igcseCourses } = await Home.getCourses();
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

declare const getActivitiesEvents: () => Promise<BaseActivityEvent[]>
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

declare const getTestimonials: () => Promise<Testimonial[]>
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

declare const getPartnerships(): () => Promise<Partnership[]>
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

declare const getBlogs(): () => Promise<BlogCard[]>
```