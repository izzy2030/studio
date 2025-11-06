"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

type VideoFacadeProps = {
  videoId: string;
};

export function VideoFacade({ videoId }: VideoFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const thumbnailResolutionIndex = useRef<number | 'oembed' | null>(null);

  const fallbackImage = PlaceHolderImages.find((img) => img.id === 'video_facade');

  useEffect(() => {
    if (!videoId) {
      console.warn('Queens Auto Services: YouTube video ID is missing.');
      return;
    }

    const thumbnailResolutions = ['maxresdefault', 'sddefault', 'hqdefault', 'mqdefault', 'default'];

    const loadThumbnailFromList = (index = 0) => {
      if (index >= thumbnailResolutions.length) {
        if(fallbackImage) setThumbnailUrl(fallbackImage.imageUrl);
        return;
      }
      thumbnailResolutionIndex.current = index;
      setThumbnailUrl(`https://i.ytimg.com/vi/${videoId}/${thumbnailResolutions[index]}.jpg`);
    };

    const requestOEmbedThumbnail = () => {
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      const oEmbedProxyUrl = `/api/oembed?url=${encodeURIComponent(videoUrl)}`;
      
      fetch(oEmbedProxyUrl)
        .then(response => (response.ok ? response.json() : Promise.reject()))
        .then(data => {
          if (data && data.thumbnail_url) {
            thumbnailResolutionIndex.current = 'oembed';
            setThumbnailUrl(data.thumbnail_url);
          } else {
            loadThumbnailFromList();
          }
        })
        .catch(() => loadThumbnailFromList());
    };

    requestOEmbedThumbnail();
  }, [videoId, fallbackImage]);

  const handleThumbnailError = () => {
    const currentIndex = thumbnailResolutionIndex.current;
    if (currentIndex === 'oembed') {
      thumbnailResolutionIndex.current = null;
      loadThumbnailFromList(0); // Start from the beginning of the list
    } else if (typeof currentIndex === 'number') {
      const nextIndex = currentIndex + 1;
      loadThumbnailFromList(nextIndex);
    }
  };

  const handleClick = () => {
    if (videoId) {
      setIsPlaying(true);
    }
  };

  if (isPlaying) {
    return (
      <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          title="YouTube video player"
        ></iframe>
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className="relative w-full max-w-xl mx-auto rounded-xl overflow-hidden shadow-xl cursor-pointer group aspect-video bg-secondary"
    >
      {thumbnailUrl ? (
        <Image
          src={thumbnailUrl}
          alt="Queens Auto Service Video Thumbnail"
          fill
          className="object-cover transition-opacity duration-300"
          onError={handleThumbnailError}
          unoptimized // Since we are loading external URLs directly from YouTube
        />
      ) : (
        fallbackImage && <Image src={fallbackImage.imageUrl} alt={fallbackImage.description} fill className="object-cover" data-ai-hint={fallbackImage.imageHint} />
      )}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
        <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center text-foreground transition-transform group-hover:scale-110">
          <Play className="w-8 h-8 fill-current" />
        </div>
      </div>
    </div>
  );
}
