import ResultService from "../../services/result/resultService.js";

class ResultController {
  static getResult(req, res, next) {
    const { searchId } = req.body;
    ResultService.queryResult(searchId)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default ResultController;
