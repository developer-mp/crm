import SearchService from "../../services/search/searchService.js";

class SearchController {
  static getEntity(req, res) {
    const list = SearchService.getEntityList();
    res.json(list);
  }
}

export default SearchController;
