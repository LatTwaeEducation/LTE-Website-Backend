import dotenv from 'dotenv';
import { expect } from '@jest/globals';
import * as LteLogo from 'src/Services/LteLogo';

dotenv.config();

describe('LTE Logo Service Test', () => {
  test('It should return LTE Logo, with type `Asset`', async () => {
    const data = await LteLogo.default();

    expect(data).toBeDefined();
    expect(typeof data).toBe('string');
  });
});
