const Row = (props) => {
  const { type, number } = props;
  return (
    <tr key={type}>
      <td>{type}</td>
      <td>{number}</td>
    </tr>
  );
};

export default Row;
