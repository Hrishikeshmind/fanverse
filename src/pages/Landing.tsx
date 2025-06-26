import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Shield, CreditCard, Users, MessageCircle, Star, TrendingUp, Heart, Sparkles, Crown, Lock } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react';

const Landing = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Profiles',
      description: 'KYC verified creators for authentic content'
    },
    {
      icon: CreditCard,
      title: 'Secure Payments',
      description: 'Encrypted transactions with Stripe integration'
    },
    {
      icon: MessageCircle,
      title: 'Direct Messaging',
      description: 'Private chat with your favorite creators'
    },
    {
      icon: TrendingUp,
      title: 'Analytics Dashboard',
      description: 'Track earnings and subscriber growth'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Creators' },
    { number: '100K+', label: 'Satisfied Fans' },
    { number: '$2M+', label: 'Creator Earnings' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(45,140,255,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <span className="text-primary font-medium">Premium Creator Platform</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-white">Empowering</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Creators.
                  </span>
                  <br />
                  <span className="text-white">Connecting</span>
                  <br />
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Fans.
                  </span>
                </h1>
                <p className="text-xl text-gray-light leading-relaxed max-w-lg">
                  Join the exclusive community where creators monetize their content and fans get unprecedented access to their favorite personalities.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <SignedOut>
                  <SignUpButton mode="modal">
                    <button className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-center">
                      <span className="flex items-center justify-center space-x-2">
                        <Crown className="h-5 w-5" />
                        <span>Join as Creator</span>
                      </span>
                    </button>
                  </SignUpButton>
                  <SignUpButton mode="modal">
                    <button className="group px-8 py-4 bg-dark-lighter border border-dark-border rounded-xl font-semibold text-white hover:bg-dark-border transition-all duration-300 text-center">
                      <span className="flex items-center justify-center space-x-2">
                        <Heart className="h-5 w-5" />
                        <span>Join as Fan</span>
                      </span>
                    </button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <Link
                    to="/creator-dashboard"
                    className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-center"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Crown className="h-5 w-5" />
                      <span>Creator Dashboard</span>
                    </span>
                  </Link>
                  <Link
                    to="/fan-dashboard"
                    className="group px-8 py-4 bg-dark-lighter border border-dark-border rounded-xl font-semibold text-white hover:bg-dark-border transition-all duration-300 text-center"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Heart className="h-5 w-5" />
                      <span>Fan Dashboard</span>
                    </span>
                  </Link>
                </SignedIn>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-success" />
                  <span className="text-sm text-gray-light">Verified Profiles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-success" />
                  <span className="text-sm text-gray-light">Secure Payments</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Creator Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-dark-lighter to-dark-border rounded-3xl p-8 border border-dark-border backdrop-blur-sm">
                {/* Creator Profile Card */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Creator"
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                      <div className="absolute -top-1 -right-1 bg-primary rounded-full p-1">
                        <Shield className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Sarah Chen</h3>
                      <p className="text-gray-light">@sarahfitness</p>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-warning" fill="currentColor" />
                        ))}
                        <span className="text-sm text-gray-light ml-2">4.9 (2.1k reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-light">Monthly Subscription</span>
                      <span className="text-2xl font-bold text-primary">$29.99</span>
                    </div>
                    <SignedOut>
                      <SignUpButton mode="modal">
                        <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                          Subscribe Now
                        </button>
                      </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                      <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300">
                        Subscribe Now
                      </button>
                    </SignedIn>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-light">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>1.2k subscribers</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>24/7 chat</span>
                      </div>
                    </div>
                  </div>

                  {/* Chat Preview */}
                  <div className="bg-dark rounded-2xl p-4 space-y-3">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Recent Message</span>
                    </div>
                    <div className="bg-primary/10 rounded-lg p-3">
                      <p className="text-sm text-gray-light">
                        "Thanks for the amazing workout tips! Can't wait for tomorrow's session 💪"
                      </p>
                      <span className="text-xs text-gray-medium mt-2 block">2 minutes ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-primary">{stat.number}</div>
                <div className="text-gray-light">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Why Choose <span className="text-primary">FanVerse</span>?
            </h2>
            <p className="text-xl text-gray-light max-w-3xl mx-auto">
              Experience the most advanced creator platform with premium features designed for success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-dark-lighter rounded-2xl border border-dark-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-light">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-light">
              Join thousands of creators and fans who trust FanVerse for their exclusive content experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignedOut>
                <SignUpButton mode="modal">
                  <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                    Start Creating Today
                  </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="px-8 py-4 bg-dark-lighter border border-dark-border rounded-xl font-semibold text-white hover:bg-dark-border transition-all duration-300">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link
                  to="/creator-dashboard"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  Go to Dashboard
                </Link>
              </SignedIn>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-lighter border-t border-dark-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" fill="currentColor" />
                <span className="text-xl font-bold text-white">FanVerse</span>
              </div>
              <p className="text-gray-light">
                Empowering creators and connecting fans through premium content experiences.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Platform</h4>
              <div className="space-y-2">
                <Link to="/creators" className="block text-gray-light hover:text-white transition-colors">Browse Creators</Link>
                <Link to="/pricing" className="block text-gray-light hover:text-white transition-colors">Pricing</Link>
                <Link to="/features" className="block text-gray-light hover:text-white transition-colors">Features</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Support</h4>
              <div className="space-y-2">
                <Link to="/help" className="block text-gray-light hover:text-white transition-colors">Help Center</Link>
                <Link to="/contact" className="block text-gray-light hover:text-white transition-colors">Contact Us</Link>
                <Link to="/safety" className="block text-gray-light hover:text-white transition-colors">Safety Center</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-white">Legal</h4>
              <div className="space-y-2">
                <Link to="/privacy" className="block text-gray-light hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="block text-gray-light hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/community" className="block text-gray-light hover:text-white transition-colors">Community Guidelines</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-dark-border mt-8 pt-8 text-center text-gray-light">
            <p>&copy; {new Date().getFullYear()} FanVerse. All rights reserved. Built with ❤️ for creators.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;