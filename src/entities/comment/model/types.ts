import { ICommentUser } from '@entities/user';

export interface IComment {
  id: string;
  userInfo: ICommentUser
  productId: string;
  text: string;
  rating: number;
  createdAt: Date;
}
