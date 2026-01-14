import { createSlice } from "@reduxjs/toolkit";

const gestionSlice = createSlice({
    name: "Client",
    initialState: { value: [] },
    reducers: {
        AjoutC(state, action) {
            state.value.push(action.payload);
        },
        delectC(state, action) {
            state.value = state.value.filter(
                (client) => client.ville !== action.payload.ville
            );
        },
        UpdateC(state, action) {
            const idx = state.value.findIndex((c) => c.id === action.payload.id);
            if (idx !== -1) {
                state.value[idx] = { ...state.value[idx], ...action.payload };
            }
        },
    },
});

export const { AjoutC, delectC, UpdateC } = gestionSlice.actions;
export default gestionSlice.reducer;