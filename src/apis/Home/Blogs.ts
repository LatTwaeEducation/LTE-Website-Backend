import type { BlogCard } from '../../types';
import { getBlogs } from '../Blogs';

const LIMIT_COUNT = 3;
export default async (): Promise<BlogCard[]> => getBlogs({ limit: LIMIT_COUNT });
