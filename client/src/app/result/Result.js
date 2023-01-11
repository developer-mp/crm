import TableGrid from "./../../components/table/Table.js";
import List from "./../../components/list/List.js";
import { useSelector } from "react-redux";
import "./Result.css";
import { Table } from "react-bootstrap";

const Result = () => {
  const { result } = useSelector((store) => store.result);

  return (
    <div className="result">
      <List title="Result">
        <div>{"Total records: " + result.data.count}</div>
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>#</th> */}
              {result.column.map((item) => (
                <th key={item.label}>{item.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* {result.data.record.map((item) => (
              <tr key={item.id}>
                {Object.values(item).map((val) => (
                  <td>{val}</td>
                ))}
              </tr>
            ))} */}
            {result.data.record.map((item) => (
              <tr key={item.id}>
                {result.column.map((col) => (
                  <td key={col.dataField}>{item[col.dataField]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </List>
    </div>
  );
};

export default Result;
