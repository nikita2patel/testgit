import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducer/Form'

export const store = configureStore({
  reducer:{
   
    counter:counterReducer,
     
  }
})