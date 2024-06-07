import { Asset } from './Asset';
import { BaseSys, GraphQLCollection, Query } from './Common';
import { CourseCategory } from './Constraints';
export interface Course {
    sys: BaseSys;
    featuredImage: Asset;
    name: string;
    classCategory: CourseCategory;
    fromAge: number;
    toAge: number;
    duration: number;
    hoursPerWeeks: number;
    students: number;
    thumbnail?: Asset;
    learningPlatforms: Array<string>;
    price: number;
    requirements: string;
    languages: Array<string>;
    classDescription?: string;
    skillsYouWillGain?: Array<string>;
    whatWillYouLearn?: string;
    courseDescription?: string;
    continuousLearning?: string;
}
export interface CourseQuery extends Query {
    courseCategory: CourseCategory;
}
export type SingleResponse = {
    course: Course;
};
export type CollectionResponse = {
    courseCollection: GraphQLCollection<Course>;
};
//# sourceMappingURL=Course.d.ts.map