---
title: Partnership Get 
author: Zaw Nay Lin
---
# Get all the partnerships

Get the partnerships company to display in Home page.

## Endpoint URL

`https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/content_type=partnership`

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
        "id": "54cxzhSBUIzNLMrt4Gjfsj",
        "type": "Entry",
        "createdAt": "2023-02-02T12:37:18.337Z",
        "updatedAt": "2023-02-02T12:37:18.337Z",
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
            "id": "partnership"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "company": "Coca Cola",
        "logo": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "5Du39N4ePY1maXfXgO2KHV"
          }
        }
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
          "id": "5Du39N4ePY1maXfXgO2KHV",
          "type": "Asset",
          "createdAt": "2023-02-02T12:37:06.163Z",
          "updatedAt": "2023-02-02T12:37:06.163Z",
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
          "title": "Coca Cola Logo",
          "description": "Logo for Coca Cola Company",
          "file": {
            "url": "//images.ctfassets.net/gxxheul7hh8o/5Du39N4ePY1maXfXgO2KHV/640aac25b7a4837a10d1a9d4c786a8a7/1500px_Coca_Cola_logo.png",
            "details": {
              "size": 11087,
              "image": {
                "width": 924,
                "height": 636
              }
            },
            "fileName": "1500px_Coca_Cola_logo.png",
            "contentType": "image/png"
          }
        }
      }
    ]
  }
}
```
