---
title: README
author: Zaw Nay Lin
---

# LTE Website Backend node module
This is the documentation for LTE Website Backend node module which can be integrated easily with other modules such as react-query.
Previously, the website backend needs to be accessed by REST endpoint and also needs sanitisation, thus making frontend works more. 
This module aims to loosen the burden of the frontend team, providing them with ready to use functions as endpoints. 

## Authentication
The backend is powered by *Contentful*, which requires the following values for requests. 
Name | Value 
--- | ---
Space ID | gxxheul7hh8o
Environment | master
Access Token | S0z9Q7cdEMI0zvKzqWz0UNEbjhu70ahTlh6q_tuMZg8

In the module, Space ID and Environment are hard coded, since those two values are relatively going to be same in the future. 
However, you need to add `CONTENTFUL_ACCESS_TOKEN` in .env file to work. 
```.env
CONTENTFUL_ACCESS_TOKEN=
```
If not, following error will be thrown
```sh
Error: No Access Token found.
Please save the access token as CONTENTFUL_ACCESS_TOKEN
```

## Installation

To install via npm
```sh
npm install https://github.com/LatTwaeEducation/LTE-Website-Backend.git
```

## Endpoints

The documentations for each endpoints are listed below: 
1. [Home](./Home)
<h2 id='rich-text'>Rich Text Format</h2>
Rich Texts are already converted into direct HTML strings. There is no need to worry of conversion. 
