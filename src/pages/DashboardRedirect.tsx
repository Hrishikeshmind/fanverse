import React, { useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const DashboardRedirect = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded) {
      if (user) {
        const role = user.publicMetadata.role as string;
        if (role === 'creator') {
          navigate('/creator-dashboard');
        } else {
          navigate('/fan-dashboard');
        }
      } else {
        // Should not happen if this route is protected
        navigate('/login');
      }
    }
  }, [isLoaded, user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      Redirecting...
    </div>
  );
};

export default DashboardRedirect; 