import * as BlogCards from '../../Services/BlogCards';
import { BlogCard } from '../../Types/Blogs/Blog';

const LIMIT_COUNT = 3;
export default async (): Promise<BlogCard[]> => BlogCards.default({ limit: LIMIT_COUNT });
