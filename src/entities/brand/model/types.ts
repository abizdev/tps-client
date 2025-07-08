export interface ITopBrands {
  id: number;
  title: string;
  category: string;
  linkUrl: string;
  logoUrl: string;
  products: {
    id: number;
    imgUrl: string;
    price: number | string;
    linkUrl: string;
  }[];
}

export interface IBrand {
  id: string;
  name: string;
  linkUrl: string;
  imgUrl?: string;
}
