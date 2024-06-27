import { ChevronBarDown } from "react-bootstrap-icons";
const PAYMENT_PROVIDERS = [
    { code: "St", name: "Stripe" },
    { code: "Gp", name: "Google Pay" },
    { code: "Ap", name: "Apple Pay" },
    { code: "Pp", name: "Paypal" },
    { code: "Am", name: "Amazon Pay" },
  ];
 function paymentProviderSelect(){ 
    
      const { setNodes } = useReactFlow();

  const onProviderClick = ({ name, code }) => {
    const location = Math.random() * 500;

    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: "paymentProvider",
        position: { x: location, y: location },
      },
    ]);
  };
    return (
        <div className="relative inline-block text-left">
          <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Add Payment Provider
          <ChevronBarDown className="-mr-1 ml-2 h-5 w-5" />
        </button>
      </div>
      <div
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          {PAYMENT_PROVIDERS.map((provider) => (
            <button
              key={provider.code}
              onClick={() => onProviderClick(provider)}
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {provider.name}
            </button>
          ))}
        </div>
      </div>
        </div>
    )
}
export default paymentProviderSelect;