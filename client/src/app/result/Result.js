import List from "./../../component/list/List.js";
import { getDetail } from "../../actions/detail.js";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const { result } = useSelector((store) => store.result);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const viewRecord = (row) => {
    navigate("/detail");
    dispatch(getDetail(row));
  };

  return (
    <div className="result">
      <List title="Result">
        <div className="result-count">
          {"Total records: " + result.data?.count}
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              {result.detail?.[0].column.map((item) => (
                <th key={item.label}>{item.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.data?.record.map((item) => (
              <tr key={item.id} onClick={() => viewRecord(item)}>
                {result.detail?.[0].column.map((col) => (
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
