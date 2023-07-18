import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";
import { getDailyWeather } from "../../redux/slices/dailyWeatherSlice";
import styles from "./dailyWeather.module.css";
import {
  celsiusConverter,
  fahrenheitConverter,
} from "../../helper/tempConverter";
import { fiveDayForcast } from "../../helper/fivedayforecast";

const DailyWeather: React.FC = () => {
  const dispatch = useAppDispatch();
  const dailyWeather = useAppSelector(
    (state) => state.dailyWeatherReducer.dailyWeather
  );


  const unit = useAppSelector((state) => state.unitReducer);

  useEffect(() => {
    dispatch(getDailyWeather("Yerevan"));
  }, [dispatch]);

  const forecast = fiveDayForcast(dailyWeather).map((item) => {
    return (
      <div className={styles.item} key={item?.dt}>
        {item?.dt_txt.slice(5, 10)}
        <div className={styles.imgCont}>
          {unit === "°C"
            ? celsiusConverter(item?.main.temp) + unit
            : fahrenheitConverter(item?.main.temp) + unit}
          <img
            alt="pic"
            className={styles.img}
            src={`https://openweathermap.org/img/wn/${item?.weather?.[0].icon}@2x.png`}
          />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className={styles.container}>{forecast}</div>
    </div>
  );
};

export default DailyWeather;
