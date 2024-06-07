import { getBlogById } from '@persistence/BlogRepository';
import dotenv from 'dotenv';

dotenv.config();

describe('BlogRepository Tests', () => {
  describe('getBlogById Tests', () => {
    test('Should return an object', async () => {
      const response = await getBlogById('2z1erxsIpc8hw0xe7vNYOi');
      expect(response).toBeDefined();
      expect(typeof response).toBe('object');
      expect(response).not.toBeNull();
    });
  });
});
