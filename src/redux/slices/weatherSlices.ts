import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../services/api";

const apiKey = process.env.REACT_APP_API_KEY;

interface InitialState {
  currentWeather: any;
  isLoading: boolean;
  isError: boolean;
}

const initialState: InitialState = {
  currentWeather: [],
  isLoading: false,
  isError: false,
};

export const getCurrentWeather = createAsyncThunk(
  "currentWeather/fetch",
  async (city: string) => {
    try {
      const response = await instance.get(
        `data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const weatherSlice = createSlice({
  name: "currentWeather",
  initialState: initialState,
  reducers: {
    setTemperature: (state, action) => {
      state.currentWeather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWeather.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        state.currentWeather = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getCurrentWeather.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default weatherSlice.reducer;
