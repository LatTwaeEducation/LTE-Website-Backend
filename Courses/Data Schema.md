---
title: Course Schema
author: Zaw Nay Lin
---
# Course Schema

The full schema for `course` is as follow
Name | Type | Description
--- | --- | ---
name | string | The name of the course
slug | string | The slug name of the course
thumbnail | [Link](../DataSchema#link-object) | Link to Thumbnail Asset
featuredImage | [Link](../DataSchema#link-object) | Link to Feature Image Asset
timelineHour | int | The number of teaching hours
requirements | string[] | Required tools for learning
learningPlatforms | string[] | Which platform the lessons will be taught
languages | string[] | The language(s) used for the course (Burmese and/or English)
whatWeTeach | RichText | What field we are going to teach
whatYouLearn | RichText | What knowledge you will learn from this course
furtherLearning | RichText | What you can learn after this course
skills | string[] | Skills covered by this course
classCategory | [ClassCategory](./Get#class-category) | Catgeory which this course belongs to
students | int | The number of students already enrolled this course


