import { useState } from "react";
import ContentLayout from "./components/ContentLayout";
import Tabs from "./components/Tabs";
import TabContent from "./components/TabContent";
import "./App.css";

const countries = [
  {
    countryId: 1,
    name: "Việt Nam",
    capCity: "Hà Nội",
    food: "Phở",
    continent: "Châu Á",
  },
  {
    countryId: 2,
    name: "Nhật Bản",
    capCity: "Tokyo",
    food: "Sushi",
    continent: "Châu Á",
  },
];

function App() {
  const [selectedCountry, setSelectedCountry] = useState(1);

  const { capCity, food, continent } = countries.find(
    (country) => country.countryId === selectedCountry
  );

  function handleTabClick(id) {
    setSelectedCountry(id);
  }

  return (
    <div className="app">
      <ContentLayout>
        <Tabs countryDatas={countries} onTabClick={handleTabClick} />
        <TabContent capCity={capCity} food={food} continent={continent} />
      </ContentLayout>
    </div>
  );
}

export default App;
