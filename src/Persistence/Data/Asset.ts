import { BaseSys } from './Common';

export interface Asset {
  title: string;
  url: string;
}

export interface FullAsset extends Asset {
  sys: BaseSys;
}

export type SingleResponse = {
  asset: FullAsset;
};
