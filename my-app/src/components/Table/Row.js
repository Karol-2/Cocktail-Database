const Row = (props) => {
  const { type, number } = props;
  return (
    <tr key={type}>
      <td key={`type ${type}`}>{type}</td>
      <td key={`number ${number}`}>{number}</td>
    </tr>
  );
};

export default Row;
