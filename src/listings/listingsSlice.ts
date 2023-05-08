import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../store'
import { Dto, State} from './dtos'

// define the initial state using LS type
const initialState: State = {
    active: null,
    list: <Dto[]>[
      { id: 'l1', description: 'This is the first listing', name: 'First Name', title: 'First Listing', },
      { id: 'l2', description: 'This is the second listing', name: 'Second Name', title: 'Second Listing', },
      { id: 'l3', description: 'This is the third listing', name: 'Third Name', title: 'Third Listing', },
      { id: 'l4', description: 'This is the fourth listing', name: 'Fourth Name', title: 'Fourth Listing', },
      { id: 'l5', description: 'This is the fifth listing', name: 'Fifth Name', title: 'Fifth Listing', },
      { id: 'l6', description: 'This is the sixth listing', name: 'Sixth Name', title: 'Sixth Listing', },
      { id: 'l7', description: 'This is the seventh listing', name: 'Seventh Name', title: 'Seventh Listing', },
    ],
}

/** createSlice() is a function that accepts an initial state, an object full of reducer functions, and a "slice name",
 *  and automatically generates action creators and action types that correspond to the reducers and state.
 *  This API is the standard approach for writing Redux logic.
 *  */
export const listingsSlice = createSlice({
  name: 'listings',
  // 'createSlice' will infer the state type from the 'initialState' argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setActive: (state, action: PayloadAction<Dto>) => {
      /* Redux Toolkit allows us to write "mutating" logic in reducers.
        * It doesn't actually mutate the state because it uses the Immer library,
        * which detects changes to a "draft state" and produces a brand new immutable state based off those changes
        * */
      state.active = action.payload
    },
    setList: (state, action: PayloadAction<Dto[]>) => { state.list = action.payload },
  }
})


export const { setList } = listingsSlice.actions
export const { setActive } = listingsSlice.actions

// ********** Selectors **********
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: AppState) => state.listings.list)`
export const listSelector = (s: AppState) => s.listings.list

export default listingsSlice.reducer