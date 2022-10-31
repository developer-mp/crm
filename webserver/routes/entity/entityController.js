const EntityService = require("../../services/entity/entityService");
const UserUtility = require("../../utilities/user/userMenu");

class EntityController {
  static getEntityForAdd(req, res, next) {
    const { user } = req;
    const { searchId } = req.body;
    UserUtility.checkUserEndPointPermission(req.user);

    const params = { user: user.user, searchId };
    EntityService.addEntity(params)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static getEntityForUpdate(req, res, next) {
    const { user } = req;
    const { searchId, PK, requestKeys } = req.body;
    const params = { user: user.user, searchId, PK, requestKeys };
    UserUtility.checkUserEndPointPermission(req.user);

    EntityService.queryDetail(params)
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }
}

export default EntityController;
