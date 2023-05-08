import dotenv from 'dotenv';
import queryData from 'src/services/graphql';
import { testHasPropertyAndType } from '../helpers';

dotenv.config();

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
    testHasPropertyAndType(data, 'blog', 'object');
    testHasPropertyAndType(data.blog, 'sys', 'object');
    testHasPropertyAndType(data.blog.sys, 'id', 'string');

    expect(data.blog.sys.id).toBe(queryVar.id);
  });
});
