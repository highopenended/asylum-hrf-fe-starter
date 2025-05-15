/**
 * TODO: Ticket 3:
 * Implement authentication and logging functionality using Auth0
 */
import { useAuth0 } from '@auth0/auth0-react';

export const LoggingButtons = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <button
          onClick={() => loginWithRedirect()}
          className="nav-btn"
        >
          Log In
        </button>
      ) : (
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="nav-btn"
        >
          Log Out
        </button>
      )}
    </div>
  );
};