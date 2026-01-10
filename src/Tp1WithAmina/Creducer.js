import { AjouterClient } from "./action";
import { SupprimeClient } from "./action";
const initialstate={
    Client:[]
}
export default function Creducer(state=initialstate,action){
    switch(action.type){
        case AjouterClient :return{
            ...state,Client:[...state.Client,action.payload]
        }
        case SupprimeClient:return{
            ...state,Client:state.Client.filter((C,b)=>b!==action.payload)
         }
        default :
        return state
    }
}
// clients: state.clients.filter((su, i)=> i !== action.payload)