import { IJuniorCoursesColourSetting } from './IJuniorCoursesColourSetting';
import { IYouthCoursesColourSetting } from './IYouthCoursesColourSetting';
import { IEveryoneCoursesColourSetting } from './IEveryoneCoursesColourSetting';
import { IIgcseCoursesColourSetting } from './IIgcseCoursesColourSetting';
import { ContentfulAllCoursesColourSettings } from './ContentfulCoursesPageSettingsResponse';

export class AllCoursesColourSettings
  implements
    IJuniorCoursesColourSetting,
    IYouthCoursesColourSetting,
    IEveryoneCoursesColourSetting,
    IIgcseCoursesColourSetting
{
  private readonly _juniorColour: string;

  private readonly _youthColour: string;

  private readonly _everyoneColour: string;

  private readonly _igcseColour: string;

  constructor(src: ContentfulAllCoursesColourSettings) {
    this._juniorColour = src.forJuniorCoursesColour;
    this._youthColour = src.forYouthCoursesColour;
    this._everyoneColour = src.forEveryoneCoursesColour;
    this._igcseColour = src.forIgcseCoursesColour;
  }

  get igcseCoursesColour(): string {
    return this._igcseColour;
  }

  get juniorCoursesColour(): string {
    return this._juniorColour;
  }

  get youthCoursesColour(): string {
    return this._youthColour;
  }

  get everyoneCoursesColour(): string {
    return this._everyoneColour;
  }
}
