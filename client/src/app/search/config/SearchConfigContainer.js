import SearchConfig from "./SearchConfig.js";
import { useSelector } from "react-redux";

const SearchConfigContainer = () => {
  const { searchEntities } = useSelector((store) => store.searchEntities);
  console.log(searchEntities);

  return (
    <div>
      {searchEntities.list?.map((item) => (
        <SearchConfig list={item} key={item.id} />
      ))}
    </div>
  );
};

export default SearchConfigContainer;
