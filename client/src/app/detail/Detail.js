import List from "../../component/list/List.js";
import Accordion from "../../component/accordion/Accordion.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./Detail.css";

const Detail = () => {
  const { detail } = useSelector((store) => store.detail);
  const { result } = useSelector((store) => store.result);
  const [editedData, setEditedData] = useState(detail);
  const [editMode, setEditMode] = useState({});

  const handleEditClick = (panelTitle) => {
    setEditMode((prevMode) => ({ ...prevMode, [panelTitle]: true }));
    setEditedData(detail);
  };

  const handleCancelClick = (panelTitle) => {
    setEditMode((prevMode) => ({ ...prevMode, [panelTitle]: false }));
    setEditedData(detail);
  };

  // const handleSaveClick = () => {
  //   dispatch(updateDetail(editedData));
  //   setEditModes({});
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData({ ...editedData, [name]: value });
  };

  return (
    <div className="detail">
      <List title={"Details: " + detail.customer}>
        {result.detail?.[0].panel.map((item) => (
          <Accordion title={item.title} key={item.title}>
            {editMode[item.title] ? (
              <div>
                <button
                  className="detail-button"
                  onClick={() => handleCancelClick(item.title)}
                >
                  Cancel
                </button>
                <button
                  className="detail-button"
                  // onClick={handleSaveClick}
                >
                  Save
                </button>
              </div>
            ) : (
              <button
                className="detail-button"
                onClick={() => handleEditClick(item.title)}
              >
                Edit
              </button>
            )}
            {item.data.map((d) =>
              editMode[item.title] ? (
                <div key={d.label}>
                  <b>{d.label}</b> :{" "}
                  <input
                    type="text"
                    name={d.dataField}
                    value={editedData[d.dataField]}
                    onChange={handleInputChange}
                  />
                </div>
              ) : (
                <div key={d.label}>
                  <b>{d.label}</b> : {detail[d.dataField]}
                </div>
              )
            )}
          </Accordion>
        ))}
      </List>
    </div>
  );
};

export default Detail;
