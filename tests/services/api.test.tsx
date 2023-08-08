import axios from 'axios';
import { api } from '@/services/api';

jest.mock('axios');

test('creates a correct Axios instance', () => {
  expect(api).toEqual(
    axios.create({
      baseURL: 'http://gateway.marvel.com/v1/public',
    }),
  );
});
