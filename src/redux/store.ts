import { combineReducers, configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weatherSlices";
import dailyWeatherReducer from "./slices/dailyWeatherSlice";
import { useDispatch } from "react-redux";
import unitReducer from "./slices/unitSlice";

const reducer = combineReducers({
  weatherReducer,
  dailyWeatherReducer,
  unitReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
