export interface AuthCredentials {
  username: string;
  password: string;
}

export interface UserSession {
  id: string;
  username: string;
  role: 'ADMIN' | 'WAREHOUSE_STAFF';
  warehouseLocationId: string | null;
  isAuthenticated: boolean;
}
