export interface IProduct {
  id: number;
  title: string;
  name: string;
  price: number;
  discount?: number;
  linkUrl: string;
  rating?: number;
  count: number;
  isLiked: boolean;
  totalCount: number;
  image?: string;
}

export type ISearchProduct = Pick<IProduct, 'linkUrl' | 'image' | 'name'>
