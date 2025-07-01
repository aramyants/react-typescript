import React, { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // const [user, setUser] = useState<AuthUser | null>(null);
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: 'Aram',
      email: 'aramyants@example.com',
    });
  };
  // const handleLogout = () => {
  //   setUser(null);
  // };
  return (
    <div>
      {/* <button onClick={user ? handleLogout : handleLogin}>
        {user ? 'Logout' : 'Login'}
      </button>
      <div> User name is {user?.name}</div>
      <div> User email is {user?.email}</div>
      */}
      <button onClick={handleLogin}>Login</button>
      <div> User name is {user.name}</div>
      <div> User email is {user.email}</div>
    </div>
  );
};
