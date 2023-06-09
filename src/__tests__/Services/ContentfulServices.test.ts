import dotenv from 'dotenv';
import { queryData, getAllTags } from 'src/Services/ContentfulServices';
import { BaseSys, ContentfulRESTTag } from '../../Types/Contentful/CommonTypes';

dotenv.config();
describe('Contentful Services Test', () => {
  describe('GraphQL Query test', () => {
    test('Should return an object with valid query', async () => {
      const queryString = `
    query Partnerships {
      partnershipCollection {
        items {
          logo {
            title
            url
          }
          company
        }
      }
    }
    `;
      const data = await queryData(queryString);
      expect(data).toBeDefined();
    });

    test('Should be able to use variable', async () => {
      type Response = {
        blog: {
          sys: {
            id: string;
          };
        };
      };

      const queryString = `
    query Blog($id: String!) {
      blog(id: $id) {
        sys {
          id
        }
        title
        body {
          json
        }
      }
    }
    `;

      const queryVar = {
        id: '2z1erxsIpc8hw0xe7vNYOi',
      };

      const data = await queryData<Response>(queryString, queryVar);
      expect(data).toBeDefined();
      const expectedResponse = expect.objectContaining({
        blog: expect.objectContaining({
          sys: expect.objectContaining({
            id: expect.any(String),
          }),
          title: expect.any(String),
          body: expect.objectContaining({
            json: expect.anything(),
          }),
        }),
      });

      expect(data).toMatchObject(expectedResponse);
      expect(data.blog.sys.id).toBe(queryVar.id);
    });
  });

  describe('Get All Tags Test', () => {
    test('Should return an array of ContentfulRESTTag', async () => {
      const data = await getAllTags();

      expect(data).toBeDefined();
      expect(Array.isArray(data)).toBeTruthy();
      data.forEach((element) => {
        expect(element).toMatchObject(
          expect.objectContaining<ContentfulRESTTag>({
            sys: expect.objectContaining<BaseSys>({
              id: expect.any(String),
            }),
            name: expect.any(String),
          })
        );
      });
    });
  });
});
