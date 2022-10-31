import QueryService from "../../services/query/queryService.js";
import UserUtility from "../../utilities/user/userMenu.js";

class QueryController {
  static queryResult(req, res, next) {
    const { user } = req;
    const { searchId, filters } = req.body;
    UserUtility.checkUserEndpointPermission(req.user);
    const params = { user: user.user, searchId, filters };
    QueryService.queryResult(params)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static queryDetail(req, res, next) {
    const { user } = req;
    const { searchId, PK, requestKeys } = req.body;
    const params = { searchId, PK, requestKeys };
    UserUtility.checkUserEndpointPermission(user);
    QueryService.queryDetail(params)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static queryUpdate(req, res, next) {
    const { user } = req;
    const { searchId, PK, filters, name } = req.body;
    const params = { searchId, PK, filters, name };
    UserUtility.checkUserEndpointPermission(user);
    QueryService.queryUpdate(params)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static queryDelete(req, res, next) {
    const { user } = req;
    const { searchId, PK, requestKeys, sessionId } = req.body;
    const params = { user: user.user, searchId, PK, requestKeys, sessionId };
    UserUtility.checkUserEndpointPermission(req.user);
    QueryService.queryDelete(params)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static queryToken(req, res, next) {
    const params = {};
    QueryService.queryToken(params)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static queryRefresh(req, res, next) {
    const { user } = req;
    const { searchId, PK, requestKeys, sessionId } = req.body;
    const params = { user: user.user, searchId, PK, requestKeys, sessionId };
    UserUtility.checkUserEndpointPermission(req.user);
    QueryService.queryRefresh(params)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default QueryController;
