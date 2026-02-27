import { DIFFICULT_TYPE } from '../../../commons/core/constants';

export const CAFFEE_TYPE = Object.freeze({
  ALL: 'ALL',
  ESPRESSO: 'ESPRESSO',
  COLD_BREW: 'COLD_BREW',
  POUROVER: 'POUROVER',
  LATTE_ART: 'LATTE_ART',
});

export interface Coffee {
  id: string;
  image: string;
  imageDescription: string;
  name: string;
  smallDescription: string;
  longDescription: string;
  duration: number;
  rating: number;
  difficult: keyof typeof DIFFICULT_TYPE;
  type?: keyof typeof CAFFEE_TYPE;
}
