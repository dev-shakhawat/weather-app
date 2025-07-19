import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city: localStorage.getItem('currentCity') ? JSON.parse(localStorage.getItem('currentCity')) : 'rangpur'
  },
  reducers: {
    city: (state , action) => {
      state.city  = action.payload
    },
  }
})

export const { city  } = weatherSlice.actions

export default weatherSlice.reducer