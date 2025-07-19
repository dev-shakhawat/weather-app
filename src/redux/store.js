import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './slices/weatherSlice'

export default configureStore({
  reducer: {
    weather: weatherSlice
  }
})