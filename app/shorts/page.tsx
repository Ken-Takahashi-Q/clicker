"use client";

import {
  faBookmark,
  faComment,
  faDownload,
  faHeart,
  faLink,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export default function TikTokClone() {
  const videoUrl = "/video/capcut.mp4"; // process.env.NEXT_PUBLIC_VIDEO_URL;

  const [likes, setLikes] = useState<number>(2024);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [isHolding, setIsHolding] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleMouseDown = () => {
    setIsHolding(true);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = "anniversary.mp4";
    link.click();
  };

  const handleShareClick = () => {
    setShowOptions((prev) => !prev);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(videoUrl).then(() => {
      setShowOptions(false);
    });
  };

  return (
    <div className="relative flex items-center justify-center h-screen bg-black text-white">
      <div
        className="relative flex items-center justify-center w-screen h-full max-w-[calc(100vw/9*16)]"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <video
          src={videoUrl}
          ref={videoRef}
          className="sm:h-auto md:h-full object-cover"
          autoPlay
          loop
          playsInline
          onClick={handleVideoClick}
        />
      </div>

      <div
        className={`absolute bottom-10 left-4 text-left transition-opacity duration-300 ${
          isHolding ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="text-lg font-bold">call me the onion-eater🧅🥕</h2>
        <p className="text-sm opacity-80">#1stAnniversary #ForYou</p>
      </div>

      <div
        className={`absolute bottom-10 right-6 flex flex-col items-center gap-5 z-9999 transition-opacity duration-300 ${
          isHolding ? "opacity-0" : "opacity-100"
        }`}
      >
        <div>
          <button
            className={`text-4xl ${
              isLiked ? "text-pink-600" : "text-white"
            } rounded-full duration-300 transform ${
              isLiked ? "animate-pop" : ""
            }`}
            onClick={handleLike}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <div className="text-sm">{likes}</div>
        </div>

        <div>
          <button className="text-4xl text-white rounded-full">
            <FontAwesomeIcon icon={faComment} />
          </button>
          <div className="text-sm">317</div>
        </div>

        <div className="mb-1">
          <button
            className={`text-4xl ${
              isBooked ? "text-yellow-400" : "text-white"
            } rounded-full duration-300 transform ${
              isBooked ? "animate-pop" : ""
            }`}
            onClick={() => setIsBooked(!isBooked)}
          >
            <FontAwesomeIcon icon={faBookmark} />
          </button>
        </div>

        <button
          className="text-4xl text-white rounded-full"
          onClick={handleShareClick}
        >
          <FontAwesomeIcon icon={faShare} />
        </button>
        <div
          className={`absolute right-0 bottom-14 bg-white text-black p-1 rounded-lg shadow-md w-40 transition-opacity duration-200 ${
            showOptions
              ? "opacity-100 scale-100"
              : "opacity-0 scale-50 pointer-events-none"
          }`}
        >
          <button
            onClick={handleCopyLink}
            className="block w-full text-left text-sm py-2 px-3 hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faLink} className="mr-1" />
            Copy Link
          </button>
          <button
            onClick={handleDownload}
            className="block w-full text-left text-sm py-2 px-3 hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faDownload} className="mr-1" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
