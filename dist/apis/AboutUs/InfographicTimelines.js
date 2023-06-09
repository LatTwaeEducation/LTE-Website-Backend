var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { format } from 'date-fns';
import { queryData } from '../../Services/ContentfulServices';
export default () => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
  query InfographicTimeline {
      infographicTimelineCollection(order: startDate_ASC) {
        items {
          startDate
          endDate
          description
        }
      }
    }      
    `;
    const { infographicTimelineCollection } = yield queryData(queryString);
    return infographicTimelineCollection.items.map(({ startDate, endDate, description }) => {
        return {
            startDate: format(new Date(startDate), 'dd LLL yyyy'),
            endDate: endDate ? format(new Date(endDate), 'dd LLL yyyy') : undefined,
            description,
        };
    });
});
