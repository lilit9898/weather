import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../services/api";
import { List, Root } from "../../types/data.type";

const apiKey = process.env.REACT_APP_API_KEY;

interface InitialState {
  dailyWeather: List[] | [];
  isLoading: boolean;
  isError: boolean;
}

const initialState: InitialState = {
  dailyWeather: [],
  isLoading: false,
  isError: false,
};

export const getDailyWeather = createAsyncThunk(
  "dailyWeather/fetch",
  async (city: string = "Yerevan") => {
    try {
      const response = await instance.get(
        `/data/2.5/forecast?q=${city}&appid=${apiKey}`
      );

      return response.data.list;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const dailyWeatherSlice = createSlice({
  name: "dailyWeather",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDailyWeather.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getDailyWeather.fulfilled, (state, action) => {
        state.dailyWeather = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getDailyWeather.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export default dailyWeatherSlice.reducer;
