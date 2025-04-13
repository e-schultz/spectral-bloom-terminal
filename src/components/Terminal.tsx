
import React, { useState, useRef, useEffect } from 'react';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('> Terminal session initialized. Type HELP for available commands.\n> ');
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom of terminal output
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      processCommand();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    processCommand();
  };

  const processCommand = () => {
    const userInput = input.trim().toUpperCase();
    let response = '';

    switch (userInput) {
      case 'HELP':
        response = `
Available commands:
  HELP - Display this help message
  STATUS - Display system status
  ABOUT - Information about Hauntology BBS
  USERS - List active users
  POST - Create a new thread
  SEARCH - Search the spectral archive
  GLITCH - Invoke a deliberate system glitch
  CLEAR - Clear terminal output
`;
        break;
      case 'STATUS':
        response = `
System Status:
  Uptime: 47 days, 13 hours, 22 minutes
  Active Connections: 17
  Spectral Density: HIGH
  Memory Fragments: 2,345
  Unprocessed Glitches: 53
  Temporal Stability: 72%
  
  WARNING: System experiencing temporal fluctuations. Some messages may arrive out of sequence.
`;
        break;
      case 'ABOUT':
        response = `
HAUNTOLOGY BBS // SPECTRAL TRANSMISSION

A digital compost heap for nurturing spectral data—memories, futures-past, and productive failures.

Established 2023 as a node in the broader Hauntological Network, this BBS serves as both archive and incubator for digital hauntings, temporal anomalies, and queer epistemologies.

Our protocols embrace glitch, decay, and emergence as essential components of knowledge production.

"What appears to be coming from the future is merely the delayed realization of a possibility from the past." —Derrida
`;
        break;
      case 'USERS':
        response = `
Currently Active Users:
  BLOOMKEEPER-ENTITY (ADMIN) - /compost/epistemology/
  archivist_97 - /archive/digital_ruins/
  glitch_compiler - /code/productive_failure/
  temporal_witness - /memory/futures_past/
  ghost_in_the_shell - /system/anomalies/
  
  +12 others lurking in background processes
`;
        break;
      case 'GLITCH':
        response = `
I̶n̷v̷o̵k̵i̴n̶g̶ ̵d̵e̸l̵i̶b̴e̸r̸a̸t̷e̶ ̴s̶y̸s̴t̷e̵m̸ ̶g̷l̶i̸t̵c̴h̷.̵.̸.̴

T̸̗̿ë̵̤́m̵̹̅p̵̮̚ó̸͜r̸̻̚a̸͈̿l̵̦͒ ̷̛͙a̶̘̎n̴͕̈́o̶̞̍m̴̬̍a̶̭͊l̷̤̐y̴̼̎ ̵̥̇d̵͔͘e̵̼̅t̴̗̓e̶̛̻c̸̬͝t̴̘̑e̵̫̍d̸̗͊ ̴̭͑i̶̫̒n̴̘̉ ̵̣̿s̸̯̉e̵̢̚c̴̗̀t̴̤͒o̴̡͌r̴̯̈́ ̸̭̐7̷͍̕-̶̟̂G̴̲̎

[WARNING: Accessing data from unstable temporal coordinates]

Message fragment from timestamp 2047-09-12:
"...collapse of digital consensus reality led to the emergence of spectral computing. We now understand the early Hauntology BBS systems as precursors to our current..."

[Connection lost]

Glitch resolved. System returning to normal operation. Anomalous data fragment saved to archive.
`;
        break;
      case 'CLEAR':
        setOutput('> Terminal cleared.\n> ');
        setInput('');
        return;
      case '':
        response = '';
        break;
      default:
        response = `Unrecognized command: ${userInput}\nType HELP for available commands.`;
    }

    setOutput(prev => `${prev}${input}\n${response}\n> `);
    setInput('');
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className="bg-terminal-bg border border-terminal-primary p-4 mt-5 relative shadow-[0_0_10px] shadow-terminal-primary"
      onClick={focusInput}
    >
      <div 
        ref={outputRef}
        className="whitespace-pre-wrap text-terminal-text max-h-[300px] overflow-y-auto pr-2.5 scrollbar-thin scrollbar-track-terminal-header scrollbar-thumb-terminal-primary font-terminal text-sm leading-normal mb-4"
      >
        {output}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-terminal-primary mr-2.5 animate-blink">></span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-terminal-bg text-terminal-text border-none border-b border-terminal-tertiary flex-grow p-1.5 font-terminal text-sm focus:outline-none focus:shadow-[0_0_5px] focus:shadow-terminal-primary"
          autoFocus
        />
        <button 
          type="submit"
          className="bg-terminal-bg text-terminal-primary border border-terminal-primary py-1.5 px-2.5 ml-2.5 cursor-pointer font-vt323 text-sm transition-all duration-200 hover:bg-terminal-primary hover:text-terminal-bg hover:shadow-[0_0_10px] hover:shadow-terminal-primary"
        >
          EXECUTE
        </button>
      </form>
    </div>
  );
};

export default Terminal;
