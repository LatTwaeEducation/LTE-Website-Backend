---
title: README
author: Zaw Nay Lin
---

# LTE Website Backend APIs

This is the documentation for LTE Website Backend APIs powered by *Contentful*. 
The content delivery network url : https://cdn.contentful.com

## Authentication
In order to use the API, we need to use the following values
Name | Value 
--- | ---
Space ID | gxxheul7hh8o
Environment | master
Access Token | S0z9Q7cdEMI0zvKzqWz0UNEbjhu70ahTlh6q_tuMZg8

The Access Token can be passed through as URL parameter 
`<url>?access_token=<Access Token>`
Or as Bearer Token Authentication
```http
Authorization: Bearer <Access Token>
```
If not. You'll see the following error response.
```json
{
	"sys": {
		"type": "Error",
	    "id": "AccessTokenInvalid"
	},
	"message": "An access token is required. Please send one through the HTTP Authorization header or as the query parameter \"access_token\".",
	"requestId": "82b58473-7350-4349-9b6d-aa14e3b176fe"
}
```

<h2 id=base-endpoint>Base Endpoint</h2>

Every endpoints has the following url
https://cdn.contentful.com/spaces/gxxheul7hh8o/environments/master/entries

## JavaScript CDN Client Library

We can access via API endpoints, but *Contentful* has already provided client library for easier access.

### Installation
To install via npm
```sh
npm install contentful
```

### Making a request
To make a request, we need to create a client first. 
P.S. It'll be better to use env files instead of hardcoding the Space ID and Access Token. 
```js
const contentful = require("contentful");

// Client Createion
const client = contentful.createClient({
	space: "gxxheul7hh8o",
	accessToken: "S0z9Q7cdEMI0zvKzqWz0UNEbjhu70ahTlh6q_tuMZg8",
});
```
You can use that client to make request in your code. 
```js 
const getCourses = async () => {
	const response = await client.getEntries({
		content_type: "course"
	});
	
	return {
		props: {courses: response.items}
	}
}
```

## Rich Text Format {#rich-text-format}

When handling the rich text format, it is better to use with the JavaScript Library, the structure for Rich Text Format can be seen in DataSchema. 