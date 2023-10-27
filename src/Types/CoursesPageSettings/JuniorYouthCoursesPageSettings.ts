import { ICoursesPageTitle } from './ICoursesPageTitle';
import { Asset } from '../CommonTypes';
import { ContentfulJuniorYouthCoursesPageSettings } from './ContentfulCoursesPageSettingsResponse';

export class JuniorYouthCoursesPageSettings implements ICoursesPageTitle {
  private readonly _title: string | null;

  private readonly _roadmap: Asset | null;

  constructor(src: ContentfulJuniorYouthCoursesPageSettings) {
    this._title = src.forJuniorYouthCoursesPageTitle;
    this._roadmap = src.forJuniorYouthCoursesPageRoadmap;
  }

  public get title(): string | null {
    return this._title;
  }

  public get roadmap(): Asset | null {
    return this._roadmap;
  }
}
