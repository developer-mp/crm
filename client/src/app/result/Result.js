import List from "./../../components/list/List.js";
import { getDetail } from "../../actions/detail.js";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import { useRef } from "react";
import "./Result.css";

const Result = () => {
  const { result } = useSelector((store) => store.result);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resultRef = useRef(null);

  const viewRecord = (row) => {
    navigate("/detail");
    dispatch(getDetail(row));
  };

  const exportToCSV = () => {
    const rows = [result.detail[0].column.map((col) => col.label)];
    result.data.record.forEach((item) => {
      rows.push(result.detail[0].column.map((col) => item[col.dataField]));
    });
    const csvData = rows.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "result.csv");
  };

  return (
    <div className="result">
      <List title="Result">
        <div className="result-header">
          <div className="result-count">
            {"Total records: " + result.data?.count}
          </div>
          <button className="result-button" onClick={exportToCSV}>
            Export
          </button>
        </div>
        <Table striped bordered hover ref={resultRef}>
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
