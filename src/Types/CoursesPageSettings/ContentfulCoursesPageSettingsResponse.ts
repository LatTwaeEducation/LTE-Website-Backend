import { Asset } from '../CommonTypes';

export interface ContentfulForJuniorCoursesColourSetting {
  forJuniorCoursesColour: string;
}

export interface ContentfulForYouthCoursesColourSetting {
  forYouthCoursesColour: string;
}

export interface ContentfulForEveryoneCoursesColourSetting {
  forEveryoneCoursesColour: string;
}

export interface ContentfulForIgcseCoursesColourSetting {
  forIgcseCoursesColour: string;
}

export type ContentfulAllCoursesColourSettings = ContentfulForJuniorCoursesColourSetting &
  ContentfulForEveryoneCoursesColourSetting &
  ContentfulForYouthCoursesColourSetting &
  ContentfulForIgcseCoursesColourSetting;

export interface ContentfulJuniorYouthCoursesPageSettings {
  forJuniorYouthCoursesPageTitle: string | null;
  forJuniorYouthCoursesPageRoadmap: Asset | null;
}

export interface ContentfulEveryoneCoursesPageSetting {
  forEveryoneCoursesPageTitle: string | null;
}

export interface ContentfulIgcseCoursesPageSetting {
  forIgcseCoursesPageTitle: string | null;
  forIgcseCoursesPageBody: string | null;
}
