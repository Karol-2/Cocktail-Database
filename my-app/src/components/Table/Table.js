import Row from "./Row";
import "./Table.scss";

const Table = (props) => {
  const { data } = props;
  return (
    <table>
      <tbody>
        {data.map((row) => (
          <Row type={row.type} number={row.number} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
