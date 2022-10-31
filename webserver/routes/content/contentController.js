import QueryContentService from "../../services/query/QueryContentService.js";
import UserUtility from "../../utilities/user/userMenu.js";

class ContentController {
  static filterType(req, res) {
    UserUtility.checkUserEndpointPermission(req.user);
    const lst = QueryContentService.filterType();
    res.json(lst);
  }

  static detail(req, res) {
    const { user } = req;
    UserUtility.checkUserEndpointPermission(req.user);
    const { searchId = 702 } = req.body;
    const lst = QueryContentService.getDetail({ user, searchId });
    res.json(lst);
  }
}

export default ContentController;
