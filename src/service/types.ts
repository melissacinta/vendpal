export interface UserProfile {
  name: string;
  email: string;
  location: string;
  avatar: string;
  role: string;
  stats: {
    departments: number;
    units: number;
  };
  socialLinks: {
    platform: string;
    url: string;
  }[];
}

export interface Department {
  id: number;
  name: string;
  stats: {
    departments: number;
    units: number;
  };
  message: string;
  backgroundColor: string;
  messageBackground: string;
  avatar: string;
}

export interface ApiResponse<T> {
  status: number;
  data: T;
}
