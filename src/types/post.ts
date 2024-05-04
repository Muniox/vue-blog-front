export interface Post {
  id: string;
  category: string;
  createdAt: Date;
  description: string;
  img: string;
  title: string;
  updatedAt: Date;
  user: {
    role: {
      roleType: string;
    };
    username: string;
  };
}
