import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, User, Menu, X, Shield, Sparkles } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const { user } = useUser();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const userType = user?.unsafeMetadata?.type as string;
  const isUserVerified = user?.unsafeMetadata?.isVerified as boolean;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Creators', path: '/creators' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Heart className="h-8 w-8 text-primary" fill="currentColor" />
              <Sparkles className="h-4 w-4 text-accent absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-bold text-white">FanVerse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-light hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              <div className="flex items-center space-x-4">
                {user && (
                  <Link
                    to={userType === 'creator' ? '/creator-dashboard' : '/fan-dashboard'}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-dark-lighter hover:bg-dark-border transition-colors"
                  >
                    <img
                      src={user.imageUrl}
                      alt={user.fullName || 'User'}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm">{user.fullName}</span>
                    {isUserVerified && <Shield className="h-4 w-4 text-primary" />}
                  </Link>
                )}
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="flex items-center space-x-3">
                <SignInButton mode="modal">
                  <button className="text-sm font-medium text-gray-light hover:text-white transition-colors">
                    Log In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg text-sm font-medium text-white transition-colors">
                    Join Now
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-lighter transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark-lighter border-t border-dark-border"
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-light hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-dark-border">
              <SignedIn>
                <div className="space-y-4">
                  {user && (
                    <Link
                      to={userType === 'creator' ? '/creator-dashboard' : '/fan-dashboard'}
                      className="flex items-center space-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <img
                        src={user.imageUrl}
                        alt={user.fullName || 'User'}
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{user.fullName}</span>
                      {isUserVerified && <Shield className="h-4 w-4 text-primary" />}
                    </Link>
                  )}
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8"
                      }
                    }}
                  />
                </div>
              </SignedIn>
              <SignedOut>
                <div className="space-y-4">
                  <SignInButton mode="modal">
                    <button 
                      className="block text-gray-light hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log In
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button 
                      className="block px-4 py-2 bg-primary hover:bg-primary-dark rounded-lg text-sm font-medium text-white transition-colors text-center w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Join Now
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;