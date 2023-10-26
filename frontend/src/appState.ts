import {createSlice, PayloadAction} from '@reduxjs/toolkit'


interface State {
    searchString: string;
}


const initialState: State = {
    searchString: '',
}

export const appState = createSlice({
    name: 'state',
    initialState,
    reducers: {
        setSearchString: (state, action: PayloadAction<string>) => {
            state.searchString = action.payload
        }
    },
})

export const {setSearchString} = appState.actions
export default appState.reducer
