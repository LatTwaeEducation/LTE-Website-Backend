export function getCourseGroupTitle(courseCollection) {
    const course = courseCollection.items.length > 0 ? courseCollection.items.at(0) : null;
    return `Courses For ${course === null || course === void 0 ? void 0 : course.classCategory} (Age ${course === null || course === void 0 ? void 0 : course.fromAge} - ${course === null || course === void 0 ? void 0 : course.toAge}`;
}
