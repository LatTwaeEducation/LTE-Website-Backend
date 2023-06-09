export const convertToCourseCard = ({ classCategory, duration, name, students, sys, thumbnail, }) => ({
    id: sys.id,
    name,
    duration,
    classCategory,
    students,
    thumbnail,
});
