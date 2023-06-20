import { ContentfulBaseGraphQLCollectionResponse } from '../Contentful/ResponseTypes';
import { BaseSys } from '../Contentful/CommonTypes';
import { Asset, ClassCategory } from '../CommonTypes';

interface ContentfulCourseNameOnly {
  name: string;
}

export interface ContentfulAllCategoriesCoursesNamesResponse {
  juniorCourses: ContentfulBaseGraphQLCollectionResponse<ContentfulCourseNameOnly>;
  youthCourses: ContentfulBaseGraphQLCollectionResponse<ContentfulCourseNameOnly>;
  everyoneCourses: ContentfulBaseGraphQLCollectionResponse<ContentfulCourseNameOnly>;
  igcseCourses: ContentfulBaseGraphQLCollectionResponse<ContentfulCourseNameOnly>;
}

export interface ContentfulBaseCourseResponse {
  sys: BaseSys;
  name: string;
  fromAge: number;
  toAge: number;
  duration: number;
  hoursPerWeek: number;
  students: number;
  classCategory: ClassCategory;
}

export interface ContentfulCourseCardResponse extends ContentfulBaseCourseResponse {
  thumbnail: Asset | null;
}

export interface ContentfulCourseDetailsResponse extends ContentfulBaseCourseResponse {
  featuredImage: Asset | null;
  learningPlatforms: string[] | null;
  price: number;
  requirements: string | null;
  languages: string[] | null;
  classDescription: string | null;
  skillsYouWillGain: string[] | null;
  whatWillYouLearn: string | null;
  courseDescription: string | null;
  continuousLearning: string | null;
}

export interface ContentfulGraphQLCourseEntryResponse<T extends ContentfulBaseCourseResponse> {
  course: T;
}

export interface ContentfulCoursesPageResponse<TCollection extends ContentfulBaseCourseResponse> {
  courseCollection: ContentfulBaseGraphQLCollectionResponse<TCollection>;
}
