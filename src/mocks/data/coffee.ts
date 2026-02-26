import { faker } from '@faker-js/faker';

export const generateCaffee = () => ({
  id: faker.string.uuid(),
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAOO7wSXkf9vkqhH-pyVlDwp_OgjRQ97i8Q4P1fl-ILgKw6jMinXkDw_1xhnS_mhPEK9BNX32PupIJLr8-yihLlQG-cVjkhCaIjnQgFqMMPSoDkWshFCuLLj78UwuTcG912vaZkYygFKNAbc80ZGLexrD4-1GoRMdr_TP2BPp39u3pka4uzMkMA1eIihke6nCD5LJChUxMDsfjAX3dT9-hQUt1dnFAM_AiG3vyydtUlTIG1OxRpR8yozAWP0AzO_r-LeNbwCxb9VIg',
  imageDescription: 'Close up of a creamy caffe latte with foam',
  name: 'Caramel Macchiato',
  smallDescription: 'Sweet vanilla with espresso &amp; caramel drizzle',
  longDescription: '',
  duration: 5,
  rating: 4.9,
  difficulty: 'Easy',
});
