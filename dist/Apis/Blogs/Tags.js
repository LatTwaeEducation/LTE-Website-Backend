import { getAllTags } from '../../Services/ContentfulServices';
import { convertToBlogTag } from '../../Mappers/ContentfulRESTTagAndBlogTag';
export default async () => (await getAllTags()).map(convertToBlogTag);
