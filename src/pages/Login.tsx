import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import AuthLayout from '../components/layouts/AuthLayout';

const Login = () => {
  return (
    <AuthLayout 
      title="Welcome Back" 
      subtitle="Sign in to access your FanVerse account"
    >
      <SignIn 
        path="/login" 
        routing="path" 
        signUpUrl="/register"
        afterSignInUrl="/dashboard"
        appearance={{
          elements: {
            formButtonPrimary: 'bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25',
            card: 'bg-transparent shadow-none border-none',
            headerTitle: 'hidden',
            headerSubtitle: 'hidden',
            socialButtonsBlockButton: 'bg-dark border border-dark-border text-white hover:bg-dark-border transition-colors rounded-lg py-3',
            socialButtonsBlockButtonText: 'text-white font-medium',
            formFieldInput: 'bg-dark border border-dark-border text-white placeholder-gray-medium rounded-lg py-3 px-4 focus:border-primary focus:ring-1 focus:ring-primary transition-colors',
            formFieldLabel: 'text-gray-light font-medium mb-2',
            footerActionLink: 'text-primary hover:text-primary-dark font-medium transition-colors',
            identityPreviewText: 'text-white',
            formButtonReset: 'text-gray-light hover:text-white transition-colors',
            dividerLine: 'bg-dark-border',
            dividerText: 'text-gray-light',
            formFieldInputShowPasswordButton: 'text-gray-medium hover:text-white',
            alertText: 'text-red-400',
            formFieldAction: 'text-primary hover:text-primary-dark',
            footerActionText: 'text-gray-light',
          },
          layout: {
            socialButtonsPlacement: 'top'
          }
        }}
      />
    </AuthLayout>
  );
};

export default Login;