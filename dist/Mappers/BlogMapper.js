import { formatDateString } from "../Helpers/Humaniser";
import { extractFirstParagraph } from "../Helpers/RichTextParser";
export const mapToBlogCard = (src) => {
    return {
        tags: src.contentfulMetadata.tags,
        id: src.sys.id,
        createdAt: formatDateString(src.sys.publishedAt),
        description: extractFirstParagraph(src.body),
        title: src.title,
        thumbnail: src.thumbnail.url,
    };
};
