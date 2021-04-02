import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/apiClient';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: Record<string, unknown>;
}

interface AuthContextData {
  user: Record<string, unknown>;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@acaiapp:token');
    const user = localStorage.getItem('@acaiapp:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState; // forçar a tipagem para inicializar vazio
  });

  // método de login
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    localStorage.setItem('@acaiapp:token', token);
    localStorage.setItem('@acaiapp:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  // método de logout
  const signOut = useCallback(() => {
    localStorage.removeItem('@acaiapp:token');
    localStorage.removeItem('@acaiapp:user');

    setData({} as AuthState); // zerar o localstorage
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser utilizado com o AuthProvider');
  }
  return context;
}
