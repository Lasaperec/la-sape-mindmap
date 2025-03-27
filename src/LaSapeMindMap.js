import React, { useEffect, useRef } from 'react';
import ForceGraph3D from 'force-graph';

export default function LaSapeMindMap() {
  const containerRef = useRef();

  useEffect(() => {
    const data = {
      nodes: [
        { id: 'La Sape Records', group: 'sun' },
        { id: 'GODTET', group: 'artist' },
        { id: 'Godriguez', group: 'artist' },
        { id: 'Horatio Luna', group: 'artist' },
        { id: 'James Wright Trio', group: 'artist' },
        { id: 'Antiphon', group: 'artist' },
        { id: 'On-Ly', group: 'artist' },
        { id: 'JK Group', group: 'archived' },
        { id: 'Zeitgeist & Tucceri', group: 'artist' },
        { id: 'The Psychedelic Freaks', group: 'artist' },
        { id: 'Astral Flex', group: 'artist' },
        { id: 'Youfez', group: 'artist' },
        { id: 'David Versace', group: 'artist' },
        { id: 'High Pass Filter', group: 'artist' },
        { id: 'Joshua Moshe', group: 'archived' },
        { id: 'GODTET (Selftitled)', group: 'album' },
        { id: 'GODTET II', group: 'album' },
        { id: 'GODTET III', group: 'album' },
        { id: 'Suite', group: 'album' },
        { id: 'Meditations', group: 'album' },
        { id: '+Strings', group: 'album' },
        { id: "Vol. 1 '14-18", group: 'album' },
        { id: 'Cultural Warriors', group: 'album' },
        { id: 'Yes Doctor', group: 'album' },
        { id: 'Pieces (Remix)', group: 'album' },
        { id: 'Antiphon (Selftitled)', group: 'album' },
        { id: 'Broth', group: 'album' },
        { id: 'Yurodivy', group: 'album' },
        { id: 'Wonderlust', group: 'album' },
        { id: 'The Young Ones', group: 'album' },
        { id: 'What’s Real?', group: 'album' },
        { id: 'Rising', group: 'album' },
        { id: 'JIN MU', group: 'album' },
        { id: 'Passing Through...', group: 'album' },
        { id: 'Conference With The Other Side', group: 'album' },
        { id: 'I Can See My House From Here', group: 'album' },
        { id: 'Crack Your Ears', group: 'album' },
        { id: 'Okra', group: 'album' },
        { id: 'Marseille Movement', group: 'album' },
        { id: 'Eye to Eye', group: 'album' },
        { id: 'Nice Coordinated Outfit', group: 'album' },
        { id: 'Inner Search', group: 'album' },
        { id: 'SAPE007 Compilation', group: 'album' },
        { id: 'Swing on Low Compilation', group: 'album' }
      ],
      links: [
        { source: 'La Sape Records', target: 'GODTET' },
        { source: 'La Sape Records', target: 'Godriguez' },
        { source: 'La Sape Records', target: 'Horatio Luna' },
        { source: 'La Sape Records', target: 'James Wright Trio' },
        { source: 'La Sape Records', target: 'Antiphon' },
        { source: 'La Sape Records', target: 'On-Ly' },
        { source: 'La Sape Records', target: 'JK Group' },
        { source: 'La Sape Records', target: 'Zeitgeist & Tucceri' },
        { source: 'La Sape Records', target: 'The Psychedelic Freaks' },
        { source: 'La Sape Records', target: 'Astral Flex' },
        { source: 'La Sape Records', target: 'Youfez' },
        { source: 'La Sape Records', target: 'David Versace' },
        { source: 'La Sape Records', target: 'High Pass Filter' },
        { source: 'La Sape Records', target: 'Joshua Moshe' },
        { source: 'GODTET', target: 'GODTET (Selftitled)' },
        { source: 'GODTET', target: 'GODTET II' },
        { source: 'GODTET', target: 'GODTET III' },
        { source: 'GODTET', target: 'Suite' },
        { source: 'GODTET', target: 'Meditations' },
        { source: 'GODTET', target: '+Strings' },
        { source: 'Godriguez', target: "Vol. 1 '14-18" },
        { source: 'Horatio Luna', target: 'Cultural Warriors' },
        { source: 'Horatio Luna', target: 'Yes Doctor' },
        { source: 'James Wright Trio', target: 'Pieces (Remix)' },
        { source: 'Antiphon', target: 'Antiphon (Selftitled)' },
        { source: 'On-Ly', target: 'Broth' },
        { source: 'On-Ly', target: 'Yurodivy' },
        { source: 'On-Ly', target: 'Wonderlust' },
        { source: 'JK Group', target: 'The Young Ones' },
        { source: 'JK Group', target: 'What’s Real?' },
        { source: 'JK Group', target: 'Rising' },
        { source: 'Zeitgeist & Tucceri', target: 'JIN MU' },
        { source: 'The Psychedelic Freaks', target: 'Passing Through...' },
        { source: 'The Psychedelic Freaks', target: 'Conference With The Other Side' },
        { source: 'Astral Flex', target: 'I Can See My House From Here' },
        { source: 'Youfez', target: 'Crack Your Ears' },
        { source: 'David Versace', target: 'Okra' },
        { source: 'David Versace', target: 'Marseille Movement' },
        { source: 'David Versace', target: 'Eye to Eye' },
        { source: 'High Pass Filter', target: 'Nice Coordinated Outfit' },
        { source: 'Joshua Moshe', target: 'Inner Search' },
        { source: 'La Sape Records', target: 'SAPE007 Compilation' },
        { source: 'La Sape Records', target: 'Swing on Low Compilation' }
      ]
    };

    const Graph = ForceGraph3D()(containerRef.current)
      .graphData(data)
      .nodeAutoColorBy('group')
      .nodeOpacity(node => node.group === 'archived' ? 0.2 : 1)
      .nodeLabel('id')
      .backgroundColor('#000011')
      .d3Force('charge').strength(-160);

    return () => {
      Graph._destructor?.();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
}
