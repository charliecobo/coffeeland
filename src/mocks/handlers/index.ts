import { delay, http, HttpResponse } from 'msw';
import { RECIPES } from './recipes';

const API = [
  http.get<never, never, { message: string }>('https://my-custom/resource', async () => {
    await delay(1000);
    return HttpResponse.json({ message: 'hello world' });
  }),
];

export const handlers = [...API, ...RECIPES];
