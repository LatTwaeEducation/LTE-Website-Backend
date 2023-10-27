import { ContentfulCourseCardResponse } from '../Types/Courses/ContentfulCourseResponses';
import { ContentfulBaseGraphQLCollectionResponse } from '../Types/Contentful/ResponseTypes';

export function getCourseGroupTitle(
  courseCollection: ContentfulBaseGraphQLCollectionResponse<ContentfulCourseCardResponse>
): string {
  const course = courseCollection.items.length > 0 ? courseCollection.items.at(0) : null;

  return `Courses For ${course?.classCategory} (Age ${course?.fromAge} - ${course?.toAge}`;
}
