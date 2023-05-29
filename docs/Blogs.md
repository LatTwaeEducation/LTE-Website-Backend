---
title: Blogs
author: Zaw Nay Lin
---

# Blogs APIs

For Blogs Page, these are available endpoint functions:

## getAllTags

### Description

Get all the blog tags.

### Return Type

```ts
interface BlogTag {
  id: string;
  name: string;
}

declare const getAllTags: () => Promise<BlogTag[]>;
```

Where `id` is the id of the tag, and `name` is the display name of the tag.

### Example

```tsx
import { useQuery } from 'react-query';
import { Blogs } from 'lte-web-backend';

export const Component = () => {
  const { data } = useQuery('Tags', Blogs.getAllTags);

  return (
    <div>
      {data?.map((tag) => (
        <p>{tag.name}</p>
      ))}
    </div>
  );
};


```

## getBlogs

### Description

Get all the blogs in card form, if tagId is specified,

### Return Type

[BlogTag](#return-type) is as shown in above. `Asset` contains `url` and `title` as before.

```ts
interface BlogCard {
  tags: BlogTag[];
  id: string;
  thumbnail: Asset;
  title: string;
  craetedAt: string;
  description: string;
}

declare const getBlogs: () => Promise<BlogCard[]>;
```

### Example

```tsx
import { useQuery } from 'react-query';
import { Blogs } from 'lte-web-backend';

export const Component = () => {
  const { data } = useQuery('Blogs', Blogs.getBlogs);

  return (
    <div>
      {data?.map((blog) => (
        <div>
          <img src={blog.thumbnail.url} alt={blog.thumbnail.title} />
          <p>{blog.title}</p>
          <p>{blog.createdAt}</p>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
};
```

If tag IDs are specified, then only the blogs with those tags will be returned.

```tsx
const tags = ['chatGpt', 'uiux'];

const { data } = useQuery({
  queryKey: ['Blogs', tags],
  queryFn: () => Blogs.getBlogs(tags),
});
```
 