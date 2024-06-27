import { X } from "react-bootstrap-icons";
import { Position, useReactFlow } from "reactflow";
import CustomHandle from "./CustomHandle";


const PAYMENT_PROVIDER_IMAGE_MAP = {
    St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
    Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
    Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
    Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
    Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
  };

export  default function PaymentProvider({data,id}){
    const {name,code}=data
    const {setNodes}= useReactFlow();
    const handleDelete=()=>{
      setNodes((prevnodes)=>prevnodes.filter(node=>node.id!=id));
    }
    return (
        <div className="rounded-lg border-2 border-blue-500 bg-white p-1 pb-1 pl-3 flex items-center gap-2 w-40">
            <div className="h-4 w-4 ">
              <img height="100%" width="100%" 
              src={PAYMENT_PROVIDER_IMAGE_MAP[code]} />
            </div>
            <div className="text-md -mt-0">
               {name}
            </div>
            <button
           className="text-red-500 bg-transparent p-1 rounded hover:bg-red-100"
           aria-label="Delete Payment Provider"
           onClick={handleDelete}
      ><X/></button>
      <CustomHandle type="target" position={Position.Left}/>
        </div>
    ) 
}