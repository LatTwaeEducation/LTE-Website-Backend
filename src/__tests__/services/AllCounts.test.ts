import dotenv from 'dotenv';
import * as AllCounts from 'src/services/AllCounts';

dotenv.config();

describe('All Counts Testing', () => {
  let allCountsResult: unknown;

  beforeAll(async () => {
    allCountsResult = await AllCounts.default();
  });

  test('It should return an object which contains three count properties', async () => {
    expect(typeof allCountsResult).toBe('object');
    expect(allCountsResult).toHaveProperty('membersCount');
    expect(allCountsResult).toHaveProperty('coursesCount');
    expect(allCountsResult).toHaveProperty('studentsCount');
  });
});
