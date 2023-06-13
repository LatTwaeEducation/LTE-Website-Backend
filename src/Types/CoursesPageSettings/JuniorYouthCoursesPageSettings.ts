import { IJuniorCoursesColourSetting } from './IJuniorCoursesColourSetting';
import { IYouthCoursesColourSetting } from './IYouthCoursesColourSetting';
import { ICoursesPageTitle } from './ICoursesPageTitle';
import { Asset } from '../CommonTypes';
import { ContentfulJuniorYouthCoursesPageSettings } from './ContentfulCoursesPageSettingsResponse';

export class JuniorYouthCoursesPageSettings
  implements IJuniorCoursesColourSetting, IYouthCoursesColourSetting, ICoursesPageTitle
{
  private readonly _juniorColour: string;

  private readonly _youthColour: string;

  private readonly _title: string | null;

  private readonly _roadmap: Asset | null;

  constructor(src: ContentfulJuniorYouthCoursesPageSettings) {
    this._juniorColour = src.forJuniorCoursesColour;
    this._youthColour = src.forYouthCoursesColour;
    this._title = src.forJuniorYouthCoursesPageTitle;
    this._roadmap = src.forJuniorYouthCoursesPageRoadmap;
  }

  public get juniorCoursesColour(): string {
    return this._juniorColour;
  }

  public get youthCoursesColour(): string {
    return this._youthColour;
  }

  public get title(): string | null {
    return this._title;
  }

  public get roadmap(): Asset | null {
    return this._roadmap;
  }
}
