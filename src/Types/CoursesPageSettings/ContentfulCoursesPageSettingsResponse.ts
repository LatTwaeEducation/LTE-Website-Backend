import { ContentfulAsset } from '../Contentful/CommonTypes';

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
  forJuniorYouthCoursesPageRoadmap: ContentfulAsset | null;
  forJuniorYouthCoursesPageBody: string | null;
}

export interface ContentfulEveryoneCoursesPageSetting {
  forEveryoneCoursesPageTitle: string | null;
  forEveryoneCoursesPageBody: string | null;
}

export interface ContentfulIgcseCoursesPageSetting {
  forIgcseCoursesPageTitle: string | null;
  forIgcseCoursesPageBody: string | null;
}
