import dotenv from 'dotenv';

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  dotenv.config();
}

export * as Home from './apis/Home';