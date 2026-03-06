import type { CAFFEE_TYPE } from './coffee.interface';

export interface GetCoffeListParams {
  method?: keyof typeof CAFFEE_TYPE;
  term?: string;
}
