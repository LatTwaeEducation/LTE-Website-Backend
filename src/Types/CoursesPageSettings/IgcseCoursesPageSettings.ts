import { IIgcseCoursesColourSetting } from './IIgcseCoursesColourSetting';
import { ICoursesPageTitle } from './ICoursesPageTitle';
import { ContentfulIgcseCoursesPageSetting } from './ContentfulCoursesPageSettingsResponse';

export class IgcseCoursesPageSettings implements IIgcseCoursesColourSetting, ICoursesPageTitle {
  private readonly _colour: string;

  private readonly _title: string | null;

  private readonly _body: string | null;

  constructor(src: ContentfulIgcseCoursesPageSetting) {
    this._colour = src.forIgcseCoursesColour;
    this._title = src.forIgcseCoursesPageTitle;
    this._body = src.forIgcseCoursesPageBody;
  }

  public get igcseCoursesColour(): string {
    return this._colour;
  }

  public get title(): string | null {
    return this._title;
  }

  public get body(): string | null {
    return this._body;
  }
}
