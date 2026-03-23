import type { GenericAbortSignal } from 'axios';
import { http } from '../../../commons/core/services/http';

import { CAFFEE_TYPE, type Coffee, type GetCoffeListParams } from '../interfaces';

export const coffeeService = {
  getCoffeeList: async (
    { term, method = CAFFEE_TYPE.ALL }: Partial<GetCoffeListParams>,
    signal?: GenericAbortSignal
  ): Promise<Coffee[]> => {
    return (
      await http.get<Coffee[]>('/coffee', {
        params: {
          term,
          method,
        },
        signal,
      })
    ).data;
  },
};
