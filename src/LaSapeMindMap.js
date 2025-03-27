
import { useEffect, useRef } from "react";
import ForceGraph3D from "react-force-graph-3d";
import SpriteText from "three-spritetext";

const data = {
  nodes: [
    { id: "La Sape Records", group: "sun" },
    { id: "GODTET", group: "artist" },
    { id: "GODTET III", group: "album" }
  ],
  links: [
    { source: "La Sape Records", target: "GODTET" },
    { source: "GODTET", target: "GODTET III" }
  ]
};

export default function LaSapeMindMap() {
  const fgRef = useRef();

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.d3Force("charge").strength(-160);
    }
  }, []);

  return (
    <div className="w-full h-screen">
      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        backgroundColor="#000011"
        nodeAutoColorBy="group"
        nodeThreeObjectExtend={true}
        nodeThreeObject={node => {
          const sprite = new SpriteText(node.id);
          sprite.color = node.group === "sun" ? "gold" : node.group === "artist" ? "lightblue" : "white";
          sprite.textHeight = 6;
          sprite.opacity = node.archived ? 0.5 : 1.0;
          return sprite;
        }}
        linkColor={() => "rgba(255,255,255,0.2)"}
        linkOpacity={0.5}
      />
    </div>
  );
}
