var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { queryData } from './ContentfulServices';
import { EntryId } from '../Types/CommonTypes';
import { AllCoursesColourSettings } from '../Types/CoursesPageSettings/AllCoursesColourSettings';
export default () => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
  query($coursesPageSettingsId: String!) {
    coursePageSettings(id: $coursesPageSettingsId) {
      forIgcseCoursesColour
      forYouthCoursesColour
      forJuniorCoursesColour
      forEveryoneCoursesColour
    }
  }`;
    const response = yield queryData(queryString, {
        coursePageSettingsId: EntryId.CoursesPageSettings,
    });
    return new AllCoursesColourSettings(response);
});
