import { useCallback } from "react";
import ReactFlow, { Background, Controls, addEdge, useNodesState } from "reactflow";
import PaymentInit from "./PaymentInit";
import { initalNode, initialEdges } from "./Workflow_constant";
import PaymentCountry from "./PaymentCountry";
import CustomEdge from "./CutomEdge";
import PaymentProvider from "./PaymentProvider";
import paymentProviderSelect from "./PaymentProviderSelect";


const nodeTypes={
    paymentInit:PaymentInit,
    paymentCountry:PaymentCountry,
    paymentProvider:PaymentProvider,
    paymentProviderselect:paymentProviderSelect
}
const edgeTypes = {
   customEdge:CustomEdge
  };
  
  export const WorkFlow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initalNode);
    const [edges, setEdges, onEdgesChange] = useNodesState(initialEdges);
  
    const onConnect = useCallback((connection) => {
      const edge = {
        ...connection,
        animated: true,
        id: `${edges.length + 1}`, // fix the id concatenation issue
        type: "customEdge",
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    }, [edges, setEdges]);
  
    return (
      <div className="w-[800px] h-[500px] border-2 border-slate-600 absolute top-40 left-40 ">
        <ReactFlow 
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect} // Use the corrected onConnect function here
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    );
  };
  
