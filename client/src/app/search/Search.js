import { useParams } from "react-router-dom";
import SearchConfig from "./config/SearchConfig.js";
import AccordionPanel from "./../../components/panel/AccordionPanel.js";
import { useSelector } from "react-redux";
import Window from "./../../components/window/Window.js";
import "./Search.css";

// import WrapWindowContainer from "../../components/wraps/wrapWindowContainer.js";

const Search = (props) => {
  // const { windowIds } = props;
  const { entityId } = useParams();

  const { type } = useSelector((store) => store.window);
  console.log(type.type);

  // const windowElements = windowId.map((id) => (
  //   <div className="sideBpart" key={id}>
  //     <Window key={id} windowId={id} />
  //   </div>
  // ));

  // const windowElements = windowIds.map((id) => (
  //   <div className="sideBpart" key={id}>
  //     <WrapWindowContainer key={id} windowId={id} />
  //   </div>
  // ));

  return (
    <div>
      <div className="search">
        {/* <div className="workplace"> */}
        {/* <div className="sideA"> */}
        <AccordionPanel title="Search" name={["", "sideMinA"]}>
          <SearchConfig entityId={entityId} />
        </AccordionPanel>
      </div>
      <div>
        {/* <div className="sideB">{windowElements}</div> */}
        <Window type={type.type} />
      </div>
    </div>
  );
};

export default Search;
