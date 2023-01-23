import SearchEntity from "./element/SearchEntity.js";
import List from "../../component/list/List.js";
import { useParams } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const { entityId } = useParams();

  return (
    <div className="search">
      <List title="Search">
        <SearchEntity entityId={entityId} />
      </List>
    </div>
  );
};

export default Search;
