import List from "../../components/list/List.js";
import Accordion from "../../components/accordion/Accordion.js";
import { useSelector } from "react-redux";
import "./Detail.css";

const Result = () => {
  const { detail } = useSelector((store) => store.detail);
  const { result } = useSelector((store) => store.result);

  return (
    <div className="detail">
      <List title={"Details: " + detail.customer}>
        {result.detail?.[0].panel.map((item) => (
          <Accordion title={item.title} key={item.title}>
            {item.data.map((d) => (
              <div key={d.label}>
                <b>{d.label}</b> : {detail[d.dataField]}
              </div>
            ))}
          </Accordion>
        ))}
      </List>
    </div>
  );
};

export default Result;

// return (
//     <div className="detail">
//       <List title={"Details: " + detail.customer}>
//         {result.detail?.[0].panel.map((item) => (
//           <Accordion title={item.title} key={item.title}>
//             {item.data.map((d) => (
//               <div key={d.label}>{d.label} : Value</div>
//             ))}
//           </Accordion>
//         ))}
//       </List>
//     </div>
//   );
// };
