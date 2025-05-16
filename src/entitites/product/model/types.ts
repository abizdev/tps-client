export interface IProductSlider {
  id: number;
  imgUrl: string;
}

export interface ISearchProduct extends IProductSlider {
  name: string;
  linkUrl: string;
}

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
  image?: string;
}
