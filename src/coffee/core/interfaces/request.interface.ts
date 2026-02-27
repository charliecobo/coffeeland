import type { CAFFEE_TYPE } from './coffee.interface';

export interface GetCoffeListParams {
  type?: keyof typeof CAFFEE_TYPE;
  term?: string;
}
