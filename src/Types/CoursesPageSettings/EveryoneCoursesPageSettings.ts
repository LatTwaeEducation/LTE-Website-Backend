import { ICoursesPageTitle } from './ICoursesPageTitle';
import { ContentfulEveryoneCoursesPageSetting } from './ContentfulCoursesPageSettingsResponse';

export class EveryoneCoursesPageSettings implements ICoursesPageTitle {
  private readonly _title: string | null;

  private readonly _body: string | null;

  constructor(src: ContentfulEveryoneCoursesPageSetting) {
    this._title = src.forEveryoneCoursesPageTitle;
    this._body = src.forEveryoneCoursesPageBody;
  }

  public get title(): string | null {
    return this._title;
  }

  public get body(): string | null {
    return this._body;
  }
}
