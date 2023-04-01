import dotenv from 'dotenv';

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  dotenv.config();
}

export * as Home from './apis/Home';
export * as AboutUS from './apis/AboutUs';
export * as JuniorYouth from './apis/JuniorYouth';
