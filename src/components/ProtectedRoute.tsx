import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const location = useLocation();

  if (!isLoaded) {
    // Show a loading indicator while Clerk is checking authentication
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isSignedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them along to that page after they
    // login, which is a nicer user experience than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user?.primaryEmailAddress?.verification || user.primaryEmailAddress.verification.status !== 'verified') {
    return <Navigate to="/verify-email" replace />;
  }

  const userRole = user?.publicMetadata?.role as string;

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Redirect to a generic dashboard or an unauthorized page if role doesn't match
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute; 