import React from 'react';

export const Footer = () => {
  const LogoIcon = () => (
  //   <svg className="h-8 w-8 text-[#22c55e]" fill="currentColor" viewBox="0 0 48 48">
  //   <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" />
  // </svg>
  <img src="public/favicon.ico" alt="Logo" />
  );

  const InstagramIcon = () => (
    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24">
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
    </svg>
  );

  const TwitterIcon = () => (
    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24">
      <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z" />
    </svg>
  );

  const FacebookIcon = () => (
    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24">
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z" />
    </svg>
  );

  return (
    <footer className="bg-zinc-900 px-4 md:px-20 lg:px-40 py-16 text-white">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex flex-col gap-4 items-start max-w-sm">
          <div className="flex items-center gap-3 text-white">
            <LogoIcon />
            <h2 className="text-xl font-bold leading-tight tracking-[-0.015em]">EcoBites</h2>
          </div>
          <p className="text-zinc-400">
            Taste Sustainability. Join us in reducing waste with our delicious, edible tableware.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Quick Links</h3>
            <a className="text-zinc-400 hover:text-white" href="#">Products</a>
            <a className="text-zinc-400 hover:text-white" href="#">About Us</a>
            <a className="text-zinc-400 hover:text-white" href="#">Sustainability</a>
            <a className="text-zinc-400 hover:text-white" href="#">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Legal</h3>
            <a className="text-zinc-400 hover:text-white" href="#">Terms of Service</a>
            <a className="text-zinc-400 hover:text-white" href="#">Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-white"><InstagramIcon /></a>
              <a href="#" className="text-zinc-400 hover:text-white"><TwitterIcon /></a>
              <a href="#" className="text-zinc-400 hover:text-white"><FacebookIcon /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500">
        <p>© 2025 EcoBites. All rights reserved.</p>
      </div>
    </footer>
  );
};
