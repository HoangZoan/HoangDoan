function TabContent({ capCity, food, continent }) {
  return (
    <ul>
      <li>Thủ đô: {capCity}</li>
      <li>Đặc sản: {food}</li>
      <li>Châu lục: {continent}</li>
    </ul>
  );
}

export default TabContent;
