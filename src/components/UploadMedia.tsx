import { useEffect, useState } from 'react';
import { loadCloudinary } from '../utils/loadCloudinary';

export default function UploadMedia({ onUpload }: { onUpload: (url: string) => void }) {
  const [mediaUrl, setMediaUrl] = useState('');

  useEffect(() => {
    loadCloudinary();
  }, []);

  const openUploadWidget = () => {
    // @ts-ignore
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'your_cloud_name',             // 👈 replace with your real Cloudinary cloud name
        uploadPreset: 'fanverse_unsigned',        // 👈 your unsigned preset name
        folder: 'fanverse_uploads',
        sources: ['local', 'camera'],
        multiple: false,
        resourceType: 'auto',
      },
      (error: any, result: any) => {
        if (!error && result.event === 'success') {
          const url = result.info.secure_url;
          setMediaUrl(url);
          onUpload(url); // send URL to parent
        }
      }
    );
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <button type="button" onClick={openUploadWidget} className="bg-purple-600 text-white px-4 py-2 rounded">
        Upload Image/Video
      </button>

      {mediaUrl && (
        <div className="mt-2">
          <p className="text-sm text-gray-500">Preview:</p>
          {mediaUrl.includes('.mp4') ? (
            <video src={mediaUrl} controls className="w-64 rounded" />
          ) : (
            <img src={mediaUrl} alt="preview" className="w-64 rounded" />
          )}
        </div>
      )}
    </div>
  );
} 