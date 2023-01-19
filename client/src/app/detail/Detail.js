import List from "../../components/list/List.js";
import Accordion from "../../components/accordion/Accordion.js";
import { useSelector } from "react-redux";
import "./Detail.css";

const Result = () => {
  const { detail } = useSelector((store) => store.detail);
  const { result } = useSelector((store) => store.result);
  console.log(result);

  return (
    <div className="detail">
      <List title={"Details: " + detail.customer}>
        {result.detail?.[0].panel.map((item) => (
          <Accordion title={item.title} key={item.title}>
            {result.detail?.[0].panel.map((p) =>
              p.data.map((d, i) => (
                <div key={d.dataField + i}>{d.label} : Value</div>
              ))
            )}
          </Accordion>
        ))}
      </List>
    </div>
  );
};

export default Result;
