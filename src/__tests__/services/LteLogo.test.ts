import dotenv from 'dotenv';
import * as LteLogo from 'src/services/LteLogo';
import { testIsAsset } from '../helpers';

dotenv.config();

describe('LTE Logo Service Test', () => {
  test('It should return LTE Logo, with type `Asset`', async () => {
    const data = await LteLogo.default();

    expect(data).toBeDefined();
    expect(typeof data).toBe('object');
    testIsAsset(data);
  });
});
