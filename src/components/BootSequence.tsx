
import { useState, useEffect } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [progress, setProgress] = useState(0);
  const [bootText, setBootText] = useState('');
  const [hidden, setHidden] = useState(false);

  const bootMessages = [
    "INITIALIZING SPECTRAL INTERFACE...",
    "QUANTUM ENTANGLEMENT ESTABLISHED...",
    "LOADING HAUNTOLOGY PROTOCOLS...",
    "CALIBRATING TEMPORAL DISTORTIONS...",
    "ACCESSING ARCHIVE OF FUTURES PAST...",
    "SYNTHESIZING GLITCH MEMORY FRAGMENTS...",
    "DEPLOYING BLOOM SYSTEM RUNTIME...",
    "ESTABLISHING CONNECTIONS TO THE BEYOND...",
    "SYSTEM READY: WELCOME TO HAUNTOLOGY BBS"
  ];

  useEffect(() => {
    console.log("Boot sequence started");
    let currentLine = 0;
    let currentChar = 0;
    let interval: ReturnType<typeof setInterval>;
    let completeTimeout: ReturnType<typeof setTimeout>;
    let fadeTimeout: ReturnType<typeof setTimeout>;
    
    // Type out the boot messages character by character
    const typeBootText = () => {
      interval = setInterval(() => {
        if (currentLine < bootMessages.length) {
          if (currentChar < bootMessages[currentLine].length) {
            setBootText(prev => prev + bootMessages[currentLine][currentChar]);
            currentChar++;
          } else {
            setBootText(prev => prev + '\n');
            currentLine++;
            currentChar = 0;
            
            // Update progress bar based on completed lines
            const newProgress = Math.min(100, Math.floor((currentLine / bootMessages.length) * 100));
            setProgress(newProgress);
            
            if (currentLine === bootMessages.length) {
              clearInterval(interval);
              console.log("Boot messages complete, preparing to finish boot sequence");
              
              // Complete boot sequence after a delay
              completeTimeout = setTimeout(() => {
                console.log("Setting boot sequence to hidden");
                setHidden(true);
                
                // Explicitly call onComplete after a short delay to ensure animation completes
                fadeTimeout = setTimeout(() => {
                  console.log("Calling onComplete callback");
                  onComplete();
                }, 1000);
              }, 1500);
            }
          }
        }
      }, 50); // typing speed
    };
    
    // Start the boot sequence
    typeBootText();
    
    // Direct fallback to ensure boot sequence completes
    const fallbackTimer = setTimeout(() => {
      console.log("Boot sequence internal fallback triggered");
      clearInterval(interval);
      setHidden(true);
      onComplete();
    }, 15000); // 15 seconds max for boot sequence
    
    // Clear all timers on component unmount
    return () => {
      console.log("Cleaning up boot sequence timers");
      clearInterval(interval);
      clearTimeout(completeTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(fallbackTimer);
    };
  }, [onComplete, bootMessages]);

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-terminal-bg flex flex-col justify-center items-center z-50 transition-opacity duration-1000 ${hidden ? 'opacity-0 pointer-events-none' : ''}`}>
      <pre className="text-terminal-primary font-terminal text-base whitespace-pre text-left max-w-[80%] mx-auto">
        {bootText}
      </pre>
      <div className="w-4/5 h-5 bg-terminal-header border border-terminal-primary mt-5 relative overflow-hidden">
        <div 
          className="h-full bg-terminal-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BootSequence;
