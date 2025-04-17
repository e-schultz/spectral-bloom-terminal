
import { useEffect, useState, useRef } from 'react';

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [isComplete, setIsComplete] = useState(false);
  const hasCalledComplete = useRef(false);

  useEffect(() => {
    console.log("Boot sequence mounted");
    
    // Set a simple timeout to complete the boot sequence after animation
    const timer = setTimeout(() => {
      console.log("Boot sequence animation complete");
      setIsComplete(true);
      
      // Add a short delay before calling onComplete to allow for fade-out animation
      const completeTimer = setTimeout(() => {
        if (!hasCalledComplete.current) {
          console.log("Calling onComplete callback");
          hasCalledComplete.current = true;
          onComplete();
        }
      }, 1000);
      
      return () => clearTimeout(completeTimer);
    }, 5000); // Show boot sequence for 5 seconds total
    
    // Clear timers if unmounted early
    return () => {
      console.log("Boot sequence unmounted early");
      clearTimeout(timer);
    };
  }, [onComplete]);
  
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-terminal-bg flex flex-col justify-center items-center z-50 transition-opacity duration-1000 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="text-terminal-primary font-terminal text-base max-w-[80%] mx-auto">
        <BootText />
      </div>
      <div className="w-4/5 h-5 bg-terminal-header border border-terminal-primary mt-5 relative overflow-hidden">
        <div 
          className="h-full bg-terminal-primary transition-all duration-500 ease-out"
          style={{ width: `100%`, animationName: 'progress', animationDuration: '5s', animationTimingFunction: 'linear' }}
        ></div>
      </div>
    </div>
  );
};

// Separate component for boot text with its own state
const BootText = () => {
  const [text, setText] = useState('');
  
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
    let isMounted = true;
    const fullText = bootMessages.join('\n');
    const displayText = [];
    
    for (let i = 0; i < fullText.length; i++) {
      const char = fullText[i];
      setTimeout(() => {
        if (isMounted) {
          setText(prev => prev + char);
        }
      }, i * 40); // Typing speed
    }
    
    return () => {
      isMounted = false;
    };
  }, []);
  
  return <pre className="whitespace-pre-wrap">{text}</pre>;
};

export default BootSequence;
