import { configureStore, createSlice } from "@reduxjs/toolkit";


let user = createSlice({
    name: 'user',
    initialState: 'kim',
    reducers: {
        temp: () => {
            return 'ki/asdf'
        }
    }
})

let stock = createSlice({
    name: 'stock',
    initialState: [10],
    reducers: {}
})

let item = createSlice({
    name: 'item',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ],
    reducers: {
        increaseCountById: (state, action: { payload: number; type: string; }) => {
            let id = action.payload;
            let item = state.find((item => {
                return item.id === id;
            }));

            if (typeof item != 'undefined') item.count++;
        },

        addItem: (state, action: { payload: { id: number, name: string, count: number }, type: string }) => {
            state.push(action.payload);
        },
    }
})

export const { increaseCountById, addItem } = item.actions;


export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        item: item.reducer,
    }
})

