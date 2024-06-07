import { Blog } from '@data/Blog';
import { BlogCard } from '@domain/Blog';
import { formatDateString } from '@helpers/Humaniser';
import { extractFirstParagraph } from '@helpers/RichTextParser';

export const mapToBlogCard = (src: Blog): BlogCard => {
  return {
    tags: src.contentfulMetadata.tags,
    id: src.sys.id,
    createdAt: formatDateString(src.sys.publishedAt),
    description: extractFirstParagraph(src.body),
    title: src.title,
    thumbnail: src.thumbnail.url,
  };
};
