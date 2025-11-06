'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Extend the Window interface to include the Wistia property
declare global {
  interface Window {
    _wq: any[];
  }
}

export function WistiaPlayer({ videoId }: { videoId: string }) {
  useEffect(() => {
    window._wq = window._wq || [];
    window._wq.push({
      id: '_all',
      onReady: (video: any) => {
        // You can interact with the video API here if needed
      },
    });
  }, []);

  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" async />
      <Script src={`https://fast.wistia.com/embed/${videoId}.js`} strategy="lazyOnload" async />
      <div
        className="wistia_embed wistia_async_zx3wmw2c10"
        style={{
          height: '100%',
          position: 'relative',
          width: '100%',
          borderRadius: '0.75rem', 
          overflow: 'hidden',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        }}
      >
        <div
          className="wistia_swatch"
          style={{
            height: '100%',
            left: 0,
            opacity: 0,
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            transition: 'opacity 200ms',
            width: '100%',
          }}
        >
          <img
            src={`https://fast.wistia.com/embed/medias/${videoId}/swatch`}
            style={{
              filter: 'blur(5px)',
              height: '100%',
              objectFit: 'cover',
              width: '100%',
            }}
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </>
  );
}
