import { getStudentsFromCourses } from "../../Persistence/CourseRepository";
import { getCountInformation } from "../../Persistence/OrganisationInformationRepository";
export default async () => {
    const [classesAndStudentsCountResponse, countInformation] = await Promise.all([
        getStudentsFromCourses(),
        getCountInformation(),
    ]);
    const studentCounts = classesAndStudentsCountResponse.items.map((item) => item.students).reduce((a, b) => a + b);
    return [
        {
            name: 'Classes',
            count: classesAndStudentsCountResponse.total,
            message: countInformation.studentsCountMessage,
        },
        {
            name: 'Members',
            count: countInformation.membersCount,
            message: countInformation.membersCountMessage,
        },
        {
            name: 'Students',
            count: studentCounts,
            message: countInformation.studentsCountMessage,
        },
    ];
};
