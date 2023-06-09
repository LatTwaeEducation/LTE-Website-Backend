import axios from 'axios';
import dotenv from 'dotenv';
import { jest } from '@jest/globals';
import { validationTests } from '../ValidationTest';
import { ContactMessage } from '../../Types/ContactMessages/ContactMessage';
import { postMessage } from '../../Services/PostMessage';
import { ValidationError } from '../../Types/CustomErrors/ValidationError';
import { wrapContentfulPostResponse } from '../helpers';
import { convertToContentfulContactMessage } from '../../Mappers/ContactMessageAndContentfulContactMessage';

dotenv.config();

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Post Contact Message Tests', () => {
  test('Should throw ValidationError when invalid message object is passed.', async () => {
    const inputData = validationTests.find((testSet) => !testSet.expected.isValid)?.input as ContactMessage;
    await expect(postMessage(inputData)).rejects.toThrow(ValidationError);
  });

  test('Should return an object with id when valid message is passed.', async () => {
    const inputData = validationTests.find((testSet) => testSet.expected.isValid)?.input as ContactMessage;
    const responseData = wrapContentfulPostResponse(convertToContentfulContactMessage(inputData));

    mockedAxios.post.mockResolvedValue({ data: responseData });
    const data = await postMessage(inputData);

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(data).toBeDefined();
    expect(data).toMatchObject({
      ...convertToContentfulContactMessage(inputData),
      sys: expect.objectContaining({
        id: expect.any(String),
      }),
    });
  });
});
