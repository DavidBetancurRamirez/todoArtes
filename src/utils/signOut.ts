import type { AuthContextProps } from 'react-oidc-context';

const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;
const logoutRedirectUri = import.meta.env.VITE_COGNITO_REDIRECT_URI;

export const signOut = async (auth: AuthContextProps) => {
  await auth.removeUser();

  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutRedirectUri)}`;
};
