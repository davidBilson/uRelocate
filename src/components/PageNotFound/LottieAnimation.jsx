import { useLayoutEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './error404.json';

function LottieAnimation() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <div className='lottie-error' ref={container}></div>
  );
}

export default LottieAnimation;
