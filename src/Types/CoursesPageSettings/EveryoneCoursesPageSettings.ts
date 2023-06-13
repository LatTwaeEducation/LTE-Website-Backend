import { IEveryoneCoursesColourSetting } from './IEveryoneCoursesColourSetting';
import { ICoursesPageTitle } from './ICoursesPageTitle';
import { ContentfulEveryoneCoursesPageSetting } from './ContentfulCoursesPageSettingsResponse';

export class EveryoneCoursesPageSettings implements IEveryoneCoursesColourSetting, ICoursesPageTitle {
  private readonly _colour: string;

  private readonly _title: string | null;

  constructor(src: ContentfulEveryoneCoursesPageSetting) {
    this._colour = src.forEveryoneCoursesColour;
    this._title = src.forEveryoneCoursesPageTitle;
  }

  public get everyoneCoursesColour(): string {
    return this._colour;
  }

  public get title(): string | null {
    return this._title;
  }
}
