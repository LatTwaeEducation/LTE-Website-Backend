import { BaseCourse } from './BaseCourse';
export class CourseDetails extends BaseCourse {
    constructor(src) {
        super(src);
        this._featuredImage = src.featuredImage;
        this._learningPlatforms = src.learningPlatforms.join(', ');
        this._price = src.price;
        this._requirements = src.requirements;
        this._languages = src.languages.join(', ');
        this._classDescription = src.classDescription;
        this._skillsYouWillGain = src.skillsYouWillGain;
        this._whatWillYouLearn = src.whatWillYouLearn.trim().split('\n');
        this._courseDescription = src.courseDescription.trim().split('\n');
        this._continuousLearning = src.continuousLearning.trim().split('\n');
    }
    get featuredImage() {
        return this._featuredImage;
    }
    get learningPlatforms() {
        return this._learningPlatforms;
    }
    get price() {
        return this._price;
    }
    get requirements() {
        return this._requirements;
    }
    get languages() {
        return this._languages;
    }
    get classDescription() {
        return this._classDescription;
    }
    get skillsYouWillGain() {
        return this._skillsYouWillGain;
    }
    get whatWillYouLearn() {
        return this._whatWillYouLearn;
    }
    get courseDescription() {
        return this._courseDescription;
    }
    get continuousLearning() {
        return this._continuousLearning;
    }
}
