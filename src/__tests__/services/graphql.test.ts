import dotenv from 'dotenv';
import queryData from 'src/services/graphql';

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

    const data: any = await queryData(queryString, queryVar);
    expect(data).toBeDefined();
    expect(data).toHaveProperty('blog.sys.id');
    expect(data.blog.sys.id).toBe(queryVar.id);
  });
});
