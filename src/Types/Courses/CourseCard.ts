import { Asset } from '../CommonTypes';
import { ContentfulCourseCardResponse } from './ContentfulCourseResponses';
import { BaseCourse } from './BaseCourse';

export class CourseCard extends BaseCourse {
  private readonly _thumbnail: Asset | null;

  constructor(src: ContentfulCourseCardResponse) {
    super(src);
    this._thumbnail = src.thumbnail?.url ?? null;
  }

  public get thumbnail(): Asset | null {
    return this._thumbnail;
  }
}
