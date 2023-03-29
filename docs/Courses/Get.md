---
title: Course Get 
author: Zaw Nay Lin
---

# Prerequisites
<h2 id="class-category">Class Category</h2>

As classCategory, you can use one of this 4 string
```ts
type ClassCategory = 'Junior' | 'Youth' | 'Everyone' | 'IGCSE'
```

# Get all the brief descriptions for courses (Home Page)

Get the brief descriptions of respective courses to display in Home page.

## Endpoint URL

`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/entries?content_type=course&select=fields.name&fields.classCategory=<classCategory>`

Where `<classCategory>` is [ClassCategory](#class-category)

## JavaScript Library

```ts
const getCoursesBrief = async (classCategory: ClassCategory) => {
	const response = await client.getEntries({
		content_type: 'course',
		select: 'fields.name', 
		'fields.classCategory': classCategory
	});
	
	return response;
}
```

## Response for 'Youth'

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
        "name": "AI for Youth"
      }
    },
    {
      "fields": {
        "name": "Python for Youth"
      }
    }
  ]
}
```

# Get the student counts and class counts (About Us Page)

Get the minimal data to calculate classes and students count. `total` should contains the classes count. Each `fields.students` should contain the students count for each class. Since *Contentful* has pagination, `skip` can be used if the classes count is more than the limit. The students count can be calculated by adding up all the `fields.students` values. 

## Endpoint URL

`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/entries?content_type=course&select=fields.students&skip=<skip_amount>`

Where `<skip_amount>` is used for pagination. 

## JavaScript Library

```ts
const getCoursesBrief = async (skip_amount: number = 0) => {
	const response = await client.getEntries({
		content_type: 'course',
		select: 'fields.students', 
		skip: skip_amount
	});
	
	return response;
}
```

## Response

```json
{
  "sys": {
    "type": "Array"
  },
  "total": 6,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "fields": {
        "students": 5
      }
    },
    {
      "fields": {
        "students": 0
      }
    },
    {
      "fields": {
        "students": 1
      }
    },
    {
      "fields": {
        "students": 23
      }
    },
    {
      "fields": {
        "students": 50
      }
    },
    {
      "fields": {
        "students": 15
      }
    }
  ]
}

