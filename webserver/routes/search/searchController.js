import SearchService from "../../services/search/searchService.js";
//import UserUtility from "../../utilities/user/userMenu.js";
//import entity from "../../data/content/entity.json" assert { type: "json" };

class SearchController {
  static getEntityList(req, res) {
    //const lst = SearchService.entityList(req.user);
    const lst = SearchService.entityList(req.user);
    res.json(lst);
  }

  static getQueryFilter(req, res, next) {
    // const { user } = req;
    // UserUtility.checkUserEndPointPermission(req.user);
    const { searchId, queryFilterId = 0 } = req.body;
    const params = {
      // user: user.user,
      searchId,
      queryFilterId,
    };
    SearchService.queryFilter(params)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default SearchController;

// static getQueryList(req, res, next) {
//   //const { user } = req;
//   // UserUtility.checkUserEndPointPermission(req.user);
//   const { searchId } = req.body;
//   const params = {
//     // user: user.user,
//     searchId,
//   };
//   SearchService.queryList(params)
//     .then((result) => {
//       res.json(result);
//     })
//     .catch(next);
// }
