const ListGroup = () => {
  let items = ["Kerala", "TamilNadu", "karnataka", "Bangalore", "Maharashtra"];
  items = [];

  return (
    <div>
      <h1>List</h1>
      {items.length == 0 ? <p>No items Found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
