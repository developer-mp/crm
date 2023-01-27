import SearchEntity from "../../utilities/search/searchEntity.js";

class SearchService {
  static getEntityList() {
    let list = SearchEntity.getEntityContent();
    return { list };
  }
}

export default SearchService;
