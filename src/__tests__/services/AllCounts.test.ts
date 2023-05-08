import dotenv from 'dotenv';
import * as AllCounts from 'src/services/AllCounts';
import { testHasPropertyAndType } from '../helpers';

dotenv.config();

describe('All Counts Testing', () => {
  test('It should return an object which contains three count properties', async () => {
    const data = await AllCounts.default();
    expect(data).toBeDefined();
    expect(typeof data).toBe('object');

    testHasPropertyAndType(data, 'members', 'object');
    testHasPropertyAndType(data.members, 'count', 'number');
    testHasPropertyAndType(data.members, 'message', 'string');

    testHasPropertyAndType(data, 'courses', 'object');
    testHasPropertyAndType(data.courses, 'count', 'number');
    testHasPropertyAndType(data.courses, 'message', 'string');

    testHasPropertyAndType(data, 'students', 'object');
    testHasPropertyAndType(data.students, 'count', 'number');
    testHasPropertyAndType(data.students, 'message', 'string');
  });
});
