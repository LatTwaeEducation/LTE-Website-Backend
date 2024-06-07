import { CountStats } from '@domain/Common';
import { getStudentsFromCourses } from '@persistence/CourseRepository';
import { getCountInformation } from '@persistence/OrganisationInformationRepository';

export default async (): Promise<CountStats[]> => {
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
