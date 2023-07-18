import React, { useEffect } from "react";
import { useAppDispatch } from "../../redux/store";
import { getCurrentWeather } from "../../redux/slices/weatherSlices";
import { useAppSelector } from "../../redux/hooks";
import {
  celsiusConverter,
  fahrenheitConverter,
} from "../../helper/tempConverter";
import styles from "./currentWeather.module.css";
import { forecastCalc } from "../../helper/forecastHelper";
import { List, Root } from "../../types/data.type";

const CurrentWeather: React.FC = () => {
  const dispatch = useAppDispatch();
  const weather = useAppSelector(
    (state) => state.weatherReducer.currentWeather
  );
  const dailyWeather: List[] | [] = useAppSelector(
    (state) => state.dailyWeatherReducer.dailyWeather
  );
  const unit = useAppSelector((state) => state.unitReducer);

  useEffect(() => {
    dispatch(getCurrentWeather("Yerevan"));
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.location}>{weather.name}</div>
        <div className={styles.temp}>
          {celsiusConverter(weather.main?.temp)}°C
        </div>
        <div>
          <img
            alt="pic"
            src={`https://openweathermap.org/img/wn/${weather?.weather?.[0].icon}@2x.png`}
          />
        </div>
        <div className={styles.desc}>{weather.weather?.[0].main}</div>
      </div>
      <div>
        {forecastCalc(dailyWeather)?.map((item: any) => {
          return (
            <div className={styles.hours} key={item.id}>
              <p> {item.dt_txt.slice(-8)}</p>
              <p>
                {unit === "°C"
                  ? celsiusConverter(item?.main.temp) + unit
                  : fahrenheitConverter(item?.main.temp) + unit}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentWeather;
