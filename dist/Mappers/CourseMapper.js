import { getDurationString } from "../Helpers/Humaniser";
const getAge = (src) => `${src.fromAge} - ${src.toAge}`;
export const mapCourseDetail = (src) => {
    return {
        id: src.sys.id,
        name: src.name,
        age: getAge(src),
        duration: getDurationString(src.duration, src.hoursPerWeeks),
        students: src.students,
        classCategory: src.classCategory,
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
export const mapCourseCard = (src) => {
    return {
        id: src.sys.id,
        name: src.name,
        age: getAge(src),
        classCategory: src.classCategory,
        duration: getDurationString(src.duration, src.hoursPerWeeks),
        students: src.students,
        thumbnail: src.thumbnail?.url,
    };
};
