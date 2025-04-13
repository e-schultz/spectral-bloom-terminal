
import React, { useState } from 'react';

interface ThreadProps {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
}

const Thread = ({ id, title, author, date, content }: ThreadProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`bg-terminal-thread-bg border border-terminal-border hover:bg-terminal-thread-hover hover:border-terminal-primary cursor-pointer transition-all duration-200 relative overflow-hidden ${expanded ? 'mb-5' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-2.5 flex justify-between items-center">
        <div className="thread-title flex items-center">
          <span className="text-terminal-primary mr-2.5">{id}</span>
          <span>{title}</span>
          <span className="text-terminal-secondary ml-1.5 shadow-[0_0_5px] shadow-terminal-secondary">
            {author}
          </span>
        </div>
        <div className="text-terminal-tertiary">{date}</div>
      </div>
      
      {expanded && (
        <div className="p-[15px_30px] border-t border-dashed border-terminal-border whitespace-pre-wrap text-terminal-text relative animate-fade-in">
          {content}
          <div className="flex gap-2.5 mt-4">
            <button className="bg-terminal-header text-terminal-primary border border-terminal-primary px-2.5 py-1.5 cursor-pointer font-vt323 text-sm transition-all duration-200 hover:bg-terminal-primary hover:text-terminal-bg hover:shadow-[0_0_10px] hover:shadow-terminal-primary">
              REPLY
            </button>
            <button className="bg-terminal-header text-terminal-primary border border-terminal-primary px-2.5 py-1.5 cursor-pointer font-vt323 text-sm transition-all duration-200 hover:bg-terminal-primary hover:text-terminal-bg hover:shadow-[0_0_10px] hover:shadow-terminal-primary">
              SHARE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thread;
