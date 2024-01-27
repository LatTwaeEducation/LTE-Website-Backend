import * as BlogCards from '../../Services/BlogCards';
const LIMIT_COUNT = 3;
export default async () => BlogCards.default({ limit: LIMIT_COUNT });
