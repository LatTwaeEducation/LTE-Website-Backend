---
title: Blog get
author: Zaw Nay Lin
---
# Get the tags 

Get all the tags related to blogs. 

## Endpoint URL

`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/tags`

## JavaScript Library

```ts
const getBlogsTags = async () => {
	const response = await client.getTags();

	return response;
}
```

## Response 

```json
{
  "sys": {
    "type": "Array"
  },
  "total": 2,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "gxxheul7hh8o"
          }
        },
        "id": "codingForKids",
        "type": "Tag",
        "createdAt": "2023-01-03T13:43:41.830Z",
        "updatedAt": "2023-01-03T13:43:41.830Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0XzjJ8kLQzI5HFamo5kuEA"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0XzjJ8kLQzI5HFamo5kuEA"
          }
        },
        "version": 1,
        "visibility": "public"
      },
      "name": "Coding for kids"
    },
    {
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "gxxheul7hh8o"
          }
        },
        "id": "programmingConcept",
        "type": "Tag",
        "createdAt": "2022-11-05T06:23:25.424Z",
        "updatedAt": "2023-01-03T12:16:41.852Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "createdBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0XzjJ8kLQzI5HFamo5kuEA"
          }
        },
        "updatedBy": {
          "sys": {
            "type": "Link",
            "linkType": "User",
            "id": "0XzjJ8kLQzI5HFamo5kuEA"
          }
        },
        "version": 2,
        "visibility": "public"
      },
      "name": "Programming Concept"
    }
  ]
}
```

You might need to use only `sys.id` for id and `name` for display name in frontend. 

# Get all the blogs

Get all the blogs, filtered by tags

## Endpoint URL

### Without tags filtering

`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/entries?content_type=blog&select=sys.id,sys.updatedAt,fields.title,fields.slug,fields.description,metadata`

### With tags filtering

`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/entries?content_type=blog&select=sys.id,sys.updatedAt,fields.title,fields.slug,fields.description,metadata&metadata.tags.sys.id[all]=<tags>`

Where `<tags>` should be the comma separated string of tags ID to filter.
Example - `metadata.tags.sys.id[all]=programmingConcept,python`

## JavaScript Library

```ts
const getBlogs = async (tags: string[]) => {

	queryObject = {
		content_type: 'blog', 
		select: 'sys.id,sys.updatedAt,fields.slug,fields.title,fields.description,fields.tag',
	};

	if (tags) {
		queryObject['fields.tags[in]']: tags.join(',');
	}

	const response = await client.getEntries(queryObject);

	return response;
}
```
The example response without tag filtering is as followed

```json
{
    "sys": {
        "type": "Array"
    },
    "total": 2,
    "skip": 0,
    "limit": 100,
    "items": [
        {
            "fields": {
                "title": "Lorem Lorem",
                "slug": "lorem-lorem",
                "description": "123123213asdadfa",
                "tags": [
                    "Programming",
                    "JavaScript"
                ]
            },
            "sys": {
                "id": "3sPNr0AUfrSQuc3guuwexC",
                "updatedAt": "2022-12-30T05:51:02.383Z"
            }
        },
        {
            "fields": {
                "title": "Lorem Ipsum",
                "slug": "lorem-ipsum",
                "description": "cf adsfasvfavrfa",
                "tags": [
                    "Programming",
                    "Python"
                ]
            },
            "sys": {
                "id": "3yHgmdqZq2EghGtVaa8Rn4",
                "updatedAt": "2022-12-30T05:50:41.064Z"
            }
        }
    ]
}
```

And here is the example response with `python` tags


# Get each blog detail
Get details for each blog with ID or slug, whatever you prefer.

## Notes

