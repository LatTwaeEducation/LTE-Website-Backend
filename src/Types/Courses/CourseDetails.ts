import { BaseCourse } from './BaseCourse';
import { ContentfulCourseDetailsResponse } from './ContentfulCourseResponses';
import { Asset } from '../CommonTypes';

export class CourseDetails extends BaseCourse {
  private readonly _featuredImage: Asset | null;

  private readonly _learningPlatforms: string;

  private readonly _price: number;

  private readonly _requirements: string;

  private readonly _languages: string;

  private readonly _classDescription: string;

  private readonly _skillsYouWillGain: string[];

  private readonly _whatWillYouLearn: string[];

  private readonly _courseDescription: string[];

  private readonly _continuousLearning: string[];

  constructor(src: ContentfulCourseDetailsResponse) {
    super(src);
    this._featuredImage = src.featuredImage;
    this._learningPlatforms = src.learningPlatforms?.join(', ') ?? '';
    this._price = src.price;
    this._requirements = src.requirements ?? '';
    this._languages = src.languages?.join(', ') ?? '';
    this._classDescription = src.classDescription ?? '';
    this._skillsYouWillGain = src.skillsYouWillGain ?? [];
    this._whatWillYouLearn = src.whatWillYouLearn?.trim().split('\n') ?? [];
    this._courseDescription = src.courseDescription?.trim().split('\n') ?? [];
    this._continuousLearning = src.continuousLearning?.trim().split('\n') ?? [];
  }

  public get featuredImage(): Asset | null {
    return this._featuredImage;
  }

  public get learningPlatforms(): string {
    return this._learningPlatforms;
  }

  public get price(): number {
    return this._price;
  }

  public get requirements(): string {
    return this._requirements;
  }

  public get languages(): string {
    return this._languages;
  }

  public get classDescription(): string {
    return this._classDescription;
  }

  public get skillsYouWillGain(): string[] {
    return this._skillsYouWillGain;
  }

  public get whatWillYouLearn(): string[] {
    return this._whatWillYouLearn;
  }

  public get courseDescription(): string[] {
    return this._courseDescription;
  }

  public get continuousLearning(): string[] {
    return this._continuousLearning;
  }
}
