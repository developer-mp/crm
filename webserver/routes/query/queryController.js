import QueryService from "../../services/query/queryService.js";
// import UserUtility from "../../utilities/user/userMenu.js";
// import ApiService from "../../utilities/api/apiService.js";
// import axios from "axios";

class QueryController {
  static queryResult(req, res, next) {
    // const { user } = req;
    // const { searchId } = req.body;
    // UserUtility.checkUserEndpointPermission(req.user);
    // const params = { user: user.user, searchId };
    QueryService.queryResult()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static async queryDetail(req, res, next) {
    // const { user } = req;
    // const { searchId, PK, requestKeys } = req.body;
    // const params = { searchId, PK, requestKeys };
    // UserUtility.checkUserEndpointPermission(user);
    QueryService.queryDetail()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  // return await axios
  //   .post("http://localhost:4388/customer/load", {
  //     withCredentials: true,
  //   })
  //   .then((resp) => {
  //     console.log(resp.data);
  //     return resp.data;
  //   });
  // console.log(response.data);
  // return response.data;

  // const { data } = response; // make sure we can get data
  // let toJSON = JSON.parse(data);
  // return toJSON;
  // .then((res) => {
  //   return res;
  // });

  // static queryUpdate(req, res, next) {
  //   const { user } = req;
  //   const { searchId, PK, filters, name } = req.body;
  //   const params = { searchId, PK, filters, name };
  //   UserUtility.checkUserEndpointPermission(user);
  //   QueryService.queryUpdate(params)
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch(next);
  // }

  // static queryDelete(req, res, next) {
  //   const { user } = req;
  //   const { searchId, PK, requestKeys, sessionId } = req.body;
  //   const params = { user: user.user, searchId, PK, requestKeys, sessionId };
  //   UserUtility.checkUserEndpointPermission(req.user);
  //   QueryService.queryDelete(params)
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch(next);
  // }

  // static queryToken(req, res, next) {
  //   const params = {};
  //   QueryService.queryToken(params)
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch(next);
  // }

  // static queryRefresh(req, res, next) {
  //   const { user } = req;
  //   const { searchId, PK, requestKeys, sessionId } = req.body;
  //   const params = { user: user.user, searchId, PK, requestKeys, sessionId };
  //   UserUtility.checkUserEndpointPermission(req.user);
  //   QueryService.queryRefresh(params)
  //     .then((result) => {
  //       res.json(result);
  //     })
  //     .catch(next);
  // }
}

export default QueryController;
