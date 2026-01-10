
import { ADD_CLIENT, FILTER_CLIENTS } from "./actions";
const initialState = {
    clients : [] , filterClients: [],
};

const clientReducer = (state = initialState , action)=>{
    switch (action.type){
        case ADD_CLIENT :
            const updatedClients = [
                ...state.clients , action.payload
            ];
            return{
                ...state , 
                clients : updatedClients,
                filteredClients : [],
            };
        case FILTER_CLIENTS :
            const filtered = state.clients.filter((client)=>
            client.email.toLowerCase().includes(action.payload.toLowerCase())
            );
            return{
               ...state, 
               filteredClients : filtered, 
            };
            default :
            return state;
    }
}
export default clientReducer;
