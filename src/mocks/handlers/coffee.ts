import { delay, http, HttpResponse } from 'msw';
import { generateCaffee } from '../data';

export const COFFEES = [
  http.get<never, never, any>('https://my-custom/api/v1/coffee', async () => {
    await delay(1000);
    return HttpResponse.json([generateCaffee()]);
    // return HttpResponse.json({ message: 'Hola' });
  }),
];
