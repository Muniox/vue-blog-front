export interface User {
  id: string;
  email: string;
  role: {
    id: number;
    roleType: ROLES;
  };
}

export const enum ROLES {
  'ADMIN' = 'admin',
  'USER' = 'user',
}
