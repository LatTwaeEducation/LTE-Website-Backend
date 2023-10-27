import { ICoursesPageTitle } from './ICoursesPageTitle';
import { ContentfulEveryoneCoursesPageSetting } from './ContentfulCoursesPageSettingsResponse';

export class EveryoneCoursesPageSettings implements ICoursesPageTitle {
  private readonly _title: string | null;

  constructor(src: ContentfulEveryoneCoursesPageSetting) {
    this._title = src.forEveryoneCoursesPageTitle;
  }

  public get title(): string | null {
    return this._title;
  }
}
