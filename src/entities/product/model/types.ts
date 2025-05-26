export interface IProductCategory {
  id: number;
  name: string;
}

export interface IProductWeight { value: number, enabled: boolean }

export interface IProduct {
  id: number;
  title: string;
  text: string;
  name: string;
  price: number;
  discount?: number;
  linkUrl: string;
  rating?: number;
  count: number;
  isLiked: boolean;
  slug: string;
  tags: string[];
  totalCount: number;
  image?: string;
  manufacturer: string;
  weights: IProductWeight[];
  year: number;
  manufactured_country: string;
  targeted_audience: string;
  category: IProductCategory[];
}

export type IProductInfoAbout =
  Pick<IProduct, 'manufacturer' | 'weights' | 'year' | 'manufactured_country' | 'targeted_audience' | 'text'>;

export type IProductInfoMain =
  Pick<IProduct,
    'name' | 'image' | 'discount' | 'price' | 'tags' | 'isLiked' | 'count' | 'totalCount' | 'rating' | 'weights' |
    'category' | 'id'
  >

export type ISearchProduct = Pick<IProduct, 'linkUrl' | 'image' | 'name'>
