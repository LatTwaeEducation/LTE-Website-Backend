import dotenv from 'dotenv';
import * as MissionVision from '../../Services/MissionVision';
import type { Mission, Vision } from '../../Types/CommonTypes';

dotenv.config();
describe('Getting Mission and Vision', () => {
  let data: Awaited<Promise<Mission & Vision>>;

  beforeEach(async () => {
    data = await MissionVision.default();
  });

  test('Should return Mission & Vision', () => {
    expect(data).toBeDefined();
    expect(typeof data).toBe('object');
    expect(data).toMatchObject(
      expect.objectContaining({
        mission: expect.any(String),
        vision: expect.any(String),
      })
    );
  });
});
