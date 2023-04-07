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
        src="https://rr4---sn-cvb7lnls.googlevideo.com/videoplayback?expire=1680846524&ei=XFovZLULjorH8A_46bvgCg&ip=212.102.39.90&id=o-AA2m8IKFgqP3SnY2w5QvQPfowy1hS3zf2CEQCUorhkmq&itag=248&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278&source=youtube&requiressl=yes&spc=99c5CUx6Ym62JMWDSjhaDE2jeqYfhC6ZT580GbXgaA&vprv=1&mime=video%2Fwebm&ns=f5W_sT4UnnV_PzBoCO5IjiMM&gir=yes&clen=11195157&dur=60.000&lmt=1679451057043026&keepalive=yes&fexp=24007246&c=WEB&txp=443E434&n=3tSXgIucBBrmMg&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgF4OkovinkJMtKF0K9BE5Y6wIGZrxv2pOAQLVR7QQoFoCIQCoVC5A97M8YanGFuWxBU8Gvd84gR_EfKKsUY3VQi-LQg%3D%3D&rm=sn-n02xgoxufvg3-2gbz7z,sn-2gbl776&req_id=1ae48cd72dfca3ee&cmsv=e&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=oH&mip=2800:e2:d80:29d2:816c:900b:ce99:12a7&mm=29&mn=sn-cvb7lnls&ms=rdu&mt=1680824481&mv=m&mvi=4&pl=53&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhALsuO0yrwJbzrkSBJkYHOg9WzuCG0-CBCI_E6c5jRB8CAiEAuSJidgVEmcyA7Pic0sBsRHqP8518TUimbp8yj_p4mJ0%3D"
        loop
        type="video/mp4"
        playsInline
        muted
        className="h-full object-cover  w-full absolute "
      ></video>
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
