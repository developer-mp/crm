import SearchService from "../../services/search/searchService.js";

class SearchController {
  static getEntityList(req, res) {
    const list = SearchService.entityList(req.user);
    res.json(list);
  }
}

export default SearchController;
