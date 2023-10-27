import { ICoursesPageTitle } from './ICoursesPageTitle';
import { ContentfulIgcseCoursesPageSetting } from './ContentfulCoursesPageSettingsResponse';

export class IgcseCoursesPageSettings implements ICoursesPageTitle {
  private readonly _title: string | null;

  private readonly _body: string | null;

  constructor(src: ContentfulIgcseCoursesPageSetting) {
    this._title = src.forIgcseCoursesPageTitle;
    this._body = src.forIgcseCoursesPageBody;
  }

  public get title(): string | null {
    return this._title;
  }

  public get body(): string | null {
    return this._body;
  }
}
