var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { queryData } from '../../Services/ContentfulServices';
import { PreviousActivityEventCard } from '../../Types/ActivitiesEvents/PreviousActivityEventCard';
export default () => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
  query Previous($currentTime: DateTime!) {
    activityEventCollection(where: { eventDateTime_lte: $currentTime }) {
      items {
        sys {
          id
        }
        name
        thumbnail {
          url
          title
        }
        eventDateTime
        replayLink
      }
    }
  }`;
    const queryVariables = {
        currentTime: new Date().toISOString(),
    };
    const { activityEventCollection } = yield queryData(queryString, queryVariables);
    return activityEventCollection.items.map((item) => new PreviousActivityEventCard(item));
});