* For details, the response will still be an array, since we cannot get any assets information with `getEntry` function. Therefore, it is required to use `getEntries` function, and get the first element.
* To handle Rich Text, refer to [Rich Text Format](../README#rich-text) on main page.

## Endpoint URL

### With ID
`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/entries?sys.id=<id>`
Where `<id>` is the id of the blog.

### With Slug
`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/entries?content_type=blog&fields.slug=<slug>`
Where `<slug>` is the slug name of the blog.

## JavaScript Library

### With ID
```ts
const getBlogDetails = async (id) => {
	const response = await client.getEntries({
		'sys.id': id
	});
	
	return response;
}
```

### With slug 
```ts 
const getCourseDetails = async (slug) => {
	const response = await client.getEntries({
		content_type: 'blog',
		'fields.slug': slug,
	});
	
	return response;
}
```

An example response is as followed
```json
{
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "metadata": {
        "tags": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "python"
            }
          }
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "gxxheul7hh8o"
          }
        },
        "id": "3yHgmdqZq2EghGtVaa8Rn4",
        "type": "Entry",
        "createdAt": "2022-11-15T16:45:03.715Z",
        "updatedAt": "2022-12-30T05:50:41.064Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 8,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blog"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Lorem Ipsum",
        "slug": "lorem-ipsum",
        "thumbnail": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "6duc12GuFwR4Rs7NgoGiz4"
          }
        },
        "description": "cf adsfasvfavrfa",
        "body": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, neque? Maiores, error provident beatae quibusdam recusandae eum quas laudantium sit temporibus fugit molestiae magni distinctio, facilis laborum officiis magnam! Accusamus.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "heading-1"
            },
            {
              "data": {
                "target": {
                  "sys": {
                    "id": "5wSYaBz2R3Qj7pRk3gj9jf",
                    "type": "Link",
                    "linkType": "Asset"
                  }
                }
              },
              "content": [],
              "nodeType": "embedded-asset-block"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, neque? Maiores, error provident beatae quibusdam recusandae eum ",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [
                    {
                      "type": "bold"
                    }
                  ],
                  "value": "quas ",
                  "nodeType": "text"
                },
                {
                  "data": {},
                  "marks": [],
                  "value": "laudantium sit temporibus fugit molestiae magni distinctio, facilis laborum officiis magnam! Accusamus.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eius, neque? Maiores, error provident beatae quibusdam recusandae eum quas laudantium sit temporibus fugit molestiae magni distinctio, facilis laborum officiis magnam! Accusamus.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Eius, neque? Maiores, error provident beatae quibusdam recusandae eum quas laudantium sit temporibus fugit molestiae magni distinctio, facilis laborum officiis magnam! Accusamus.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "\n\n",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "\n\n",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            },
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "tags": [
          "Programming",
          "Python"
        ]
      }
    }
  ],
  "includes": {
    "Asset": [
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "gxxheul7hh8o"
            }
          },
          "id": "5wSYaBz2R3Qj7pRk3gj9jf",
          "type": "Asset",
          "createdAt": "2022-11-15T16:54:07.636Z",
          "updatedAt": "2022-11-15T16:54:07.636Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "LTE-blog-test",
          "description": "",
          "file": {
            "url": "//images.ctfassets.net/gxxheul7hh8o/5wSYaBz2R3Qj7pRk3gj9jf/1388e239b97db9239e9106e3ec2a3825/LTE-blog-test.jpg",
            "details": {
              "size": 190413,
              "image": {
                "width": 1200,
                "height": 720
              }
            },
            "fileName": "LTE-blog-test.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "gxxheul7hh8o"
            }
          },
          "id": "6duc12GuFwR4Rs7NgoGiz4",
          "type": "Asset",
          "createdAt": "2022-11-15T16:47:56.074Z",
          "updatedAt": "2022-11-15T16:47:56.074Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "LTE-photo-test",
          "file": {
            "url": "//images.ctfassets.net/gxxheul7hh8o/6duc12GuFwR4Rs7NgoGiz4/d76f6a76fc5687d02e2261303d543312/LTE-photo-test.jpg",
            "details": {
              "size": 342293,
              "image": {
                "width": 1920,
                "height": 1080
              }
            },
            "fileName": "LTE-photo-test.jpg",
            "contentType": "image/jpeg"
          }
        }
      }
    ]
  }
}
```
