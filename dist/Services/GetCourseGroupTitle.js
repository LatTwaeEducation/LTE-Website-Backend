export function getCourseGroupTitle(courseCollection) {
    const course = courseCollection.items.length > 0 ? courseCollection.items.at(0) : null;
    return `Courses For ${course?.classCategory} (Age ${course?.fromAge} - ${course?.toAge})`;
}
