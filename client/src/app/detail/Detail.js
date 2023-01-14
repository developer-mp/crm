import List from "../../components/list/List.js";
import Accordion from "../../components/accordion/Accordion.js";
import { useSelector } from "react-redux";
import "./Detail.css";

const Result = () => {
  const { detail } = useSelector((store) => store.detail);
  console.log(detail);

  return (
    <div className="detail">
      <List title="Detail">
        <Accordion title="Detail" />
      </List>
    </div>
  );
};

export default Result;
