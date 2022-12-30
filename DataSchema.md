---
title: DataSchema
author: Zaw Nay Lin
---
# Data Schema

## Wrapper

Contentful response contains the following wrapper object for extra information such as pagination.

### Example Wrapper
```json
{
	"sys": {
		"type": "Array"
	},
	"total": 2,
	"skip": 0,
	"limit": 100,
	"items": [/*Items to return*/]
}
```

## Items
Each item consists of three keys
1. metadata
2. sys
3. fields

### Metadata 
Name | Type | Description
--- | --- | ---
tags | [string] | The list of tags related to that entry

### sys
Name | Type | Description
--- | --- | ---
space |	Link | 	Link to resource's space.
environment | Link | Link to a resource's environment.
id | string | The id of the entry 
type | string | The type of the data, usually "Entry" or "Asset"
createdAt | date | 	Date and time a resource was published for the first time.
updatedAt | date | Date and time a resource was published after an update.
revision | int | Published version of resource.
locale | string | Locale of the entry, currently it'll be 'en-US'

The structure of the [Link](#link-object) object is described below.

### fields
Fields contains our main data schema, and can be seen in their endpoints' documentation. 


## includes
If we have assets to included in the list, the response will be as followed.
```json 
{
	"sys": {
		"type": "Array"
	},
	"total": 2,
	"skip": 0,
	"limit": 100,
	"items": [/*Items to return*/],
	"includes": {
		"Asset": [/*Assets related to the items*/]
	}
}
```
As before, each asset will also have three keys,
1. metadata
2. sys
3. fields

The structure for metadata and sys is the same. 

<h3 id="link-object">Link object</h3>

The structure of the link object is as followed
Name | Type | Description
--- | --- | ---
type | string | it should be 'Link' 
linkType | string | The object which it is linked to, such as 'Space', 'Environment', etc. 
id | string | id of the linked object


### Asset fields
For the asset, the fields has the following structure.
Name | Type | Description
--- | --- | --- 
title | string | The Title of the asset 
description | string | The Description of the asset
file | File | File(s) of the asset

The file object has the following structure

Name | Type | Description
--- | --- | --- 
url | string | URL to the asset 
fileName | string | The original filename of the file. 
contentType | string | The file type of asset
details | Details | metadata of the asset file
details.size | int | the file size of the asset
details.image | Image | The dimension information of the image
details.image.width | int | The width of the image
details.image.height | int | The height of the image
