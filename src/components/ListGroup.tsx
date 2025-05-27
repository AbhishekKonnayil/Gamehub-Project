const ListGroup = () => {
  let items = ["Kerala", "TamilNadu", "karnataka", "Bangalore", "Maharashtra"];
  items = [];

  if (items.length == 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );

  return (
    <div>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