```

# Get all the courses with more details (Courses for X)

Get more descriptions for respective courses to display in respective courses page.

## Endpoint URL

`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/entries?content_type=course&select=sys.id,fields.slug,fields.thumbnail,fields.name,fields.timelineHours,fields.students&fields.classCategory=<classCategory>`

Where `<classCategory>` is [ClassCategory](#class-category)

## JavaScript Library

```ts
const getCourses = async (classCategory: ClassCategory) => {
	const response = await client.getEntries({
		content_type: 'course',
		select: 'sys.id,fields.name,fields.slug,fields.timelineHours,fields.students', 
		'fields.classCategory': classCategory
	});
	
	return response;
}
```

## Response for 'Youth'

```json
{
  "sys": {
    "type": "Array"
  },
  "total": 3,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "fields": {
        "slug": "python-for-youth",
        // thumbnail should be here if available. 
        "name": "Python for Youth",
        "timelineHours": 36,
        "students": 0
      },
      "sys": {
        "id": "1H1Nz03U9BuZYYDd5mzJcc"
      }
    },
    {
      "fields": {
        "slug": "ai-for-youth",
        // thumbnail should be here if available. 
        "name": "AI for Youth",
        "timelineHours": 36,
        "students": 23
      },
      "sys": {
        "id": "6AolyphBZNsDi88XdJeSsh"
      }
    },
    {
      "fields": {
        "slug": "example-course",
        "thumbnail": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "6duc12GuFwR4Rs7NgoGiz4"
          }
        },
        "name": "Example Course",
        "timelineHours": 45,
        "students": 15
      },
      "sys": {
        "id": "4bb1mxclI7MF5Hu3uWhTU8"
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

# Get each course detail
Get details for each course with ID or slug, whatever you prefer.

P.S. For details, the response will still be an array, since we cannot get any assets information with `getEntry` function. Therefore, it is required to use `getEntries` function, and get the first element. 

## Endpoint URL

### With ID

`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/entries?sys.id=<id>`

Where `<id>` is the ID of the entry.

### With Slug

`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/entries?content_type=course&fields.slug=<slug>`

Where `<slug>` is the slug name of the entry.

## JavaScript Library

### With ID

```ts
const getCourseDetails = async (id) => {
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
		content_type: 'course',
		'fields.slug': slug,
	});
	
	return response;
}
```

## Response

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
        "id": "1H1Nz03U9BuZYYDd5mzJcc",
        "type": "Entry",
        "createdAt": "2022-11-15T07:30:58.802Z",
        "updatedAt": "2022-11-15T07:30:58.802Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "course"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "name": "Python for Youth",
        "slug": "python-for-youth",
        "timelineHours": 36,
        "requirement": [
          "Computer"
        ],
        "learningPlatform": [
          "Zoom"
        ],
        "languages": [
          "Burmese"
        ],
        "whatWeTeach": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem Ipsum",
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
        "whatYouLearn": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem Ipsum",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "furtherLearning": {
          "nodeType": "document",
          "data": {},
          "content": [
            {
              "nodeType": "paragraph",
              "data": {},
              "content": [
                {
                  "nodeType": "text",
                  "value": "Lorem Ipsum",
                  "marks": [],
                  "data": {}
                }
              ]
            }
          ]
        },
        "classCategory": "Youth"
      }
    }
  ]
}
```

# Get the related courses to current course

Get 3 suggestions courses which are related to the current course. 

## Endpoint URL

`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/entries?content_type=course&select=sys.id,fields.slug,fields.thumbnail,fields.name,fields.timelineHours,fields.students&sys.id[ne]=<currentCourseId>&fields.classCategory=<classCategory>&limit=3`

Where `<classCategory>` and `<currentCourseId>` is [ClassCategory](#class-category) and the id of the current course. 

## JavaScript Library

```ts
const getCourses = async (currentCourseId: string, classCategory: ClassCategory) => {
	const response = await client.getEntries({
		content_type: 'course',
		select: 'sys.id,fields.slug,fields.thumbnail,fields.name,fields.timelineHours,fields.students', 
		'sys.id[ne]': currentCourseId, 
		'fields.classCategory': classCategory
	});
	
	return response;
}
```

## Response for 'Youth'

```json
{
  "sys": {
    "type": "Array"
  },
  "total": 3,
  "skip": 0,
  "limit": 3,
  "items": [
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
        "id": "1H1Nz03U9BuZYYDd5mzJcc",
        "type": "Entry",
        "createdAt": "2022-11-15T07:30:58.802Z",
        "updatedAt": "2023-01-08T10:35:58.123Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "course"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "name": "Python for Youth",
        "slug": "python-for-youth",
        "timelineHours": 36,
        "requirements": [
          "Computer"
        ],
        "learningPlatforms": [
          "Zoom"
        ],
        "languages": [
          "Burmese"
        ],
        "skills": [
          "Python",
          "Programming"
        ],
        "whatWeTeach": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem Ipsum",
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
        "whatYouLearn": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem Ipsum",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "furtherLearning": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem Ipsum",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "classCategory": "Youth",
        "students": 0
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
        "id": "6AolyphBZNsDi88XdJeSsh",
        "type": "Entry",
        "createdAt": "2022-11-15T07:48:34.596Z",
        "updatedAt": "2023-01-08T10:35:24.208Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "course"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "name": "AI for Youth",
        "slug": "ai-for-youth",
        "timelineHours": 36,
        "requirements": [
          "Computer"
        ],
        "learningPlatforms": [
          "Zoom"
        ],
        "languages": [
          "Burmese"
        ],
        "skills": [
          "Artificial Intelligence",
          "Machine Learning",
          "Programming"
        ],
        "whatWeTeach": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem Ipsum",
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
        "whatYouLearn": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem Ipsum",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "furtherLearning": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem Ipsum",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "classCategory": "Youth",
        "students": 23
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
        "id": "4bb1mxclI7MF5Hu3uWhTU8",
        "type": "Entry",
        "createdAt": "2022-12-27T19:03:48.943Z",
        "updatedAt": "2022-12-27T19:03:48.943Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "course"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "name": "Example Course",
        "slug": "example-course",
        "thumbnail": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "6duc12GuFwR4Rs7NgoGiz4"
          }
        },
        "featuredImage": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "4FdzFbKnST3BCgbXQzqvb1"
          }
        },
        "timelineHours": 45,
        "requirements": [
          "Computer",
          "Internet"
        ],
        "learningPlatforms": [
          "Zoom"
        ],
        "languages": [
          "Burmese"
        ],
        "skills": [
          "Programming",
          "Python",
          "Data Structure"
        ],
        "whatWeTeach": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "lorem ipsumasdfdasfdasf",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "whatYouLearn": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "sdfadsnfajsfdasf",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "furtherLearning": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "asdfdasgfew",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "classCategory": "Youth",
        "students": 15
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
          "id": "4FdzFbKnST3BCgbXQzqvb1",
          "type": "Asset",
          "createdAt": "2022-12-27T19:02:53.172Z",
          "updatedAt": "2022-12-27T19:02:53.172Z",
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
          "title": "LTE-Test-Course",
          "description": "Testing photo for course",
          "file": {
            "url": "//images.ctfassets.net/gxxheul7hh8o/4FdzFbKnST3BCgbXQzqvb1/a3dcfead53bd385b024d880ab107ee44/random.jpg",
            "details": {
              "size": 8853,
              "image": {
                "width": 787,
                "height": 444
              }
            },
            "fileName": "random.jpg",
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
