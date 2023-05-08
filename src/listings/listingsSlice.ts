import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppState } from '../store'
import { Dto, State} from './dtos'

// define the initial state using Listings State interface
const initialState: State = {
    active: null,
    list: <Dto[]>[],
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
  },
})


export const { setActive, setList } = listingsSlice.actions

// ********** Thunks **********
// thunks handle async logic and then dispatch asynchronous action with the results
export const fetchListings = () => {
  return async (dispatch: AppDispatch): Promise<void> => {
    const response = await fetch('https://labs-1a789-default-rtdb.firebaseio.com/listings.json')
    const body = await response.json()
    const result: Dto[] = []
    // transform object structure from firebase object to an array
    for (const k in body) {
      const listing = {
        id: k,
        ...body[k]
      }
      result.push(listing)
    }
    dispatch(setList(result))
  }
}

// ********** Selectors **********
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: AppState) => state.listings.list)`
export const listSelector = (s: AppState) => s.listings.list

export default listingsSlice.reducer
