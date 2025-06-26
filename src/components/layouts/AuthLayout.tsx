import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-dark via-dark-lighter to-dark flex items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(45,140,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(255,107,107,0.05),transparent_50%)]" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-dark-lighter/80 backdrop-blur-sm rounded-3xl p-8 border border-dark-border shadow-2xl">
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-4">
                <div className="flex items-center justify-center space-x-2">
                    <div className="relative">
                        <Heart className="h-8 w-8 text-primary" fill="currentColor" />
                        <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1" />
                    </div>
                    <span className="text-2xl font-bold text-white">FanVerse</span>
                </div>
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">{title}</h1>
            <p className="text-gray-light">{subtitle}</p>
          </div>
          
          {children}

        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout; 