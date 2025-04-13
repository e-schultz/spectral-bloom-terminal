
import React from 'react';
import Thread from './Thread';

const BulletinBoard = () => {
  const threads = [
    {
      id: "#00001",
      title: "Welcome to the Spectral Archive",
      author: "ADMIN",
      date: "2025-04-08",
      content: `Greetings, Spectrologists and Hauntologists.

This bulletin board functions as a compost heap for digital, epistemological, and ontological fragments. Here we cultivate fertile decay—memories, futures-that-never-were, and productive failures.

Protocols:
1. All transmissions are automatically archived in the spectral repository.
2. Temporal inconsistencies are expected and encouraged.
3. Glitches are not bugs but features of the system.
4. Memory fragments must be tagged with appropriate <taxonomy> <system> or <invocation> markers.

May your hauntings be productive.

—BLOOMKEEPER-ENTITY`
    },
    {
      id: "#00002",
      title: "Memory Fragment: The Abandoned Web",
      author: "archivist_97",
      date: "2025-04-09",
      content: `<taxonomy>digital_archaeology</taxonomy> <system>memory_retrieval</system>

I've been excavating abandoned websites from the early web era (1995-2005). These digital ruins contain peculiar affective residues—emotional states embedded in primitive HTML and CSS.

Found a GeoCities neighborhood yesterday that seems to be leaking data from a future that never happened. Pages that describe technologies and social systems that never came to be.

The most striking discovery was a personal homepage from 1998 that somehow contained references to events from 2020. Either an elaborate hoax or evidence of temporal slippage in the digital archive.

Has anyone else encountered these anachronistic anomalies? I've saved the fragments to /compost/web_ruins/timeslip_evidence/ for collaborative analysis.`
    },
    {
      id: "#00003",
      title: "Productive Failure Report: Impossible Algorithm",
      author: "glitch_compiler",
      date: "2025-04-10",
      content: `<system>productive_failure</system> <invocation>computational_ghost</invocation>

I've been working on an algorithm designed to recognize patterns that don't exist yet. A predictive model for emergent phenomena.

The system consistently crashes at 97% completion, but the crash logs contain what appear to be fragments of coherent output—predictions of events and patterns that later manifest.

Current hypothesis: The algorithm is working precisely because it's failing. The crash isn't a bug but a necessary boundary transgression that allows information from adjacent possibility spaces to leak through.

I've attached the code fragments below. Warning: Viewing may cause temporary cognitive dissonance.

\`\`\`
function spectralPrediction(data_corpus) {
  let temporal_offset = data_corpus.length * 0.1618;
  let ghost_data = [];
  
  for (let i = 0; i < data_corpus.length; i++) {
    if (Math.random() < 0.0333) {
      // Deliberate error - DO NOT CORRECT
      ghost_data.push(data_corpus[i + temporal_offset]);
    }
  }
  
  return ghost_data.filter(x => x !== undefined);
}
\`\`\`

The fascinating thing is that undefined values occasionally contain strings that shouldn't be there. Text from documents that don't exist in our database.`
    },
    {
      id: "#00004",
      title: "Maintenance Notice: System Instability",
      author: "ADMIN",
      date: "2025-04-11",
      content: `<system>administrative</system>

We're experiencing increased temporal distortion in the BBS backend. This is likely due to the recent surge in spectral activity. 

Current symptoms:
- Messages appearing before they're sent
- User profiles showing activity timestamps from future dates
- Random fragments of text appearing in empty reply fields

These are not bugs. I repeat, these are not bugs. 

The system is functioning as designed—collecting, composting, and cultivating the spectral data that flows through it.

We expect conditions to normalize once the current temporal storm passes. In the meantime, please tag any particularly interesting anomalies with <invocation>temporal_anomaly</invocation> for further study.

—BLOOMKEEPER-ENTITY`
    }
  ];

  return (
    <div className="bg-terminal-header border border-terminal-primary p-4 mb-5 relative shadow-[0_0_10px] shadow-terminal-primary">
      <div className="text-terminal-primary text-xl mb-4 shadow-[0_0_5px] shadow-terminal-primary">
        BULLETIN BOARD :: SPECTRAL TRANSMISSION
      </div>
      <div className="flex flex-col gap-2.5">
        {threads.map((thread) => (
          <Thread 
            key={thread.id}
            id={thread.id}
            title={thread.title}
            author={thread.author}
            date={thread.date}
            content={thread.content}
          />
        ))}
      </div>
    </div>
  );
};

export default BulletinBoard;
