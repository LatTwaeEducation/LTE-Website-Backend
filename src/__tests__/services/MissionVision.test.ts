import dotenv from 'dotenv';
import * as MissionVision from '../../services/MissionVision';
import { testHasPropertyAndType } from '../helpers';
import type { Mission, Vision } from '../../types';

dotenv.config();
describe('Getting Mission and Vision', () => {
  let data: Awaited<Mission & Vision>;

  beforeEach(async () => {
    data = await MissionVision.default();
  });

  test('Should return an object', () => {
    expect(data).toBeDefined();
    expect(typeof data).toBe('object');
  });

  test('Should have property `mission` with type `string`', () => {
    testHasPropertyAndType(data, 'mission', 'string');
  });

  test('Should have property `vision` with type `string`', () => {
    testHasPropertyAndType(data, 'vision', 'string');
  });
});
