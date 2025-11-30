import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

const SuccessPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-[10%]">
      {isClient && (
        <div className="w-96">
          <LottieAnimation />
        </div>
      )}
      <h3 className="text-2xl font-bold m-0">Submission received</h3>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
};

const LottieAnimation = () => {
  const [Lottie, setLottie] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const loadLottie = async () => {
      const lottieModule = await import('react-lottie');
      const animationModule = await import('../assets/lotties/success.json');
      setLottie(() => lottieModule.default);
      setAnimationData(animationModule.default);
    };
    
    loadLottie();
  }, []);

  if (!Lottie || !animationData) return null;

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      fps: 15
    }
  };

  return <Lottie options={defaultOptions} height={100} width={100} />;
};

export default SuccessPage;
