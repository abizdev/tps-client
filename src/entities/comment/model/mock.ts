import { IComment } from './types';

export const comment: IComment = {
  id: '1',
  productId: 'product1',
  text: 'This is a great product! Highly recommend it to everyone.',
  rating: 5,
  createdAt: new Date(),
  userInfo: {
    id: 'user1',
    fullName: 'John Doe',
  },
}

export const commentsList: IComment[] = [
  comment,
  {
    id: '2',
    productId: 'product1',
    text: 'This is a great product! Highly recommend it to everyone.',
    rating: 5,
    createdAt: new Date(),
    userInfo: {
      id: 'user2',
      fullName: 'John Doe',
    },
  }
]
