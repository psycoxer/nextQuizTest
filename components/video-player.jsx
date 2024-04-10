'use client'
import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import 'plyr/dist/plyr.css';

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  // const [importedComponent, setImportedComponent] = useState(null)

  useEffect(() => {
    const video = videoRef.current;
    const playerConfig = {
      title: 'Anime',
      volume: 1,
      keyboard: { focused: true, global: true },
      invertTime: false,
      storage: { enabled: false, key: 'plyr' }
      // debug: true,
    }

    const importComponent = async () => {
      const myModule = await import('plyr')
      const Plyr = myModule.default
      const player = new Plyr(video, playerConfig);

      
      // setImportedComponent(player)
    }

    importComponent()


    if (!video) return;

    video.controls = true;
    const defaultOptions = {};
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // This will run in safari, where HLS is supported natively
      video.src = src;
    } else if (Hls.isSupported()) {
      // This will run in all other modern browsers

      const hls = new Hls();
      hls.loadSource(src);

      // const player = new importedComponent(video, defaultOptions); 
      // console.log(importedComponent);
      // importedComponent ? importedComponent.setup(video) : null

      hls.attachMedia(video);
    } else {
      console.error(
        'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
      );
    }
  }, [src, videoRef]);

  const plyrstyl = {
    '--plyr-color-main': '#5500ff',
    '--plyr-video-controls-background': 'linear-gradient(rgba(0, 0, 0, 0), rgba(85, 0, 255, 0.60))',
  }

  return (
    <>
      <video data-displaymaxtap style={plyrstyl} ref={videoRef} />
      <style jsx>{`
        video {
          max-width: 50%%;
        }
      `}</style>
    </>
  );
}