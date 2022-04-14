function TabItem({ name, id, onTabClick }) {
  return <li onClick={() => onTabClick(id)}>{name}</li>;
}

export default TabItem;
