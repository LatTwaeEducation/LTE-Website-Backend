import { ClassCategory } from '../CommonTypes';
import { ContentfulBaseCourseResponse } from './ContentfulCourseResponses';

export abstract class BaseCourse {
  protected readonly _id: string;

  protected readonly _name: string;

  protected readonly _fromAge: number;

  protected readonly _toAge: number;

  protected readonly _duration: number;

  protected readonly _hoursPerWeek: number;

  protected readonly _students: number;

  protected readonly _classCategory: ClassCategory;

  constructor(src: ContentfulBaseCourseResponse) {
    this._id = src.sys.id;
    this._name = src.name;
    this._fromAge = src.fromAge;
    this._toAge = src.toAge;
    this._duration = src.duration;
    this._hoursPerWeek = src.hoursPerWeek;
    this._students = src.students;
    this._classCategory = src.classCategory;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get age(): string {
    return `${this._fromAge} - ${this._toAge}`;
  }

  public get duration(): string {
    return this.generateDurationString();
  }

  public get students(): number {
    return this._students;
  }

  public get classCategory(): ClassCategory {
    return this._classCategory;
  }

  private weekHumaniser() {
    const weeks = Math.round(this._duration / this._hoursPerWeek);
    const weekString = weeks > 1 ? 'weeks' : 'week';
    return `${weeks} ${weekString}`;
  }

  private hourHumaniser() {
    const hourString = this._duration > 1 ? 'hours' : 'hour';
    return `${this._duration} ${hourString}`;
  }

  private generateDurationString() {
    return `${this.hourHumaniser()} / ${this.weekHumaniser()}`;
  }
}
