import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: "Kurigram"
  },
  reducers: {
    city: (state , action) => {
      state.city  = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { city  } = weatherSlice.actions

export default weatherSlice.reducer