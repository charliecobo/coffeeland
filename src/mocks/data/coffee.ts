import { faker } from '@faker-js/faker';

import type { Coffee } from '../../coffee/core/interfaces/coffee.interface';
import { DIFFICULT_TYPE } from '../../commons/core/constants';

export const generateCaffee = (): Partial<Coffee> => ({
  id: faker.string.uuid(),
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAOO7wSXkf9vkqhH-pyVlDwp_OgjRQ97i8Q4P1fl-ILgKw6jMinXkDw_1xhnS_mhPEK9BNX32PupIJLr8-yihLlQG-cVjkhCaIjnQgFqMMPSoDkWshFCuLLj78UwuTcG912vaZkYygFKNAbc80ZGLexrD4-1GoRMdr_TP2BPp39u3pka4uzMkMA1eIihke6nCD5LJChUxMDsfjAX3dT9-hQUt1dnFAM_AiG3vyydtUlTIG1OxRpR8yozAWP0AzO_r-LeNbwCxb9VIg',
  imageDescription: 'Close up of a creamy caffe latte with foam',
  name: 'Caramel Macchiato',
  smallDescription: 'Sweet vanilla with espresso &amp; caramel drizzle',
  longDescription: '',
  duration: 5,
  rating: 4.9,
  difficult: DIFFICULT_TYPE.EASY,
});

export const POPULAR_RECIPES_MOCKS = [
  {
    id: faker.string.uuid(),
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOO7wSXkf9vkqhH-pyVlDwp_OgjRQ97i8Q4P1fl-ILgKw6jMinXkDw_1xhnS_mhPEK9BNX32PupIJLr8-yihLlQG-cVjkhCaIjnQgFqMMPSoDkWshFCuLLj78UwuTcG912vaZkYygFKNAbc80ZGLexrD4-1GoRMdr_TP2BPp39u3pka4uzMkMA1eIihke6nCD5LJChUxMDsfjAX3dT9-hQUt1dnFAM_AiG3vyydtUlTIG1OxRpR8yozAWP0AzO_r-LeNbwCxb9VIg',
    imageDescription: 'Close up of a creamy caffe latte with foam',
    name: 'Caramel Macchiato',
    smallDescription: 'Sweet vanilla with espresso &amp; caramel drizzle',
    longDescription: '',
    duration: 5,
    rating: 4.9,
    difficult: DIFFICULT_TYPE.EASY,
  },
  {
    id: faker.string.uuid(),
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBESzZ47D_8XKeCIoJ3e6T8fBFCOi3TwzKJrGFJbyv4Ku8s5MEXw0OYxhTvt1E-lj5YJ7PSDUSa8PleXg3NqQzUBnDvjYO2Bq6C-aM4wFcnUD10tUBk7TBXXBQ0OaDPsTqa8dj96xjwEhQfHqCrGeKV6Z0XfuX6V9M8ltVsqGxKq6I1hI5hV61HZBRx_AhMElP1RXW9DvI_YCoA3SX4DS6wuJm10tq_IhUkTBls1qwqbzKD211VvZ4LuwhnzSmkaVil-UGMMiZuDc',
    imageDescription: 'Clean, crisp, and aromatic coffee brewing',
    name: 'V60 Pourover',
    smallDescription: 'Clean, crisp, and aromatic coffee brewing',
    longDescription: '',
    duration: 8,
    rating: 4.7,
    difficult: DIFFICULT_TYPE.MEDIUM,
  },
  {
    id: faker.string.uuid(),
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjYvJvg7qmTe-qwOKWGDOubhZ988eRf3orQwqBK3-XliDRsZWt_NMTMBD_cXtduw--WhI3MCUpj-jLH01mps4fE7SMzMiAF1ynmwWE3gq9vqDKJ0XJimsOFwqFFaOjR69i5-Ujbg-fwIO_rc5PI8GpCxVYzZnxIsd0KuzmXnWT8O1oZy2Q4NbGEpzD3pzSHbdhfOBnLidWBj-YeOlXdj6uhSe2PIR2gJPzYoSyGky4Bt3i2DD7Qo6eQeXO-Iev_tQhQiWMyr7a8EA',
    imageDescription: 'Silky smooth coffee infused with nitrogen',
    name: 'Nitro Cold Brew',
    smallDescription: 'Silky smooth coffee infused with nitrogen',
    longDescription: '',
    duration: 24,
    rating: 5,
    difficult: DIFFICULT_TYPE.HARD,
  },
];
