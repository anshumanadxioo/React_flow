import React from "react";
import { X } from "react-bootstrap-icons";
import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";

export default function CustomEdge(props) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = props;

  const { setEdges } = useReactFlow();

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <button
          aria-label="Delete Edge"
          className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${labelX}px`, top: `${labelY}px` }}
          onClick={() =>
            setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id))
          }
        >
          <X className="text-red-500" />
        </button>
      </EdgeLabelRenderer>
    </>
  );
}
