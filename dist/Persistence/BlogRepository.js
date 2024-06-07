import { sendGraphQl } from "../Helpers/ContentfulServices";
import { distinct } from "../Helpers/Utilities";
export const getBlogById = async (blogId) => {
    const query = `
  query ($blogId: String!) {
    blog(id: $blogId) {
      sys {
        id
        publishedAt
      }
      slug
      title
      thumbnail {
        title
        url
      }
      body {
        json
        links {
          assets {
            hyperlink {
              url
              title
            }
          }
        }
      }
    }
  }`;
    const queryVariables = {
        blogId,
    };
    const { blog } = await sendGraphQl(query, queryVariables);
    return blog;
};
export const getBlogs = async (queryVariables) => {
    const query = `
  query ($skip: Int, $limit: Int) {
    blogCollection(skip: $skip, limit: $limit) {
      items {
        sys {
          id
          publishedAt
        }
        contentfulMetadata {
          tags {
            id
            name
          }
        }
        title
        thumbnail {
          url
          title
        }
        body {
          json
        }
      }
    }
  }`;
    const { blogCollection } = await sendGraphQl(query, queryVariables);
    return blogCollection.items;
};
export const getBlogTags = async () => {
    const query = `
  query {
    blogCollection {
      items {
        contentfulMetadata {
          tags {
            id
            name
          }
        }
      }
    }
  }`;
    const { blogCollection } = await sendGraphQl(query);
    const tags = blogCollection.items.flatMap((b) => b.contentfulMetadata.tags);
    const uniqueTags = distinct(tags, (t) => t.id);
    return uniqueTags;
};
