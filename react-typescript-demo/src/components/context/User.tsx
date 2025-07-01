export const User = () => {
  const handleLogin = () => {};

  const handleLogout = () => {};
  return (
    <div>
      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <div> User name is</div>
      <div> User email is</div>
    </div>
  );
};
