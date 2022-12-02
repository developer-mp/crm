import { useParams } from "react-router-dom";
import SearchConfig from "./config/SearchConfig.js";
import List from "../../components/list/List.js";
import "./Search.css";

const Search = () => {
  const { entityId } = useParams();

  return (
    <div className="search">
      <List title="Search">
        <SearchConfig entityId={entityId} />
      </List>
    </div>
  );
};

export default Search;
