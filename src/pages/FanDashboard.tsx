import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';

type Post = {
  id: string;
  content: string;
  mediaUrl: string | null;
  createdAt: string;
  creator: {
    id:string;
    name: string | null;
    imageUrl: string | null;
  };
};

export default function FanDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const token = await getToken();
        if (!token) {
          throw new Error("Not authenticated");
        }
        const res = await fetch('/api/feed', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!res.ok) {
          throw new Error('Failed to load feed');
        }
        
        const data = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || 'Error loading feed.');
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [getToken]);

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-white">Your Feed</h1>

        {loading && <p className="text-center text-gray-400">Loading your personalized feed...</p>}
        {error && <p className="text-center text-red-500 bg-red-900/20 p-3 rounded-md">{error}</p>}

        {!loading && !error && posts.length === 0 && (
          <div className="text-center py-10 bg-gray-800 rounded-lg">
            <p className="text-gray-400">Your feed is empty.</p>
            <p className="text-gray-500 text-sm mt-1">Subscribe to creators to see their posts here!</p>
          </div>
        )}

        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg shadow-xl overflow-hidden animate-fade-in">
              <div className="p-5">
                <div className="flex items-center mb-4">
                  <img
                    src={post.creator.imageUrl || 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'}
                    alt={post.creator.name || 'Creator'}
                    className="w-11 h-11 rounded-full mr-4 border-2 border-purple-500"
                  />
                  <div>
                    <span className="font-semibold text-white block">{post.creator.name || 'A Creator'}</span>
                    <p className="text-xs text-gray-500">
                      {new Date(post.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>

                <p className="mb-4 text-gray-300 whitespace-pre-wrap">{post.content}</p>

                {post.mediaUrl && (
                  <div className="rounded-md overflow-hidden">
                    {post.mediaUrl.endsWith('.mp4') ? (
                      <video src={post.mediaUrl} controls className="w-full" />
                    ) : (
                      <img src={post.mediaUrl} alt="Post media" className="w-full" />
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}