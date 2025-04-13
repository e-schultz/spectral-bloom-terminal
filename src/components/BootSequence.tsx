
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
    let currentLine = 0;
    let currentChar = 0;
    let interval: ReturnType<typeof setInterval>;
    
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
              
              // Complete boot sequence after a delay
              setTimeout(() => {
                setHidden(true);
                setTimeout(() => onComplete(), 1000);
              }, 1500);
            }
          }
        }
      }, 50); // typing speed
    };
    
    typeBootText();
    
    return () => clearInterval(interval);
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
