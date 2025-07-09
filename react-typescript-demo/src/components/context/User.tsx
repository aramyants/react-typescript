import { useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
      userContext.setUser({
        name: 'Aram',
        email: 'aram@example.com',
      });
  };

  const handleLogout = () => {
      userContext.setUser(null);
  };

  const isLoggedIn = userContext?.user !== null;

  return (
    <div>
      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <div> User name is {userContext.user?.name}</div>
      <div> User email is {userContext.user?.email}</div>
    </div>
  );
};
