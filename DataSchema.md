---
title: Contentful DataSchema
author: Zaw Nay Lin
---
# Contentful Data Schema

These are the schema for contentful objects. If there are anything missing, you can refer to [Contentful Documentation](https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference). 

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

## items
Each item has the following schema
Name | Type | Description
--- | --- | --- 
metadata | [Metadata](#metadata-object) | The metadata of the item
sys | [Sys](#entry-asset-sys-object) | The information of the item
fields | [Fields](#item-fields-object) | The main schema of the database

<h3 id="item-fields-object">fields</h3>

`fields` contains our main data schema, and can be seen in their endpoints' documentation. 

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

Each asset has the following schema
Name | Type | Description
--- | --- | --- 
metadata | [Metadata](#metadata-object) | The metadata of the asset
sys | [Sys](#entry-asset-sys-object) | The information of the asset
fields | [Fields](#asset-fields-object) | The main schema of the asset

<h3 id="asset-fields-object">fields</h3>

Name | Type | Description
--- | --- | --- 
title | string | The Title of the asset 
description | string | The Description of the asset
file | File | File of the asset

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

## Tags

When we request tags, the tags will be responsed with wrapper, just like entries.

<h3 id="tag-object">Tag</h3>

Each Tag has the following schema
Name | Type | Description
--- | --- | ---
sys | [Sys](#tag-sys-object) | Information of the tag
name | string | name of the tag

## Miscellaneous objects

<h3 id="link-object">Link object</h3>

Name | Type | Description
--- | --- | ---
type | string | it should be "Link" 
linkType | string | The object which it is linked to, such as "Space", "Environment", "Tag", "Entry" etc. 
id | string | id of the linked object

<h3 id="metadata-object">Metadata </h3>

Name | Type | Description
--- | --- | ---
tags | [Link](#link-object)[] | Link to tag object

<h3 id="sys-object">Sys</h3>

Every Sys objects have the properties of Base schema

<h4 id="base-sys-object">Base schema</h4>

Name | Type | Description
--- | --- | ---
space |	[Link](#link-object) | 	Link to resource's space.
environment | [Link](#link-object) | Link to a resource's environment.
id | string | The id of the entry 
type | string | The type of the data, usually "Entry", "Asset", "Tag", etc.
createdAt | date | 	Date and time a resource was published for the first time.
updatedAt | date | Date and time a resource was published after updating. 

<h4 id="entry-asset-sys-object">For entry and asset</h4>

The base schema is extended with following properties:
Name | Type | Description
--- | --- | ---
revision | int | Published version of the resource
locale | string | Locale of the resource, currently it'll be 'en-US'

<h4 id="tag-sys-object">For Tag</h4>

The base schema is extended with following properties: 
Name | Type | Description
--- | --- | ---
createdBy | [Link](#link-object) | Link to User who created the tag
updatedBy | [Link](#link-object) | Link to User who updated the tag last
version | int | Published Version of the tag
visibility | string | Should be "public"