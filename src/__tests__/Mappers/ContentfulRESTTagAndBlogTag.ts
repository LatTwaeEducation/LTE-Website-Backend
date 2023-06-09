import { ContentfulRESTTag } from '../../Types/Contentful/CommonTypes';
import { BlogTag } from '../../Types/Blogs/Blog';
import { convertToBlogTag } from '../../Mappers/ContentfulRESTTagAndBlogTag';

describe('Contentful REST Tag and Blog Tag Mappers Tests', () => {
  test('Should convert from Contentful REST Tag to Blog Tag', () => {
    const inputData: ContentfulRESTTag = {
      sys: {
        id: 'something',
      },
      name: 'SomeThing',
    };

    const expected: BlogTag = {
      id: inputData.sys.id,
      name: inputData.name,
    };

    expect(convertToBlogTag(inputData)).toEqual(expected);
  });
});
