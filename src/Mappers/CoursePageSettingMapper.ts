import { CoursePageSetting as DbObject } from '@data/CoursePageSetting';
import { CoursePageSetting as Domain } from '@domain/CoursePageSetting';
import { generateParagraphsArray } from '@helpers/RichTextParser';

export const mapCoursePageSetting = (dbObject: DbObject): Domain => {
  return {
    title: dbObject.title,
    description: dbObject.description,
    image: dbObject.image?.url,
    body: dbObject.body ? generateParagraphsArray(dbObject.body) : undefined,
  };
};
