import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    city:  localStorage.getItem('currentCity') || 'rangpur',
    err: false,
    latlon: {
      lat: null,
      lon: null
    }
  },
  reducers: {
    city: (state , action) => {
      state.city  = action.payload
    },
    errorCode: (state , action) => {
      state.err = action.payload
    },
    latlonupdate:(state , action) =>{
      state.latlon = action.payload
    } 
  }
})

export const { city , errorCode , latlonupdate } = weatherSlice.actions

export default weatherSlice.reducer