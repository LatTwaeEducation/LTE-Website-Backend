import { ContentfulAllCategoriesCoursesNamesResponse } from './ContentfulCourseResponses';
import { IJuniorCoursesColourSetting } from '../CoursesPageSettings/IJuniorCoursesColourSetting';
import { IYouthCoursesColourSetting } from '../CoursesPageSettings/IYouthCoursesColourSetting';
import { IEveryoneCoursesColourSetting } from '../CoursesPageSettings/IEveryoneCoursesColourSetting';
import { IIgcseCoursesColourSetting } from '../CoursesPageSettings/IIgcseCoursesColourSetting';
import { ContentfulAllCoursesColourSettings } from '../CoursesPageSettings/ContentfulCoursesPageSettingsResponse';

export class AllCoursesAndSettings
  implements
    IJuniorCoursesColourSetting,
    IYouthCoursesColourSetting,
    IEveryoneCoursesColourSetting,
    IIgcseCoursesColourSetting
{
  private readonly _igcseCourses: string[];

  private readonly _everyoneCourses: string[];

  private readonly _juniorCourses: string[];

  private readonly _youthCourses: string[];

  private readonly _igcseColour: string;

  private readonly _everyoneColour: string;

  private readonly _juniorColour: string;

  private readonly _youthColour: string;

  constructor(coursesAndSettings: ContentfulAllCategoriesCoursesNamesResponse & ContentfulAllCoursesColourSettings) {
    this._igcseCourses = coursesAndSettings.igcseCourses.items.map((course) => course.name);
    this._everyoneCourses = coursesAndSettings.everyoneCourses.items.map((course) => course.name);
    this._juniorCourses = coursesAndSettings.juniorCourses.items.map((course) => course.name);
    this._youthCourses = coursesAndSettings.youthCourses.items.map((course) => course.name);

    this._igcseColour = coursesAndSettings.forIgcseCoursesColour;
    this._everyoneColour = coursesAndSettings.forEveryoneCoursesColour;
    this._juniorColour = coursesAndSettings.forJuniorCoursesColour;
    this._youthColour = coursesAndSettings.forYouthCoursesColour;
  }

  public get juniorCourses(): string[] {
    return this._juniorCourses;
  }

  public get youthCourses(): string[] {
    return this._youthCourses;
  }

  public get everyoneCourses(): string[] {
    return this._everyoneCourses;
  }

  public get igcseCourses(): string[] {
    return this._igcseCourses;
  }

  public get everyoneCoursesColour(): string {
    return this._everyoneColour;
  }

  public get igcseCoursesColour(): string {
    return this._igcseColour;
  }

  public get juniorCoursesColour(): string {
    return this._juniorColour;
  }

  public get youthCoursesColour(): string {
    return this._youthColour;
  }
}
