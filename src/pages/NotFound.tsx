
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text flex items-center justify-center scanline-effect crt-flicker">
      <div className="border border-terminal-primary p-8 shadow-[0_0_15px] shadow-terminal-primary text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4 text-terminal-primary animation-glitch-skew">
          404 - SIGNAL LOST
        </h1>
        <div className="system-error border border-dashed border-terminal-error p-4 my-4 text-terminal-error bg-[rgba(204,0,0,0.1)]">
          <pre className="text-left mb-4">
{`ERROR CODE: SPECTRAL_VOID_EX01
TIMESTAMP: ${new Date().toISOString()}
LOCATION: ${location.pathname}
STATUS: TRANSMISSION FAILED

The spectral coordinates you attempted to access do not exist in this plane of the archive.`}
          </pre>
        </div>
        <p className="text-xl mb-6">The requested data fragment has been lost to the void or exists in a parallel configuration.</p>
        <a href="/" className="bg-terminal-bg text-terminal-primary border border-terminal-primary py-2 px-4 transition-all duration-300 hover:bg-terminal-primary hover:text-terminal-bg hover:shadow-[0_0_10px] hover:shadow-terminal-primary inline-block">
          RETURN TO MAIN TERMINAL
        </a>
      </div>
    </div>
  );
};

export default NotFound;
