
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import AsciiArt from '@/components/AsciiArt';
import BulletinBoard from '@/components/BulletinBoard';
import Terminal from '@/components/Terminal';
import BootSequence from '@/components/BootSequence';

const Index = () => {
  const [booting, setBooting] = useState(true);

  const handleBootComplete = () => {
    setBooting(false);
  };

  return (
    <div className="min-h-screen scanline-effect crt-flicker">
      {booting && <BootSequence onComplete={handleBootComplete} />}
      
      <div className="max-w-screen-xl mx-auto p-5 relative z-10">
        <Header />
        <AsciiArt />
        <BulletinBoard />
        <Terminal />
      </div>
    </div>
  );
};

export default Index;
