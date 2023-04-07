import React, { useRef, useState } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  const handleVideoPause = () => {
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    videoRef.current.play();
    setIsVideoPlaying(true);
  };

  return (
    <div
      name="inicio"
      className="flex items-end justify-center w-full h-screen text-center"
    >
      <video
        ref={videoRef}
        autoPlay
        src="https://situla.bitbit.net/filebin/25304676e852aa5ecc5b21b6f4d6cb52d78afcfdf6cf61ea028cb0299be74a36/707f334cabdc410adddac567a42547bf285b0524503e3eccf8ec6f23e1e5afd8?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=HZXB1J7T0UN34UN512IW%2F20230407%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230407T172153Z&X-Amz-Expires=30&X-Amz-SignedHeaders=host&response-cache-control=max-age%3D30&response-content-disposition=filename%3D%22videoplayback__1_.webm%22&response-content-type=video%2Fwebm&X-Amz-Signature=d49a9baa7f0ec1e7e2bebdb1697f115780f929220d57cbacf236e6c5d4cfe314"
        loop
        type="video/mp4"
        playsInline
        muted
        className="h-full object-cover  w-full absolute "
      />
      <div
        className={` w-full p-8 flex flex-row items-center z-10 justify-center duration-500  gap-10 ${
          isMenuShown ? "opacity-20" : "opacity-100"
        }`}
      >
        {isVideoPlaying ? (
          <FaPauseCircle
            size={25}
            onClick={handleVideoPause}
            className="cursor-pointer hover:scale-105 duration-300  text-white"
          />
        ) : (
          <FaPlayCircle
            size={25}
            onClick={handleVideoPlay}
            className="cursor-pointer hover:scale-110 duration-300  text-white"
          />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
