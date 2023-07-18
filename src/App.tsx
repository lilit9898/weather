import "./App.css";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import DailyWeather from "./components/dailyWeather/DailyWeather";
import MainLayout from "./shared/MainLayout";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <CurrentWeather />
        <DailyWeather />
      </MainLayout>
    </div>
  );
}

export default App;
