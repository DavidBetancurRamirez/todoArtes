import { useAuth } from 'react-oidc-context';

const Home = () => {
  const auth = useAuth();

  // const signOut = () => {
  //   const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
  //   const logoutRedirectUri = import.meta.env.VITE_COGNITO_LOGOUT_REDIRECT_URI;
  //   const cognitoDomain = import.meta.env.VITE_COGNITO_AUTHORITY;

  //   // Borra sesión local
  //   auth.removeUser();

  //   window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutRedirectUri)}`;
  // };

  if (auth.isAuthenticated) {
    console.log('auth.user', auth.user);
    return (
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>

        <button className="bg-red-500" onClick={() => auth.signoutRedirect()}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div>
      <button className="bg-green-500" onClick={() => auth.signinRedirect()}>
        Sign in
      </button>
    </div>
  );
};

export default Home;
