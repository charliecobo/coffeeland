import { delay, http, HttpResponse } from 'msw';
import { RECIPES } from './recipes';
import { COFFEES } from './coffee';

const API = [
  http.get<never, never, { message: string }>('https://my-custom/api/v1/resource', async () => {
    await delay(1000);
    return HttpResponse.json({ message: 'hello world' });
  }),
];

export const handlers = [...API, ...RECIPES, ...COFFEES];
