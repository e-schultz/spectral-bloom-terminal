
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
    console.log("Boot sequence completion handler called");
    setBooting(false);
  };

  // Ensure the boot sequence doesn't get stuck
  useEffect(() => {
    console.log("Setting up fallback timer for boot sequence");
    
    // Aggressive fallback timer to ensure boot sequence doesn't get stuck
    const fallbackTimer = setTimeout(() => {
      if (booting) {
        console.log("Boot sequence parent fallback triggered - forcing completion");
        setBooting(false);
      }
    }, 10000); // 10 seconds max for boot sequence
    
    return () => {
      console.log("Cleaning up fallback timer");
      clearTimeout(fallbackTimer);
    };
  }, [booting]);

  return (
    <div className="min-h-screen scanline-effect crt-flicker">
      {booting ? <BootSequence onComplete={handleBootComplete} /> : null}
      
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
