import React, { useEffect, useRef } from 'react';
import ForceGraph3D from 'force-graph';

export default function LaSapeMindMap() {
  const containerRef = useRef();

  useEffect(() => {
    const Graph = ForceGraph3D()(containerRef.current)
      .graphData({
        nodes: [
          { id: 'La Sape Records', group: 'sun' },
          { id: 'GODTET', group: 'artist' },
          { id: 'GODTET III', group: 'album' }
        ],
        links: [
          { source: 'La Sape Records', target: 'GODTET' },
          { source: 'GODTET', target: 'GODTET III' }
        ]
      })
      .backgroundColor('#000011')
      .nodeAutoColorBy('group');

    return () => {
      if (Graph) Graph._destructor();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100vw', height: '100vh' }} />;
}
