import { ADD_CLIENT, FILTER_CLIENTS, DELETE_CLIENT } from "./actions";
const initialState = {
    clients: [],
    filteredClients: [],
};
const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CLIENT:
            return {
                ...state,
                clients: [...state.clients, action.payload],
                filteredClients: [],
            };

        case FILTER_CLIENTS:
            return {
                ...state,
                filteredClients: state.clients.filter((client) =>
                    client.email
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                ),
            };

        case DELETE_CLIENT:
            return {
                ...state,
                clients: state.clients.filter(
                    (client) => client.email !== action.payload
                ),
                filteredClients: [],
            };

        default:
            return state;
    }
};

export default clientReducer;
