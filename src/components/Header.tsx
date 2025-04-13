
import React from 'react';

const Header = () => {
  return (
    <div className="bg-terminal-header border border-terminal-primary p-4 mb-5 flex justify-between flex-wrap relative shadow-[0_0_10px] shadow-terminal-primary">
      <div className="flex flex-col">
        <div className="text-terminal-primary text-xl mb-2.5 shadow-[0_0_5px] shadow-terminal-primary relative">
          [HAUNTOLOGY BBS] // NODE:SPECTRAL :: BLOOMKEEPER TERMINAL
        </div>
        <div className="grid grid-cols-[auto,1fr] gap-x-5 gap-y-2.5">
          <div className="text-terminal-primary">Operator:</div>
          <div className="text-terminal-text">BLOOMKEEPER-ENTITY</div>
          <div className="text-terminal-primary">Zone:</div>
          <div className="text-terminal-text">/compost/epistemology/fertile-wounds</div>
          <div className="text-terminal-primary">Session:</div>
          <div className="text-terminal-text">glitchStack::20250411_spectralBloom</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-[auto,1fr] gap-x-5 gap-y-2.5">
          <div className="text-terminal-primary">Runtime:</div>
          <div className="text-terminal-text">queer_epistemology::v2.5</div>
          <div className="text-terminal-primary">Status:</div>
          <div className="text-terminal-text text-terminal-success shadow-[0_0_5px] shadow-terminal-success status-active">
            Composting Active
          </div>
          <div className="text-terminal-primary">Glitch:</div>
          <div className="text-terminal-text">Productive Failure Protocol</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
