const _ = require("lodash");

class SearchEntityResult {
  static getQueryDetail(entity, info) {
    const { id, name, isPublic, dlm } = info;
    const item = {
      QueryID: id,
      QueryName: name,
      IsPublic: isPublic,
      QueryEntity: entity,
      QueryDLM: dlm,
    };
    return item;
  }

  static QuertInfo(QueryDetail) {
    const {
      IsPublic,
      QueryCreateDate,
      QueryCreatedBy,
      QueryDLM,
      QueryID,
      QueryName,
      QueryULM,
    } = QueryDetail;
    const item = {
      id: QueryID,
      name: QueryName,
      isPublic: IsPublic,
      dlm: QueryDLM,
      createdBy: QueryCreatedBy,
      createdDate: QueryCreateDate,
      ulm: QueryULM,
    };
    return item;
  }

  static applyColumns(list, arr) {
    const data = _.filter(
      list,
      (o) => o.isColumnSelected && o.request === undefined
    );
    _.forEach(data, (obj) => {
      _.set(obj, "isColumnSelected", false);
    });

    _.forEach(arr, (name) => {
      const item = _.find(list, { column: name });
      if (item !== undefined) {
        item.isColumnSelected = true;
      }
    });
  }

  static applyFilters(list, arr) {
    _.forEach(arr, (obj) => {
      const { key, comparable, value } = obj;
      const item = _.find(list, { column: key });
      if (item !== undefined) {
        item.isSelected = true;
        item.filterComparator = comparable;
        item.filterValue = value;
      }
    });
  }

  static getUserDetail(detail, isEdit = false) {
    const { id, firstName, lastName, email, securityRole, password, isactive } =
      detail;
    let role = securityRole;
    if (_.isArray(role)) {
      if (_.includes(role, "Admin")) {
        role = ["Admin"];
      }
      if (_.includes(role, "Power User")) {
        role = ["Power User"];
      }
      if (_.includes(role, "User")) {
        role = ["User"];
      }
      role = _.join(role, ".");
    }
    const item = {
      id: id,
      role: role,
      firstName: firstName,
      lastName: lastName,
      email,
      password,
      isactive,
    };

    if (isEdit) item.password = undefined;
    return item;
  }

  static getUserInfo(info) {
    const item = {
      id: info.id,
      userId: info.id,
      firstName: info.forstName,
      lastName: info.lastName,
      email: info.email,
      securityRole: _.split(info.role, ";"),
      isActive: info.isactive ? "Yes" : "No",
    };
    return item;
  }

  static compareDLM(serverObj, uiObj) {
    const dtServer = newDate(serverObj.DLM);
    const dt = new Date(uiObj.DLM);
    return dtServer.getTime() > dt.getTime();
  }

  static availableUser(record, privs) {
    if (record.id === 1) return false;
    if (privs === "E3R3" || !record.role) return true;
    if (privs.includes("E3") && record.userrole.includes("R0")) {
      return true;
    }
    if (privs.includes("R3") && record.userrole.includes("E0")) {
      return true;
    }
    return false;
  }
}

export default SearchEntityResult;
