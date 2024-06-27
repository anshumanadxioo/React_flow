export const initialEdges = [
    // { id: "e1-2", source: "1", target: "2" },
    // { id: "e2-3", source: "2", target: "3", animated: true },
  ];
export const initalNode=[
    {
        id:'1',
        position:{x:100,y:100},
        data:{amount:10},
        type:"paymentInit"
    },
    {
        id:'2',
        position:{x:300,y:20},
        data:{currency:"$",country:"united State",countryCode:"US"},
        type:"paymentCountry"
    },
    {
        id: "3",
        data: { currency: "£", country: "England", countryCode: "GB" },
        position: { x: 300, y: 200 },
        type: "paymentCountry",
      },
      {
        id: "4",
        data: { name: "Google Pay", code: "Gp" },
        position: { x: 550, y: -50 },
        type: "paymentProvider",
      },
      {
        id: "5",
        data: { name: "Stripe", code: "St" },
        position: { x: 550, y: 125 },
        type: "paymentProvider",
      },
      {
        id: "6",
        data: { name: "Apple Pay", code: "Ap" },
        position: { x: 550, y: 325 },
        type: "paymentProvider",
      },
      {
        id: "7",
        data: {},
        position: { x: 275, y: -100 },
        type: "paymentProviderSelect",
      },
]