"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

type ProjectVideoProps = {
  src: string;
  poster: string;
  title: string;
};

export default function ProjectVideo({ src, poster, title }: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !muted;
    video.muted = nextMuted;
    setMuted(nextMuted);

    if (!nextMuted) {
      try {
        await video.play();
      } catch {
        video.muted = true;
        setMuted(true);
      }
    }
  };

  return (
    <div className="project-video-wrap">
      <video
        ref={videoRef}
        className="project-video"
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        aria-label={title}
      />
      <button
        className="video-sound-toggle"
        type="button"
        onClick={toggleSound}
        aria-label={muted ? `Turn sound on for ${title}` : `Turn sound off for ${title}`}
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>
    </div>
  );
}
