import Row from "./Row";

const Table = (props) => {
  const { data } = props;
  return (
    <table className="table table-striped table-bordered table-hover">
      <tbody>
        {data.map((row) => (
          <Row type={row.type} number={row.number} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
