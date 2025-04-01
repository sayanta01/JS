function List({ category = "Category", items = [] }) { // default props
  const listItems = items.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; {item.calories}
    </li>
  ));

  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  );
}

export default List;
