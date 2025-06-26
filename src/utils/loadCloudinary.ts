export const loadCloudinary = () => {
  const script = document.createElement('script');
  script.src = 'https://widget.cloudinary.com/v2.0/global/all.js';
  script.async = true;
  document.body.appendChild(script);
}; 