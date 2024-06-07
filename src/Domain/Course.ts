export interface BaseCourse {
  id: string;
  name: string;
  age: string;
  duration: string;
  students: number;
  classCategory: string;
}

export interface CourseCard extends BaseCourse {
  thumbnail?: string;
}

export interface CourseDetail extends BaseCourse {
  featuredImage: string;
  learningPlatforms?: string;
  price: number;
  requirements: string;
  languages?: string;
  classDescription?: string;
  skillsYouWillGain?: Array<string>;
  whatWillYouLearn?: Array<string>;
  courseDescription?: Array<string>;
  continuousLearning?: Array<string>;
}

export type CourseCardGroup = {
  courseGroupTitle: string;
  courseCardColor: string;
  courses: CourseCard[];
};
