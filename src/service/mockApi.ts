// src/services/mockApi.js
import avatar1 from '../assets/21.png';
import avatar2 from '../assets/24.png';
import avatar from '../assets/22.png';
import { ApiResponse, Department, UserProfile } from './types';

const mockUserProfile: UserProfile = {
  name: 'Ventura Brody',
  email: 'venturaBrody@co.ng',
  location: 'Lagos, Nigeria',
  avatar: avatar,
  role: 'Basic User',
  stats: {
    departments: 0,
    units: 0,
  },
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: '#',
    },
  ],
};

const mockDepartments: Department[] = [
  {
    id: 1,
    name: 'Design Team',
    stats: {
      departments: 1,
      units: 1,
    },
    message:
      'But now you can use Material\'s dynamic color feature to automatically generate accessible colors assigned to each "number."',
    backgroundColor: '#E6F2FF',
    messageBackground: '#7DC9FF',
    avatar: avatar1,
  },
  {
    id: 2,
    name: 'Design Team',
    stats: {
      departments: 1,
      units: 1,
    },
    message:
      'But now you can use Material\'s dynamic color feature to automatically generate accessible colors assigned to each "number."',
    backgroundColor: '#FFF3B5',
    messageBackground: '#FFE756',
    avatar: avatar2,
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const api = {
  async getUserProfile(): Promise<ApiResponse<UserProfile>> {
    try {
      await delay(800);
      return {
        status: 200,
        data: mockUserProfile,
      };
    } catch (error) {
      throw new Error('Failed to fetch user profile');
    }
  },

  async getDepartments(): Promise<ApiResponse<Department[]>> {
    try {
      await delay(1000);
      return {
        status: 200,
        data: mockDepartments,
      };
    } catch (error) {
      throw new Error('Failed to fetch departments');
    }
  },
};
