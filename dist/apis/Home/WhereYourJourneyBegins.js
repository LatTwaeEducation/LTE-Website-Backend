var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import queryData from '../../services/graphql';
export default () => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
    query WhereYourJourneyBegins {
      organisationInformation(id: "2ImII347rPAsMUUHNSwI5I") {
        whereYourJourneyBegins
    }
  }`;
    return (yield queryData(queryString)).organisationInformation.whereYourJourneyBegins;
});
