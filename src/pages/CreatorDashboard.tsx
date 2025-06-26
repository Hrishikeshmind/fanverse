import { useEffect, useState } from 'react';
import UploadMedia from '../components/UploadMedia';
import { useAuth } from '@clerk/clerk-react';

const CreatorDashboard = () => {
  const [content, setContent] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [analytics, setAnalytics] = useState({
    postCount: 0,
    followerCount: 0,
    income: 0,
  });
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const token = await getToken();
        const res = await fetch('/api/analytics', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if(res.ok) {
          const data = await res.json();
          setAnalytics(data);
        }
      } catch (err) {
        console.error('Failed to load analytics');
      }
    };
  
    fetchAnalytics();
  }, [getToken]);


  const handlePost = async () => {
    try {
      const token = await getToken();
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ content, mediaUrl }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log('Post created:', data);
        // Reset form
        setContent('');
        setMediaUrl('');
        // You might want to clear the preview in UploadMedia as well
      } else {
        const errorData = await res.json();
        console.error('Failed to create post:', errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Creator Dashboard</h1>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg text-center">
            <p className="text-3xl font-bold text-purple-400">{analytics.followerCount}</p>
            <p className="text-sm text-gray-400 mt-1">Followers</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow-lg text-center">
            <p className="text-3xl font-bold text-green-400">{analytics.postCount}</p>
            <p className="text-sm text-gray-400 mt-1">Posts</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow-lg text-center">
            <p className="text-3xl font-bold text-yellow-400">₹{analytics.income}</p>
            <p className="text-sm text-gray-400 mt-1">Estimated Income</p>
          </div>
        </div>
        
        {/* Post Creation Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-white">Create a New Post</h2>
          <textarea
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
          />

          <div className="mt-4">
            <UploadMedia onUpload={(url) => setMediaUrl(url)} />
          </div>

          <button 
            onClick={handlePost} 
            className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
            disabled={!content}
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatorDashboard;