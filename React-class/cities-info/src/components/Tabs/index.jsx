import TabItem from "./TabItem";

function Tabs({ countryDatas, onTabClick }) {
  return (
    <ul>
      {countryDatas.map(({ name, countryId }) => (
        <TabItem
          key={name}
          name={name}
          id={countryId}
          onTabClick={onTabClick}
        />
      ))}
    </ul>
  );
}

export default Tabs;
