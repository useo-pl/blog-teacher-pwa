import React from 'react';
import useAuth from '../../hooks/firebase/useAuth';

const Nav: React.FC = () => {
  const [{ user }, { login, logout }] = useAuth();
  return (
    <nav>
      <ul>
        <li>{`Hello ${user?.user?.displayName ?? ''}`}</li>
        {user ? (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        ) : (
          <li>
            <button onClick={login}>Login with Google</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
