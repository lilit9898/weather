import React, { useState } from "react";
import styles from "./header.module.css";
import { useAppDispatch } from "../../redux/store";
import { getDailyWeather } from "../../redux/slices/dailyWeatherSlice";
import { getCurrentWeather } from "../../redux/slices/weatherSlices";
import { setUnit } from "../../redux/slices/unitSlice";
import { useAppSelector } from "../../redux/hooks";
interface IHeaderProps {
  measurement: boolean;
  setMeasurement: (i: boolean) => void;
}

const Header: React.FC<IHeaderProps> = ({ measurement, setMeasurement }) => {
  let [inputVal, setInputVal] = useState("");
  const dispatch = useAppDispatch();
  const unit = useAppSelector((state) => state.unitReducer);

  const handleChange = (event: React.MouseEvent<HTMLInputElement>) => {
    dispatch(setUnit(event.currentTarget.value));
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.converter}>
        <input
          type="text"
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(getCurrentWeather(inputVal));
            dispatch(getDailyWeather(inputVal));
          }}
        >
          search
        </button>
      </div>

      <form className={styles.inputCont}>
        <label>
          <input
            type="radio"
            value="°C"
            name="°C"
            id="celcius"
            checked={unit === "°C"}
            onClick={handleChange}
          />
          °C
        </label>
        <label htmlFor="farenheight">
          <input
            type="radio"
            value="°F"
            name="°F"
            id="farenheight"
            checked={unit === "°F"}
            onClick={handleChange}
          />
          °F
        </label>
      </form>
    </div>
  );
};

export default Header;
