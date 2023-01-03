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
1. [metadata](#metadata-object)
2. [sys](#sys-object)
3. [fields](#fields-object)

<h3 id="metadata-object">Metadata </h3>

Name | Type | Description
--- | --- | ---
tags | [Tags](#tag-object)[] | The list of tags related to that entry

<h3 id="sys-object">sys</h3>

Name | Type | Description
--- | --- | ---
space |	[Link](#link-object) | 	Link to resource's space.
environment | [Link](#link-object) | Link to a resource's environment.
id | string | The id of the entry 
type | string | The type of the data, usually "Entry" or "Asset"
createdAt | date | 	Date and time a resource was published for the first time.
updatedAt | date | Date and time a resource was published after an update.
revision | int | Published version of resource.
locale | string | Locale of the entry, currently it'll be 'en-US'

<h3 id="fields-object">fields</h3>

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
1. [metadata](#metadata-object)
2. [sys](#sys-object)
3. [fields](#asset-object)
The structure for metadata and sys is the same. 

<h3 id="asset-object">Asset object</h3>
The schema of the [Asset](#asset-object) object is as followed:
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

## Miscellaneous objects

<h3 id="link-object">Link object</h3>

The schema of the [Link](#link-object) object is as followed:
Name | Type | Description
--- | --- | ---
type | string | it should be "Link" 
linkType | string | The object which it is linked to, such as 'Space', 'Environment', etc. 
id | string | id of the linked object

<h3 id="tag-object">Tag object</h3>

The schema of the [Tag](#tag-object) object is just link with `linkType: "Tag"`:
Name | Type | Description
--- | --- | ---
type | string | it should be "Link"
linkType | string | it should be "Tag"
id | string | id of the tag

**Note: the id of the tag will be the tag name, but it will always be in camelCase/snake_case. It will be better if you can convert it to Title Case or Sentence case.**