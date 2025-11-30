import React, { useState, useEffect, useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaPlay, FaPause, FaExpand } from "react-icons/fa";
import "./styles.css";

let cloudFrontDomain = "d14s2iums0fe7u.cloudfront.net";

interface VideoPlayerProps {
  bucketName: string;
  videoKey: string;
  region?: string;
  title?: string;
  autoPlay?: boolean;
  controls?: boolean;
  className?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  cloudFrontDomain?: string; // optional for CDN support
  poster?: string; // optional thumbnail before play
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  bucketName,
  videoKey,
  region = "us-east-1",
  title,
  autoPlay,
  controls = true,
  className = "",
  showCloseButton = false,
  onClose,
  poster,
}) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(
    autoPlay || false
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Use CloudFront if provided, else fallback to direct S3 URL
    const url = cloudFrontDomain
      ? `https://${cloudFrontDomain}/${videoKey}`
      : `https://${bucketName}.s3.amazonaws.com/${videoKey}`;
    setVideoUrl(url);
  }, [bucketName, videoKey, region, cloudFrontDomain]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleProgress = () => {
      console.log("Buffered ranges:", video.buffered);
    };

    video.addEventListener("progress", handleProgress);
    return () =>
      video.removeEventListener("progress", handleProgress);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className={`video-player-container ${className}`}>
      {showCloseButton && onClose && (
        <button className="close-button" onClick={onClose}>
          <MdOutlineClose size={24} />
        </button>
      )}

      {videoUrl ? (
        <div className="video-wrapper">
          <video
            ref={videoRef}
            src={videoUrl}
            title={title}
            autoPlay={autoPlay}
            muted={autoPlay}
            controls={controls}
            preload="metadata"
            poster={poster}
            className="video-element"
            loop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {!controls && (
            <div className="custom-controls">
              <button
                className="play-pause-button"
                onClick={togglePlay}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button
                className="fullscreen-button"
                onClick={handleFullscreen}
              >
                <FaExpand />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading video...</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
