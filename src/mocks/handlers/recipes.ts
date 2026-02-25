import { delay, http, HttpResponse } from 'msw';

export const RECIPES = [
  http.get<never, never, { message: string }>('https://my-custom/recipes', async () => {
    await delay(1000);
    return HttpResponse.json({ message: 'hello world' });
  }),
];

