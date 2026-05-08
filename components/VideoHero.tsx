"use client";

import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoHero({ src, poster }: { src?: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  if (!src) return null;

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
    <>
      <video
        ref={videoRef}
        className="hero-video"
        src={src}
        poster={poster}
        autoPlay
        muted={muted}
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <button
        className="sound-toggle"
        type="button"
        onClick={toggleSound}
        aria-label={muted ? "Turn video sound on" : "Turn video sound off"}
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </>
  );
}
