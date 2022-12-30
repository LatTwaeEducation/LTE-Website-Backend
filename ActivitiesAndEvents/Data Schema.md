---
title: ActivityEvent schema
author: Zaw Nay Lin
---
# Activities and Events schema

The full schema for `activityEvent` is as follow
Name | Type | Description
--- | --- | ---
name | string | The name of the event
slug | string | The slug of the event
speaker | string | The name of the speaker
thumbnail | [Link](../DataSchema#link-object) | Link object to thumbnail asset
featuredImage | [Link](../DataSchema#link-object) | Link object to Featured Image asset
eventDate | Date | The schedule time of the activity/event
replayLink | string | URL to recorded video if available
shareLink | string | URL to share link
about | Rich Text | The full description of the activity/event

