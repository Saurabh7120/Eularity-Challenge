import { createSlice } from "@reduxjs/toolkit"

export const petSlice = createSlice({
    name: 'petList',
    initialState: {
        list: null
    },
    reducers: {
        addPet: (state,payload) => {
            state.list = payload.payload
        },
        selectPet: (state,payload) => {
            debugger;
            state.list = state.list.map(i => 
                i.id === payload.payload.id ? {...i, selected: payload.payload.selected} :
                i  
            )
        },
        selectAll: (state) => {
            state.list = state.list.map(i => {return {...i, selected: true}})
        },
        clearSelection: (state) => {
            state.list = state.list.map(i => {return {...i, selected: false}})
        }
    }
})

export const { addPet, selectPet, selectAll, clearSelection } = petSlice.actions

export default petSlice.reducer

