import { configureStore } from '@reduxjs/toolkit'
import PopularReducer from '../redux/popular/popularSlice'
import PizzaReducer from '../redux/pizzas/pizzaSlice'

export const store = configureStore({
    reducer: {
      popular: PopularReducer,
      pizza: PizzaReducer
    },
  })