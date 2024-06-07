import { Course as DbObjectCourseDetail } from '@data/Course';
import { CourseCard, CourseDetail as DomainCourseDetail } from '@domain/Course';
import { getDurationString } from '@helpers/Humaniser';

const getAge = (src: DbObjectCourseDetail): string => `${src.fromAge} - ${src.toAge}`;

export const mapCourseDetail = (src: DbObjectCourseDetail): DomainCourseDetail => {
  return {
    id: src.sys.id,
    name: src.name,
    age: getAge(src),
    duration: getDurationString(src.duration, src.hoursPerWeeks),
    students: src.students,
    classCategory: src.classCategory as string,
    featuredImage: src.featuredImage?.url,
    learningPlatforms: src.learningPlatforms?.join(', '),
    price: src.price,
    requirements: src.requirements ?? 'None',
    languages: src.languages?.join(', '),
    classDescription: src.classDescription,
    skillsYouWillGain: src.skillsYouWillGain,
    whatWillYouLearn: src.whatWillYouLearn?.split('\n'),
    courseDescription: src.courseDescription?.split('\n'),
    continuousLearning: src.continuousLearning?.split('\n'),
  };
};

export const mapCourseCard = (src: DbObjectCourseDetail): CourseCard => {
  return {
    id: src.sys.id,
    name: src.name,
    age: getAge(src),
    classCategory: src.classCategory as string,
    duration: getDurationString(src.duration, src.hoursPerWeeks),
    students: src.students,
    thumbnail: src.thumbnail?.url,
  };
};
