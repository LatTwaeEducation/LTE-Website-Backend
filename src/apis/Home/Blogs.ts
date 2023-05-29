import type { BlogCard } from '../../types';
import * as BlogCards from '../../services/BlogCards';

const LIMIT_COUNT = 3;
export default async (): Promise<BlogCard[]> => BlogCards.default({ limit: LIMIT_COUNT });
