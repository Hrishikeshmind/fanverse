import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {  AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import CreatorDashboard from './pages/CreatorDashboard';
import FanDashboard from './pages/FanDashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardRedirect from './pages/DashboardRedirect';
import VerifyEmail from './pages/VerifyEmail';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white font-inter">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route 
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardRedirect />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/creator-dashboard" 
              element={
                <ProtectedRoute allowedRoles={['creator']}>
                  <CreatorDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/fan-dashboard" 
              element={
                <ProtectedRoute allowedRoles={['fan']}>
                  <FanDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin-dashboard"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;