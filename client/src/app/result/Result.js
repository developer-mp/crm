import TableGrid from "./../../components/table/Table.js";
import List from "./../../components/list/List.js";
import { useSelector } from "react-redux";
import "./Result.css";
import { Table } from "react-bootstrap";

const Result = () => {
  const { result } = useSelector((store) => store.result);
  console.log(result.data.record[0].customer);
  return (
    <div className="result">
      <List title="Result">
        <div>{"Number of record(s): " + result.data.count}</div>
        {/* <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {result.data.record.from({ length: 12 }).map((_, index) => (
                <th key={index}>Table heading</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>2</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
            <tr>
              <td>3</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
              ))}
            </tr>
          </tbody>
        </Table> */}
      </List>
    </div>
  );
};

export default Result;
