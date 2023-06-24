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
import { ActivityEventCardFactory } from '../Types/ActivitiesEvents/ActivityEventCardFactory';
const generateQueryVariables = (options) => {
    const queryVariables = {};
    if (options.skip) {
        queryVariables.skip = options.skip;
    }
    if (options.limit) {
        queryVariables.limit = options.limit;
    }
    if (options.upcomingOrPrevious === 'upcoming') {
        queryVariables.where = {
            eventDateTime_gt: new Date().toISOString(),
        };
    }
    if (options.upcomingOrPrevious === 'previous') {
        queryVariables.where = {
            eventDateTime_lte: new Date().toISOString(),
        };
    }
    return queryVariables;
};
export default (options) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = `
  query Events($skip: Int, $limit: Int, $where: ActivityEventFilter) {
    activityEventCollection(
      skip: $skip
      limit: $limit
      where: $where
    ) {
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
        registrationLink
      }
    }
  }`;
    const { activityEventCollection } = yield queryData(queryString, generateQueryVariables(options));
    return activityEventCollection.items.map((event) => {
        return ActivityEventCardFactory.create(event);
    });
});
