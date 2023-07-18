import moment from "moment";
import { List } from "../types/data.type";

export const forecastCalc = (list: List[]) => {
  let currentDay = moment().format("YYYY-MM-DD");
  let updatedList = list?.filter((item: List) => {
    return item?.dt_txt.includes(currentDay);
  });
  return updatedList ? updatedList : [];
};
