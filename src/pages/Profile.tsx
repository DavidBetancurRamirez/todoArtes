import { useAuth } from 'react-oidc-context';
import { signOut } from '../utils/signOut';

const Profile = () => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">No estás autenticado</p>
      </div>
    );
  }

  const user = auth.user?.profile;

  return (
    <div className="h-full py-12 mx-auto">
      <div className="min-w-md max-w-lg mx-auto bg-gray-50 rounded-lg shadow-md p-8">
        <div className="text-center space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre
            </label>
            <p className="text-lg text-gray-900">
              {user?.name || 'No disponible'}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <p className="text-lg text-gray-900">
              {user?.email || 'No disponible'}
            </p>
          </div>

          <button
            onClick={() => signOut(auth)}
            className="mt-6 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition cursor-pointer"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
