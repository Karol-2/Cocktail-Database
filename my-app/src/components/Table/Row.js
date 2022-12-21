const Row = (props) => {
  const { type, number } = props;
  return (
    <tr>
      <td>{type}</td>
      <td>{number}</td>
    </tr>
  );
};

export default Row;
