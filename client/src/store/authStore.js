import { create } from 'zustand'

export const useAuthStore = create((set) => ({
  user: null,
  token: null,

  // Computado: está autenticado si hay token
  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    return !!token;
  },

}));
