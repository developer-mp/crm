import SearchConfig from "./config/SearchConfig.js";
import "./Search.css";
import AccordionPanel from "./../../components/panel/AccordionPanel.js";
import { useParams } from "react-router-dom";
// import WrapWindowContainer from "../../components/wraps/wrapWindowContainer.js";

const Search = (props) => {
  const { windowIds } = props;
  const { entityId } = useParams();

  //   const windowElements = windowIds.map((id) => (
  //     <div className="sideBpart" key={id}>
  //       <WrapWindowContainer key={id} windowId={id} />
  //     </div>
  //   ));

  return (
    <div>
      <div className="workplace">
        <div className="sideA">
          <AccordionPanel title="Search" name={["", "sideMinA"]} bs="primary">
            <SearchConfig entityId={entityId} />
          </AccordionPanel>
        </div>
        {/* <div className="sideB">{windowElements}</div> */}
      </div>
    </div>
  );
};

export default Search;
