
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import AsciiArt from '@/components/AsciiArt';
import BulletinBoard from '@/components/BulletinBoard';
import Terminal from '@/components/Terminal';
import BootSequence from '@/components/BootSequence';

const Index = () => {
  // Define a concrete state for the application loading state
  const [appState, setAppState] = useState<'booting' | 'ready'>('booting');

  // Function to handle boot completion - only called once
  const handleBootComplete = () => {
    console.log("Boot sequence completion handler called");
    setAppState('ready');
  };

  // Set a strong fallback to ensure the app doesn't get stuck in boot
  useEffect(() => {
    console.log("Setting up parent fallback timer");
    
    // Failsafe timer as a last resort
    const fallbackTimer = setTimeout(() => {
      if (appState === 'booting') {
        console.log("CRITICAL: Parent component fallback triggered - forcing ready state");
        setAppState('ready');
      }
    }, 7000); // 7 seconds absolute maximum
    
    return () => {
      console.log("Cleaning up parent fallback timer");
      clearTimeout(fallbackTimer);
    };
  }, [appState]);

  return (
    <div className="min-h-screen scanline-effect crt-flicker">
      {/* Only render boot sequence when in booting state */}
      {appState === 'booting' && <BootSequence onComplete={handleBootComplete} />}
      
      {/* Always render the main content, it will be hidden by the boot sequence overlay */}
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
