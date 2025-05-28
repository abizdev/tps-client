export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  isAdmin?: boolean;
  isActive?: boolean;
}

export type ICommentUser = Pick<IUser, 'id' | 'fullName' | 'avatarUrl'>;
