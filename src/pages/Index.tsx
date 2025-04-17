
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import AsciiArt from '@/components/AsciiArt';
import BulletinBoard from '@/components/BulletinBoard';
import Terminal from '@/components/Terminal';
import BootSequence from '@/components/BootSequence';

const Index = () => {
  // Use state to track if the boot sequence is complete
  const [booting, setBooting] = useState(true);

  // Function to handle boot completion
  const handleBootComplete = () => {
    setBooting(false);
    console.log("Boot sequence completed");
  };

  // Ensure the boot sequence doesn't get stuck
  useEffect(() => {
    // Fallback timer to ensure boot sequence doesn't get stuck
    const fallbackTimer = setTimeout(() => {
      if (booting) {
        console.log("Boot sequence fallback triggered");
        setBooting(false);
      }
    }, 20000); // 20 seconds max for boot sequence
    
    return () => clearTimeout(fallbackTimer);
  }, [booting]);

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
