import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    data: { label: " Node 1" },
    position: { x: 200, y: 25 },
  },

  {
    id: "2",
    data: { label: <div> Node 2</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output",
    data: { label: " Node 3" },
    position: { x: 150, y: 200 },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

function Flow() {
  const [node, setnode, onnodechange] = useNodesState(initialNodes);
  const [edge, setedge, onedgechange] = useEdgesState(initialEdges);
  const connect=useCallback((connection)=>{
    const edges={...connection,animated:true, id:`${edge.length}+1`}
    setedge(prevedge=>addEdge(edges,prevedge));
  },[]);
  return (
    <div className="w-[800px] h-[500px] border-2 border-slate-600 absolute top-40 left-40 ">
      <ReactFlow nodes={node} edges={edge} onNodesChange={onnodechange} onEdgesChange={onedgechange}onConnect={connect}fitView>
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

export default Flow;
