import dotenv from 'dotenv';
import * as AllCounts from 'src/Services/AllCounts';
import { testHasPropertyAndType } from '../helpers';

dotenv.config();

describe('All Counts Testing', () => {
  test('It should return an object which contains three count properties', async () => {
    const data = await AllCounts.default();
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTruthy();

    data.forEach((countCard) => {
      testHasPropertyAndType(countCard, 'name', 'string');
      testHasPropertyAndType(countCard, 'count', 'number');
      testHasPropertyAndType(countCard, 'message', 'string');

      expect(['Classes', 'Members', 'Students'].includes(countCard.name));
    });
  });
});
