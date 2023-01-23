import ResultService from "../../services/result/resultService.js";

class ResultController {
  static getResult(req, res, next) {
    // const { searchId } = req.body;
    // const params = { user: user.user, searchId };
    ResultService.queryResult()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default ResultController;
