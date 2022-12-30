---
title: Course Get 
---

# Prerequisites
<h2 id="class-category">Class Schema</h2>

As classCategory, you can use one of this 4 string
```ts
type ClassCategory = 'Junior' | 'Youth' | 'Everyone' | 'IGCSE'
```

# Get all the brief descriptions for courses (Home Page)

Get the brief descriptions of respective courses to display in Home page:
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

An example response for **Youth** is as follow:

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

# Get all the courses with more details (Courses for X)

Get more descriptions for respective courses to display in Home page:
```ts
const getCourses = async (classCategory: ClassCategory) => {
	const response = await client.getEntries({
		content_type: 'course',
		select: 'sys.id,fields.name,fields.slug,fields.timelineHour', 
		'fields.classCategory': classCategory
	});
	
	return response;
}
```

An example response for **Youth** is as follow:

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
        "name": "AI for Youth",
        "slug": "ai-for-youth",
        "timelineHour": 36
      },
      "sys": {
        "id": "6AolyphBZNsDi88XdJeSsh"
      }
    },
    {
      "fields": {
        "name": "Python for Youth",
        "slug": "python-for-youth",
        "timelineHour": 36
      },
      "sys": {
        "id": "1H1Nz03U9BuZYYDd5mzJcc"
      }
    }
  ]
}

```

# Get each course detail
Get details for each course with ID or slug, whatever you prefer.

P.S. For details, the response will still be an array, since we cannot get any assets information with `getEntry` function. Therefore, it is required to use `getEntries` function, and get the first element. 

## With ID
```ts
const getCourseDetails = async (id) => {
	const response = await client.getEntries({
		'sys.id': id
	});
	
	return response;
}
```

## With slug 
```ts 
const getCourseDetails = async (slug) => {
	const response = await client.getEntries({
		content_type: 'course',
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
        "timelineHour": 36,
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

